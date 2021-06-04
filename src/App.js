import './App.css';
import { NavBar } from './Components/NavBar';
import { SearchBar } from './Components/SearchBar';
import { ListOfRestaurants } from './Components/ListOfRestaurants';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <SearchBar />
      </div>

      <div>
        <ListOfRestaurants />
      </div>
      <Footer />
    </div>
  );
}

export default App;
