import React from 'react';
import logo_head from '../images/logo_head.png';

export const Footer = () => {
  return (
    <footer>
      <div> Contact </div>
      <div> Social-media </div>
      <div> Rate-us </div>
      <img class="foodylogo" src={logo_head} alt="FoodyLogo" />
      <div>All Right Reserved</div>
    </footer>
  );
};
