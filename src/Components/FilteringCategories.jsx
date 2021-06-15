import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export const FilteringCategories = () => {
  const location = useLocation();

  return (
    <div class="categories">
      <div>
        <Link to="/opennow">
          <button
            class="open"
            style={
              location.pathname === '/opennow'
                ? { backgroundColor: 'rgb(140, 191, 217, 0.7)' }
                : null
            }
          >
            {' '}
            Open{' '}
          </button>          
        </Link>

      </div>
      {'  '}
      <div>
        <Link to="/closednow">
          <button
            class="closed"
            style={
              location.pathname === '/closednow'
                ? { backgroundColor: 'rgb(140, 191, 217, 0.7)' }
                : null
            }
          >
            {' '}
            Closed{' '}
          </button>          
        </Link>
      </div>
      {'  '}
      <div>
        <Link to="/pickup">
          <button
            class="pick-up"
            style={
              location.pathname === '/pickup'
                ? { backgroundColor: 'rgb(140, 191, 217, 0.7)' }
                : null
            }
          >
            {' '}
            Pick-up{' '}
          </button>          
        </Link>
      </div>
      {'  '}
      <div>
        <Link to="/delivery">
          <button
            class="delivery"
            style={
              location.pathname === '/delivery'
              ? { backgroundColor: 'rgb(140, 191, 217, 0.7)' }
                : null
            }
          >
            {' '}
            Delivery{' '}
          </button>  
        </Link>
      </div>
    </div>
  );
};
