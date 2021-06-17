import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../DetailsPage.css';

function DetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://redi-final-restaurants.herokuapp.com/restaurants`
      );
      const details = await response.json();

      console.log(details.results.find((restaurant) => restaurant.id === id));

      setDetails(details.results.find((restaurant) => restaurant.id === id));
    };
    fetchDetails();
  }, [id]);

  return (
    <>
      {details.name ? (
        <div className="detailsPage">
          <div className="detailcontainer">
            <h1 className="restaurantname">{details.name}</h1>
            <p>
              <span class="info">Rating </span>: {details.rating}
            </p>
            <p>
              <span class="info">Cuisine</span> : {details.cuisine}
            </p>
            <p>
              <span class="info">Adress </span>: {details.formatted_address}
            </p>
            <p>
              <span class="info">Contact </span>: {details.social.phone}
            </p>{' '}
            <p>
              <span class="info">e-mail </span>: {details.social.email}
            </p>
          </div>
          <img class="img" src={details.photos[0].links[0]} alt="icon" />
        </div>
      ) : null}
    </>
  );
}

export default DetailsPage;
