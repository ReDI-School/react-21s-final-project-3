import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Googlemaps() {
  const WrappedMap = withScriptjs(withGoogleMap(Googlemaps));
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 52.520008, lng: 13.404954 }}
  />;

  return (
    <div className="mapcontainer" style={{ width: '100vw', height: '50vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: '50%' }} />}
        containerElement={<div style={{ height: '50%' }} />}
        mapElement={<div style={{ height: '50%' }} />}
      />
    </div>
  );
}

export default Googlemaps;
