import React from 'react';
import { useState, useEffect } from 'react';

export const ListOfRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await fetch(
        `https://redi-final-restaurants.herokuapp.com/restaurants`
      );
      const data = await response.json();
      console.log(data.results);
      setRestaurants(data.results);
    };
    getRestaurants();
  }, []);
  console.log(restaurants);

  return (
    <div>
      <ul>
        {restaurants.map((item) => (
          <li>
            {item.name} {item.formatted_address}{' '}
            {item.opening_hours.open_now ? 'open' : 'closed'}{' '}
            {item.pickup ? 'pickup' : null} {item.delivery ? 'delivery' : null}
            <br />
            <img src={item.photos[0].links[1]} alt="icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};
