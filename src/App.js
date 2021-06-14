import './App.css';

import React, { useState, useEffect } from 'react';
import { NavBar } from './Components/NavBar';
import { SearchBar } from './Components/SearchBar';
import { Footer } from './Components/Footer';
import { RestaurantsButton } from './Components/RestaurantsButton';
import { FilteringCategories } from './Components/FilteringCategories';
import { Restaurant } from './Components/Restaurant';

function App() {
  const [restaurantsOn, setRestaurantsOn] = useState('');

  const [restaurantsButtonOn, setRestaurantsButtonOn] = useState(false);

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState();

  //const [open, setOpen] = useState(false);

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

  const restaurantsButtonHandler = () => {
    setRestaurantsButtonOn(!restaurantsButtonOn);
    setRestaurantsOn('restaurantsInBerlin');
    restaurantsButtonOn
      ? setFilteredRestaurants()
      : setFilteredRestaurants(restaurants);
  };
  const openButtonHandler = () => {
    setRestaurantsOn('restaurantsopen');
    setFilteredRestaurants(
      restaurants.filter((restaurant) => restaurant.opening_hours.open_now)
    );
    //setOpen(true);
    setRestaurantsButtonOn(false);
  };
  const closedButtonHandler = () => {
    setRestaurantsOn('restaurantsclosed');
    setFilteredRestaurants(
      restaurants.filter(
        (restaurant) => restaurant.opening_hours.open_now === false
      )
    );
    setRestaurantsButtonOn(false);

    //setOpen(false);
  };
  const pickupButtonHandler = () => {
    setRestaurantsOn('restaurantspickup');
    setFilteredRestaurants(
      restaurants.filter((restaurant) => restaurant.pickup)
    );
    setRestaurantsButtonOn(false);
  };
  const deliveryButtonHandler = () => {
    setRestaurantsOn('restaurantsdelivery');
    setFilteredRestaurants(
      restaurants.filter((restaurant) => restaurant.delivery)
    );
    setRestaurantsButtonOn(false);
  };

  return (
    <div className="App">
      <NavBar />

      <div>
        <SearchBar />
      </div>
      <div class="bottombar">
        <RestaurantsButton
          restaurantsButtonOn={restaurantsButtonOn}
          restaurantsOn={restaurantsOn}
          restaurantsButtonHandler={restaurantsButtonHandler}
        />
        <FilteringCategories
          restaurantsOn={restaurantsOn}
          openButtonHandler={openButtonHandler}
          closedButtonHandler={closedButtonHandler}
          pickupButtonHandler={pickupButtonHandler}
          deliveryButtonHandler={deliveryButtonHandler}
        />
      </div>
      <hr />

      <div class="listcontainer">
        <ul>
          {filteredRestaurants &&
            filteredRestaurants.map((item) => <Restaurant item={item} />)}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default App;
