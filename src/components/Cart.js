import React from 'react';
import PropTypes from 'prop-types';

import addSVG from './Cart.res/add.svg';
import deleteSVG from './Cart.res/delete.svg';
import arrowLeftSVG from '../assets/images/goBackArrow.svg';
import closeSVG from '../assets/images/close.svg';

import styles from './Cart.res/Cart.css';

const Cart = ({ cart }) => {
  return (
    <section className={styles.visible}>
      <div>
        <img src={arrowLeftSVG} alt="close"/>
        <h1>Продолжить покупки</h1>
      </div>

      <div className={styles.productList}></div>
      
      <div className={styles.costWrapper}>
        <span className={styles.costLabel}>
          Сумма покупок
        </span>
        &#36;520.00
      </div>

      <button>Заказать товары</button>
    </section>
  );
};

export default Cart;