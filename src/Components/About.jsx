import React from 'react';
import Isabelle from '../images/Isabelle.png';
import Khouloud from '../images/Khouloud.png';

export const About = () => {
  return (
    <div class="madewith">
      <h1>
        Made with <span> &hearts;</span> by <br />
        <span class="IKname"> Isabelle Muresan </span> &
        <span class="IKname"> Khouloud Karoui</span>
      </h1>
      <div class="IKphotos">
        <img class="IK" src={Isabelle} alt="" />{' '}
        <img class="IK" src={Khouloud} alt="" />
      </div>
    </div>
  );
};
