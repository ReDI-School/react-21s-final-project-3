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
          <h1>{details.name}</h1>
          <div clasName="smallcontainer">
            <p>Rating: {details.rating}</p>
            <p>Cuisine: {details.cuisine}</p>
            <p>{details.formatted_address}</p>
            <p>
              Contact: {details.social.phone} e-mail: {details.social.email}
            </p>
          </div>
          <img className="img" src={details.photos[0].links[0]} alt="icon" />
        </div>
      ) : null}
    </>
  );
}

export default DetailsPage;
