import { combineReducers } from 'redux';
import {cartData, purchaseStatus} from './cartProdReducer';

export default combineReducers({
  cartData: cartData,
  purchaseStatus: purchaseStatus
});