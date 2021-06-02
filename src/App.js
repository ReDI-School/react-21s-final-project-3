import './App.css';
import { useEffect, useState, Fragment } from 'react';

function App() {
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

  return (
    <>
      <ul>
        {restaurants.map((item) => {
          return (
            <li key={item.id}>
              {item.name}
              {item.formatted_address}
            </li>
          );
        })}
      </ul>
      <div className="App">Hello world!</div>
    </>
  );
}

export default App;
