import React from 'react';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
// styles
import '../styles/components/Success.css';

const Success = () => {

  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>Carlos, gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className='Success-map'>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Success;
