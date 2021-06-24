import React from 'react';
import searchimg from '../images/searchimg.png';
import './darkmode.css';
export const SearchBar = ({
  setRestaurantsOn,
  inputOnChangeHandler,
  search,
}) => {
  return (
    <div class="searchbar">
      <div class="sticky">
        <div searchbar_content>
          <h1>Let's Order Some Delicious Food &#10083;</h1>

          <div class="input">
            <input
              value={search}
              onChange={inputOnChangeHandler}
              type="text"
              placeholder=" Find Your Restaurant.."
              size="48"
            />
            <button type="submit" class="search-button">
              <img src={searchimg} alt="" />
            </button>
          </div>

          <h2 class="we_love">
            We Love sharing <br /> Good Food with Great <br />
            People &#9825;
          </h2>
        </div>
      </div>
    </div>
  );
};
