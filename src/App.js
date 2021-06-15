import './App.css';
import { NavBar } from './Components/NavBar';
import { SearchBar } from './Components/SearchBar';
import { ListOfRestaurants } from './Components/ListOfRestaurants';
import { Footer } from './Components/Footer';
import { FilteringCategories } from './Components/FilteringCategories';
import { RestaurantsButton } from './Components/RestaurantsButton';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  withRouter,
} from 'react-router-dom';
import DetailsPage from './Components/DetailsPage';

function App() {
  return (
    <Router>
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
          <Switch>
            <Route exact path="/" component={withRouter(ListOfRestaurants)} />
            <Route
              path="/detailspage/:id"
              component={withRouter(DetailsPage)}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
