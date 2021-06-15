import React from 'react';
import { useState, useEffect } from 'react';
import { Restaurant } from './Restaurant';

export const ListOfRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await fetch(
        `https://redi-final-restaurants.herokuapp.com/restaurants`
      );
      const data = await response.json();
      console.log(data.results);
      setRestaurants(data.results);
      setFilteredRestaurants(data.results);
    };
    getRestaurants();
  }, []);
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
