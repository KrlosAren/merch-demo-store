import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '50vh',
    widht: '100%',
  };
  const defaultCenter = {
    lat: 17.4225854,
    lng: -99.14524,
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyBKkOtjkXwmWXgPBcRSnaqhJtB4BYgFXbk'>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
