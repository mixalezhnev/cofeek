import React from 'react';
import PropTypes from 'prop-types';

import addSVG from './Cart.res/add.svg';
import deleteSVG from './Cart.res/delete.svg';
import arrowLeftSVG from '../assets/images/goBackArrow.svg';
import closeSVG from '../assets/images/close.svg';

import styles from './Cart.res/Cart.css';

const Cart = ({ cart }) => {

  const calcCost = products => {
    let fullCost = 0;

    for(const product in products) {
      if (products.hasOwnProperty(product)) fullCost += products[product].cost;
    }

    return fullCost;
  }

  return (
    <section className={styles.fillVisible}>
      {/* <div className={styles.fillVisible}/> */}
      <div className={styles.panelVisible}>
        <header className={styles.header}>
          <div className={styles.continueShopping}>
            <img className={styles.imageClose} src={arrowLeftSVG} alt="close"/>
            <span className={styles.boldSpan}>Продолжить покупки</span>
          </div>
        </header>

        <div className={styles.productList}></div>
        
        <footer className={styles.costWrapper}>
          <span className={styles.costLabel}>
            Сумма покупок
          </span>
          {(Object.keys(cart.products).length > 0) ? calcCost(cart.products) : 0}руб.
          <button>Заказать товары</button>
        </footer>
      </div>
    </section>
  );
};

export default Cart;