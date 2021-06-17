import React from 'react';
import Isabelle from '../images/Isabelle.png';
import Khouloud from '../images/Khouloud.png';

export const About = () => {
  return (
    <div class="madewith">
      <h1>
        Made with <span> &hearts;</span> by Isabelle Muresan & Khouloud Karoui
      </h1>
      <img class="IK" src={Isabelle} alt="" />{' '}
      <img class="IK" src={Khouloud} alt="" />
    </div>
  );
};
