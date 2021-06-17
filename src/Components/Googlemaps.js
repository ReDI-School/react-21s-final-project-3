import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Googlemaps() {
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 52.520008, lng: 13.404954 }}
  />;
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <div className="mapcontainer" style={{ width: '50vw', height: '50vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

export default Googlemaps;
