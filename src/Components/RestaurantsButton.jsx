import React from 'react';
import '../App.css';
import { Link, useLocation } from 'react-router-dom';

export const RestaurantsButton = ({
  restaurantsButtonOn,
}) => {

  const location = useLocation();

  return (
    <div>
      <Link to="/">
        <button
          class="restaurantsbutton"
          style={
            location.pathname === '/'
              ? { backgroundColor: 'rgb(140, 191, 217, 0.7)' }
              : null
          }
        >
          <span> Restaurants In Berlin </span>
        </button>
      </Link>
    </div>
  );
};
