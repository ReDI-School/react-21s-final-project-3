import React from 'react';
import { useState, useEffect } from 'react';
import { Router, Link } from 'react-router-dom';

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
    <div class="listcontainer">
      <ul>
        {restaurants.map((item) => (
          <li class="restaurant_card">
            <div class="restaurant_image">
              <img class="image" src={item.photos[0].links[0]} alt="icon" />
            </div>
            <Router>
              <div class="card_content">
                <div class="restaurant">
                  <div class="name-box">
                    <Link to={`/detailspage/${item.id}`}>{item.name}</Link>
                  </div>
                  <div class="adress-box"> {item.formatted_address} </div>
                </div>
                <div class="categories-box">
                  <div class="closed-box">
                    {item.opening_hours.open_now ? 'open' : 'closed'}{' '}
                  </div>
                  <div class="pick-up-box">
                    {item.pickup ? 'pickup' : null}{' '}
                  </div>
                  <div class="delivery-box">
                    {item.delivery ? 'delivery' : null}
                  </div>
                </div>
              </div>
            </Router>
            <div class="thumb">
              <div>
                <span class="material-icons">thumb_up</span>
              </div>
              <div>
                <span class="material-icons">thumb_down_alt</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
