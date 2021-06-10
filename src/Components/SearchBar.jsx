import React from "react";

export const SearchBar = () => {
  return (
    <div class="searchbar">
      <div class="sticky">
        <div searchbar_content>
          <h1>Let's Order Some Delicious Food &#10083;</h1>

          <div class="input">
            <input type="text" placeholder="Find Your Restaurant.." size="47" />
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
