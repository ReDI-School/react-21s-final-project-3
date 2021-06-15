import './App.css';

import React, { useState, useEffect } from 'react';
import { NavBar } from './Components/NavBar';
import { SearchBar } from './Components/SearchBar';
import { Footer } from './Components/Footer';
import { RestaurantsButton } from './Components/RestaurantsButton';

import { ListOfRestaurants } from './Components/ListOfRestaurants';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  withRouter,
} from 'react-router-dom';
import DetailsPage from './Components/DetailsPage';
import { FilteringCategories } from './Components/FilteringCategories';
import { Restaurant } from './Components/Restaurant';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

function App() {
  const [restaurantsOn, setRestaurantsOn] = useState('');

  const [restaurantsButtonOn, setRestaurantsButtonOn] = useState(false);

  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');

  const filteredRestaurants = restaurants.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  

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
  };

  //Filter by search bar
  const inputOnChangeHandler = (event) => {
    setSearch(event.target.value);
    setRestaurantsButtonOn(false);
    setRestaurantsOn('searchbar');

    setRestaurantsButtonOn(false);
  };

  //End of filter by search bar

  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>

      <div>
        <SearchBar
          setRestaurantsOn={setRestaurantsOn}
          inputOnChangeHandler={inputOnChangeHandler}
          search={search}
        />
      </div>

      <div class="bottombar">
        <RestaurantsButton
          restaurantsButtonOn={restaurantsButtonOn}
          restaurantsOn={restaurantsOn}
          restaurantsButtonHandler={restaurantsButtonHandler}
        />
        <FilteringCategories />
      </div>
      <hr />

      <div>
        <Switch>
          <Route exact path="/" component={withRouter(() => <ListOfRestaurants restaurants={filteredRestaurants} />)} />
          <Route path="/opennow" component={withRouter(() => <ListOfRestaurants restaurants={filteredRestaurants.filter((restaurant) => restaurant.opening_hours.open_now)} />)} />
          <Route path="/closednow" component={withRouter(() => <ListOfRestaurants restaurants={filteredRestaurants.filter((restaurant) => !restaurant.opening_hours.open_now)} />)} />
          <Route path="/pickup" component={withRouter(() => <ListOfRestaurants restaurants={filteredRestaurants.filter((restaurant) => restaurant.pickup)} />)} />
          <Route path="/delivery" component={withRouter(() => <ListOfRestaurants restaurants={filteredRestaurants.filter((restaurant) => restaurant.delivery)} />)} />
          <Route path="/detailspage/:id" component={withRouter(DetailsPage)} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
