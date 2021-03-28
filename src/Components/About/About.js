import React, { useState, useEffect } from 'react';

import Attribution from './Attribution';
import CallToAction from './CallToAction';

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

      filtered.bottomImage = data.bottom_image;
      filtered.callToActionText = data.call_to_action_text;

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
      <CallToAction banner={state.bottomImage.url}>
        {RichText.render(state.callToActionText)}
      </CallToAction>
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
