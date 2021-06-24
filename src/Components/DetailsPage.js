import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../DetailsPage.css';
import Map from './Map';

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { mapStyles } from './mapStyles';

const containerStyle = {
  width: '70vw',
  height: '80vh',
};

const center = {
  lat: 52.52,
  lng: 13.405,
};

const options = {
  styles: mapStyles,
};

function DetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://redi-final-restaurants.herokuapp.com/restaurants`
      );
      const details = await response.json();

      setDetails(details.results.find((restaurant) => restaurant.id === id));
    };
    fetchDetails();
  }, [id]);

  return (
    <>
      <>
        {details.name ? (
          <div>
            <div className="detailsPage">
              <img class="img" src={details.photos[0].links[0]} alt="icon" />
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
            </div>
            <div className="map">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                options={options}
              >
                (
                <Marker
                  position={{
                    lat: details.geometry.location.lat,
                    lng: details.geometry.location.lng,
                  }}
                  icon={{
                    url: 'https://image.flaticon.com/icons/png/512/45/45586.png',
                    scaledSize: window.google
                      ? new window.google.maps.Size(30, 30)
                      : null,
                  }}
                />
                )
              </GoogleMap>
            </div>
          </div>
        ) : null}
      </>
    </>
  );
}

export default DetailsPage;
