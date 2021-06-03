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
              {item.formatted_address}{' '}
              {item.opening_hours.open_now ? 'open' : 'closed'}{' '}
              {item.pickup ? 'pickup' : null}{' '}
              {item.delivery ? 'delivery' : null}
              <br />
              <img src={item.photos[0].links[3]} alt="icon" />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
