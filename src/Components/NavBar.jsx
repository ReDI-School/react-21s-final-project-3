import React from 'react';

export const NavBar = () => {
  return (
    <nav class="navbar">
      <div class="left-side">
        <div class="home-link active-link">
          <span> Home</span>
        </div>
        <div class="about-link ">
          <span> About</span>
        </div>
      </div>
      <div class="right-side">
        <img
          class="foodies_logo"
          src="http://www.thenaturalfoodies.com/wp-content/uploads/2019/08/welove_foodies_t.png"
          alt="Foodies"
        />
      </div>
    </nav>
  );
};
