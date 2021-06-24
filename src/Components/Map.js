import React from 'react';
import ReactMapGL from 'react-map-gl';
import { useState } from 'react';

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 45,
    longitude: -75,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });
  return (
    <div>
      <ReactMapGL {...viewport} mapboxApiAccess>
        markers here
      </ReactMapGL>
    </div>
  );
}
export default Map;
