import React, { useContext, useRef } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

// styles
import '../styles/components/Information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className='Information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Informacion de Contacto:</h2>
        </div>
        <div className='Information-form'>
          <form ref={form}>
            <input type='text' name='name' placeholder='Nombre Completo' />
            <input type='email' name='email' placeholder='Correo' />
            <input type='text' name='address' placeholder='Direccion' />
            <input type='number' name='apto' placeholder='Apto' />
            <input type='text' name='city' placeholder='Ciudad' />
            <input type='text' name='country' placeholder='Pais' />
            <input
              type='text'
              name='state'
              placeholder='Estado / Departamento'
            />
            <input type='number' name='cp' placeholder='Codigo Postal' />
            <input type='number' name='phone' placeholder='Telefono' />
          </form>
        </div>
        <div className='Information-buttons'>
          <div className='Information-back'>
            <Link to='/checkout'>Regresar</Link>
          </div>
          <div className='Information-next'>
            <button type='button' onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className='Information-sidebar'>
        <h1>Pedido: </h1>
        {cart.map((item) => (
          <div className='Information-ite' key={item.id}>
            <div className='Information-element'>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
