import React from 'react';
import PropTypes from 'prop-types';

import CartProduct from './CartProduct';

import arrowLeftSVG from '../assets/images/goBackArrow.svg';
import styles from './Cart.res/Cart.css';

import * as helpers from '../utils/helpers';

const Cart = ({ cart }) => {
  return (
    <section className={styles.fillVisible}>
      <div className={styles.panelVisible}>
        <header className={styles.header}>
          <div className={styles.continueShopping}>
            <img className={styles.imageClose} src={arrowLeftSVG} alt="close"/>
            <span className={styles.boldSpan}>Продолжить покупки</span>
          </div>
        </header>

        <section className={styles.productList}>
          {cart.hasReceivedData
            ? cart
            : cart.errorMessage} 
        </section>
        
        <footer className={styles.costWrapper}>
          <span className={styles.costLabel}>
            Сумма покупок:
          </span>
          <span className={styles.cost}>
            {cart.totalCost}  руб.
          </span>
          <button className={styles.checkout}>Заказать товары</button>
        </footer>
      </div>
    </section>
  );
};

Cart.PropTypes = {
  cart: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    hasReceivedData: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    totalCost: PropTypes.number.isRequired,
  }),
}

export default Cart;