import React from 'react';
import '../App.css';

export const RestaurantsButton = ({
  restaurantsOn,
  restaurantsButtonOn,
  restaurantsButtonHandler,
}) => {
  return (
    <div>
      <button
        class="restaurantsbutton"
        onClick={restaurantsButtonHandler}
        style={
          restaurantsButtonOn
            ? { backgroundColor: 'rgb(140, 191, 217, 0.7)', color: 'orangered' }
            : null
        }
      >
        <span> Restaurants In Berlin </span>
      </button>
    </div>
  );
};
