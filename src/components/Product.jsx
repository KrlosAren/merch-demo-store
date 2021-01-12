import React from 'react';

const Product = ({ product }) => {
  const { image, title, price, description } = product;
  return (
    <div className='Products-item'>
      <img src={image} alt={title} />
      <div className='Product-item-info'>
        <h2>{title}</h2>
        <span>
          $
          {price}
        </span>
        <p>{description}</p>
      </div>
      <button type='button'>Comprar</button>
    </div>
  );
};

export default Product;