import React, { useContext } from 'react';

// context
import { AppContext } from '../context/AppContext';

// maps
import Map from '../components/Map';

// styles
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>{`${buyer.name}, gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className='Success-map'>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Success;
