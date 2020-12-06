import React, { useState, useEffect } from 'react';
import ProfileContext from '../context/PortfolioContext';

import Prismic from 'prismic-javascript';

const ProfileContextWrap = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [isPortfolioLoading, setPortfolioLoading] = useState(true);
  const [landingImage, setLandingImage] = useState('');
  const [isGeneralLoading, setGeneralLoading] = useState(true);

  useEffect(() => {
    const endpoint = 'https://bardiciousart.cdn.prismic.io/api/v2';
    const Client = Prismic.client(endpoint);

    const fetchPortfolio = async () => {
      const query = Prismic.Predicates.at('document.type', 'portfolio_page');
      const options = { orderings: '[my.portfolio_page.order]' };

      const response = await Client.query(query, options);

      if (response) {
        const portfolio = filterResponse(response.results);
        setPortfolio(portfolio);
      }

      setPortfolioLoading(false);
    };

    const fetchLandingImage = async () => {
      const query = Prismic.Predicates.at('document.type', 'general');
      const response = await Client.query(query);

      if (response) {
        const landingImageURL = response.results[0].data.landing_image.url;
        setLandingImage(landingImageURL);
      }

      setGeneralLoading(false);
    };

    fetchPortfolio();
    fetchLandingImage();
  }, []);

  return (
    <ProfileContext.Provider
      value={{ portfolio, landingImage, isPortfolioLoading, isGeneralLoading }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

class PortfolioData {
  constructor(title, rows) {
    this.title = title;
    this.rows = rows;
  }
}

class Row {
  constructor(images, names) {
    this.images = images;
    this.names = names;
  }
}

const filterResponse = response => {
  const filtered = [];

  for (const element of response) {
    const { data } = element;
    const title = data.title[0].text;
    const rows = [];

    for (const row of data.portfolio_row) {
      const images = [];
      const names = [];

      if (row.image.url) images.push(row.image.url);
      if (row.name1[0]) names.push(row.name1[0].text);

      if (row.image2.url) images.push(row.image2.url);
      if (row.name2[0]) names.push(row.name2[0].text);

      if (row.image3.url) images.push(row.image3.url);
      if (row.name3[0]) names.push(row.name3[0].text);

      rows.push(new Row(images, names));
    }

    filtered.push(new PortfolioData(title, rows));
  }

  return filtered;
};

export default ProfileContextWrap;
