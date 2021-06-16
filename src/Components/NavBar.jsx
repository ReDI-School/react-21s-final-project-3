import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Router>
      <div>
        <nav class="navbar">
          <div class="left-side">
            <div class="home-link active-link">
              <span> Home</span>
            </div>

            <div class="about-link ">
              <Link
                to="/about"
                style={{ textDecoration: 'none', color: 'inherit' }}
                target="_blank"
              >
                About
              </Link>
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
      </div>
    </Router>
  );
};
