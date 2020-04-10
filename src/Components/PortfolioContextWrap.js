import React, { useState, useEffect } from 'react';
import ProfileContext from '../context/PortfolioContext';

import Prismic from 'prismic-javascript';

const ProfileContextWrap = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const endpoint = 'https://bardiciousart.cdn.prismic.io/api/v2';
    const Client = Prismic.client(endpoint);

    const filterResponse = (response) => {
      const filtered = [];

      for (const element of response) {
        const uid = element.uid;
        const widthType = element.data.width_type;
        const images = [];

        for (const image of element.data.gallery) {
          images.push(image.image.url);
        }

        filtered.push(new ProfileData(uid, widthType, images));
      }

      return filtered;
    };

    const fetchData = async () => {
      const query = Prismic.Predicates.at('document.type', 'gallery_image');
      const options = { orderings: '[my.gallery_image.order]' };

      const response = await Client.query(query, options);

      if (response) {
        setPortfolio(filterResponse(response.results));
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ProfileContext.Provider value={{ portfolio, setPortfolio, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};

class ProfileData {
  constructor(uid, widthType, images) {
    this.uid = uid;
    this.widthType = widthType;
    this.images = images;
  }
}

export default ProfileContextWrap;
