import React from 'react';
import PropTypes from 'prop-types';

// import toggleCart from '../store/actions/CartActions';

import addSVG from './CartProduct.res/add.svg';
import deleteSVG from './CartProduct.res/delete.svg';
import closeSVG from '../assets/images/close.svg';

import styles from './CartProduct.res/CartProduct.css';

const CartProduct = ({
  cost,
  count,
  name,
  imageURL,
  increaseCount,
  decreaseCount,
  deleteItem,
  toggleCart
}) => {
  return (
    <div className={styles.common}>
      <img src={imageURL} alt="product"/>
      <div>
        <span>{name}</span>
        <img src={addSVG} onClick={increaseCount} alt="increaseCount"/>
        {count}
        <img src={deleteSVG} onClick={decreaseCount} alt="decreaseCount"/>
        {cost}
      </div>
      <img src={closeSVG} onClick={deleteItem} alt="deleteItem"/>
    </div>
  );
};

CartProduct.PropTypes = {
  cost: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,  
  imageURL: PropTypes.string.isRequired,
  increaseCount: PropTypes.func,
  decreaseCount: PropTypes.func,
  deleteItem: PropTypes.func,
  toggleCart: PropTypes.func
}

export default CartProduct;