import React, { useState, useEffect } from 'react';

import Attribution from './Attribution';

import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';

import './About.scss';

const About = () => {
  const [state, setState] = useState(new AboutData());

  useEffect(() => {
    const endpoint = 'https://bardiciousart.cdn.prismic.io/api/v2';
    const Client = Prismic.client(endpoint);

    const filterResponse = response => {
      const filtered = new AboutData();
      const { data } = response;

      filtered.profilePicture = data.profile_picture;
      filtered.aboutText = data.about_text;

      filtered.process1Title = data.process1_title;
      filtered.process1Text = data.process1_text;
      filtered.process1Image = data.process1_image;

      filtered.process2Title = data.process2_title;
      filtered.process2Text = data.process2_text;
      filtered.process2Image = data.process2_image;

      filtered.process3Title = data.process3_title;
      filtered.process3Text = data.process3_text;
      filtered.process3Image = data.process3_image;

      filtered.bottomImage = data.bottom_image;

      return filtered;
    };

    const fetchData = async () => {
      const query = Prismic.Predicates.at('document.type', 'about_me');
      const response = await Client.query(query);

      if (response) {
        const filtered = filterResponse(response.results[0]);
        setState(filtered);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='about-me-wrapper'>
      <div className='profile-picture-container'>
        <img src={state.profilePicture.url} alt={state.profilePicture.alt} />
      </div>
      <div id='about-me'>
        <h1>ABOUT ME</h1>
        {RichText.render(state.aboutText)}
      </div>
      <div className='processes'>
        <div className='process'>
          <img src={state.process1Image.url} alt={state.process1Image.alt} />
          {RichText.render(state.process1Title)}
          {RichText.render(state.process1Text)}
        </div>
        <div className='process'>
          <img src={state.process2Image.url} alt={state.process2Image.alt} />
          {RichText.render(state.process2Title)}
          {RichText.render(state.process2Text)}
        </div>
        <div className='process'>
          <img src={state.process3Image.url} alt={state.process3Image.alt} />
          {RichText.render(state.process3Title)}
          {RichText.render(state.process3Text)}
        </div>
      </div>
      <div className='bottom-image-wrapper'>
        <img src={state.bottomImage.url} alt={state.bottomImage.alt} />
      </div>
      <Attribution />
    </div>
  );
};

class AboutData {
  aboutText = [];
  profilePicture = '';
  process1Text = [];
  process1Title = [];
  process1Image = '';
  process2Title = [];
  process2Text = [];
  process2Image = '';
  process3Title = [];
  process3Text = [];
  process3Image = '';
  bottomImage = '';
}

export default About;
