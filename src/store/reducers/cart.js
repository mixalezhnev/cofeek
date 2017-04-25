import { TOGGLE_CART_STATE } from '../constants/Cart';

const initialState = false;

const cart = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_CART_STATE:
      return !state;
    default:
      return state;
  }
}

export default cart;