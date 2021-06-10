import "./App.css";

import React, {useState} from 'react'
import { NavBar } from "./Components/NavBar";
import { SearchBar } from "./Components/SearchBar";
import { ListOfRestaurants } from "./Components/ListOfRestaurants";
import { Footer } from "./Components/Footer";
import { FilteringCategories } from "./Components/FilteringCategories";
import { RestaurantsButton } from "./Components/RestaurantsButton";


function App() {
    const [restaurantsOn, setRestaurantsOn] = useState(false);
  const restaurantsButtonHandler = () => {
    setRestaurantsOn(!restaurantsOn);
  };
  return (
    <div className="App">
      <NavBar />
      
      <div>
        <SearchBar />
      </div>
      <div class="bottombar">
        <RestaurantsButton restaurantsOn={restaurantsOn} restaurantsButtonHandler={restaurantsButtonHandler} />
        <FilteringCategories />
      </div>
      <hr />

      <div>
        {restaurantsOn && <ListOfRestaurants />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
