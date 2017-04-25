import {
  TOGGLE_CART_STATE,
  CART_RECEIVE_DATA,
  CART_RECEIVE_DATA_ERROR
} from '../constants/Cart';

const initialState = {
  state: false,
  hasReceivedData: false,
  errorMessage: '',
  products: {}
}

const cart = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_CART_STATE:
      return {
        state: !state
      };
    case CART_RECEIVE_DATA:
      return {
        ...state,
        hasReceivedData: true,
        products: action.payload.data,
        errorMessage: ''
      };
    case CART_RECEIVE_DATA_ERROR:
      return {
        ...state,
        products: null,
        hasReceivedData: false,
        errorMessage: action.payload.message
      }
    default:
      return state;
  }
}

export default cart;