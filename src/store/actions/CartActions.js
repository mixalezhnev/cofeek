import {
  TOGGLE_CART_STATE,
  CART_RECEIVE_DATA,
  CART_RECEIVE_DATA_ERROR
} from '../constants/Cart';
import { database } from '../../firebaseApp.js';

const cartProductsRef = database.ref('cart'); 

export const toggleCartState = () => ({
    type: TOGGLE_CART_STATE
});

export const listenToCart = () => {
  return (dispatch) => {
    cartProductsRef.off();
    cartProductsRef.on('value', snapshot => {
      dispatch({
        type: CART_RECEIVE_DATA,
        payload: {
          data: snapshot.val()
        }
      });
    }, error => {
      dispatch({
        type: CART_RECEIVE_DATA_ERROR,
        payload: {
          message: error.message
        }
      });
    });
  };
};