import './App.css';

import React, { useState, useEffect } from 'react';
import { NavBar } from './Components/NavBar';
import { SearchBar } from './Components/SearchBar';
import { Footer } from './Components/Footer';
import { RestaurantsButton } from './Components/RestaurantsButton';
import styled from 'styled-components';

import Map from './Components/Map';
//import { ListOfRestaurants } from './Components/ListOfRestaurants';
import { About } from './Components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import DetailsPage from './Components/DetailsPage';
import { FilteringCategories } from './Components/FilteringCategories';
import { Restaurant } from './Components/Restaurant';

function App() {
  const [restaurantsOn, setRestaurantsOn] = useState('');

  const [restaurantsButtonOn, setRestaurantsButtonOn] = useState(false);

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const handleToggleDarkModeChange = () => setIsDarkMode(!isDarkMode);

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

  //Filter by search bar
  const [search, setSearch] = useState('');
  const inputOnChangeHandler = (event) => {
    setSearch(event.target.value);
    setRestaurantsButtonOn(false);
    setRestaurantsOn('searchbar');

    setFilteredRestaurants(
      restaurants.filter((item) =>
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
    setRestaurantsButtonOn(false);
  };

  //End of filter by search bar

  return (
    <div className="App">
      <StyledPage isDarkMode={isDarkMode}>
        <Router>
          <Route>
            <Switch>
              <div>
                <NavBar
                  isDarkMode={isDarkMode}
                  handleToggleDarkModeChange={handleToggleDarkModeChange}
                />
              </div>
            </Switch>
          </Route>
          <Switch>
            <Route exact path="/">
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
                  isDarkMode={isDarkMode}
                />
                <FilteringCategories
                  restaurantsOn={restaurantsOn}
                  openButtonHandler={openButtonHandler}
                  closedButtonHandler={closedButtonHandler}
                  pickupButtonHandler={pickupButtonHandler}
                  deliveryButtonHandler={deliveryButtonHandler}
                  isDarkMode={isDarkMode}
                />
              </div>
              <hr />
              <div class="maplistcontainer">
                <div className="listcontainer">
                  <ul>
                    {filteredRestaurants &&
                      filteredRestaurants.map((item) => (
                        <Restaurant item={item} isDarkMode={isDarkMode} />
                      ))}
                  </ul>
                  <div>
                    {filteredRestaurants && filteredRestaurants.length > 0 && (
                      <Map
                        restaurants={restaurants}
                        filteredRestaurants={filteredRestaurants}
                      />
                    )}
                  </div>
                </div>
              </div>
            </Route>

            <Route
              exact
              path="/detailspage/:id"
              component={withRouter(DetailsPage)}
              isDarkMode={isDarkMode}
            />

            <Route exact path="/about/">
              <About isDarkMode={isDarkMode} />
            </Route>
            <Route exact path="/">
              <App />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </StyledPage>
    </div>
  );
}
const StyledPage = styled.div`
  border: ${(props) => (props.isDarkMode ? '1px solid white' : '')};
  background-color: ${(props) => (props.isDarkMode ? '#0a244d' : '')};
  color: ${(props) => (props.isDarkMode ? 'white' : '')};
`;
export default App;
