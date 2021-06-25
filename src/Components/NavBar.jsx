import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import iconmoon from '../images/iconmoon.png';
export const NavBar = ({ isDarkMode, handleToggleDarkModeChange }) => {
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

          <input
            type="checkbox"
            class="checkbox"
            id="checkbox"
            onChange={handleToggleDarkModeChange}
          />
          <label for="checkbox" class="label">
            <img src={iconmoon} alt="" id="iconmoon" />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MJJGX3fqNXwAjtpWHECZkGE6nvWBQ6BDaQ&usqp=CAU"
              alt=""
              id="iconsun"
            />
            <span class="ball"></span>
          </label>
        </div>

        <div>
          <div class="right-side">
            <img
              class="foodies_logo"
              src="http://www.thenaturalfoodies.com/wp-content/uploads/2019/08/welove_foodies_t.png"
              alt="Foodies"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
