import React from "react";
import logo_head from "../images/logo_head.png";

export const Footer = () => {
  return (
    <footer>
      <img class="socialmedia" src="https://www.pngitem.com/pimgs/m/81-815445_transparent-social-media-icons-orange-hd-png-download.png" alt="socialmedia" />
      <div> Social-media </div>
      <img class="foodylogo" src={logo_head} alt="FoodyLogo" />
      <div>All Right Reserved</div>
    </footer>
  );
};
