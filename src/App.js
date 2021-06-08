import './App.css';
import { NavBar } from './Components/NavBar';
import { SearchBar } from './Components/SearchBar';
import { ListOfRestaurants } from './Components/ListOfRestaurants';
import { Footer } from './Components/Footer';
import { FilteringCategories } from './Components/FilteringCategories';
import { RestaurantsButton } from './Components/RestaurantsButton';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <SearchBar />
      </div>
      <div class="bottombar">
        <RestaurantsButton />
        <FilteringCategories />
      </div>
      <hr />

      <div>
        <ListOfRestaurants />
      </div>
      <Footer />
    </div>
  );
}

export default App;
