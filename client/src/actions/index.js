import axios from "axios";
import types from "./types";

function fetchCartProducts() {
  const request = axios.get("/api/getProducts");
  return dispatch => {
    request.then(res => {
      dispatch({
        type: types.fetchCartProducts,
        payload: res.data
      });
    });
  };
}

function modifyCart(index, operation) {
  return dispatch => {
    dispatch({
      type: types.modifyCart,
      payload: { index, operation }
    });
  };
}

function buyNow(products){
  const request = axios.post("/api/buyNow", products);
  return dispatch => {
    request.then(res => {
      dispatch({
        type: types.buyNow,
        payload: res.data
      })
    })
  }
}

export {fetchCartProducts, modifyCart, buyNow};
