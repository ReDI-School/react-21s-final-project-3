import React from 'react';
import { Restaurant } from './Restaurant';

export const ListOfRestaurants = ({restaurants}) => {
  console.log(restaurants);

  return (
    <div class="listcontainer">
      <ul>
        {restaurants.map((item) => (
          <Restaurant item={item} />
        ))}
      </ul>
    </div>
  );
};
