import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  return (
    <div>
      <nav class="navbar">
        <div class="left-side">
          <div
            class={splitLocation[1] === '' ? 'active-link' : ''}
            //class="home-link"
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span> Home</span>
            </Link>
          </div>

          <div
            class={splitLocation[1] === 'about' ? 'active-link' : ''}
            //class="about-link "
          >
            <Link
              to="/about"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span> About </span>
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
  );
};
