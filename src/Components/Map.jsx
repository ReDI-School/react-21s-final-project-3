import React from 'react';
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

function Map({ restaurants, filteredRestaurants }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={options}
      >
        {filteredRestaurants.map((item) => (
          <Marker
            position={{
              lat: item.geometry.location.lat,
              lng: item.geometry.location.lng,
            }}
            icon={{
              url: 'https://image.flaticon.com/icons/png/512/45/45586.png',
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default Map;
