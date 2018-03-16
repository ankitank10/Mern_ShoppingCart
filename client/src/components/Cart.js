import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import CartHeader from "./CartHeader";
const constants = {
  Currency_Symbol: "£",
  Vat_Per: 20
};

class Cart extends Component {
  componentDidMount() {
    this.props.fetchCartProducts();
  }
  modifyCart(index, operation) {
    this.props.modifyCart(index, operation);
  }
  renderCart() {
    if(this.props.purchaseStatus){
      return <h3>Thanks for Purchasing!</h3>;
    }
    switch (this.props.cartData) {
      case null:
        return <h3>Loading...</h3>;
      default:
        if (!this.props.cartData.length) {
          return <h3>Cart is empty. Continue Shopping!</h3>;
        }
        let subTotal = 0;
        let vatAmt = 0;
        let totalAmt = 0;
        const listItems = this.props.cartData.map((product, index) => {
          subTotal = parseFloat(
            parseFloat(
              subTotal + parseFloat((product.price * product.count).toFixed(2))
            ).toFixed(2)
          );
          return (
            <div className="product-row" key={product.index}>
              <div className="column-narrow">
                <span className="span-cart">{product.name}</span>
              </div>
              <div className="column-wide">
                <span className="span-head">
                  {constants.Currency_Symbol}
                  {product.price}
                </span>
                <div className="product-count">
                  <input
                    className="item-count"
                    type="text"
                    value={product.count}
                    readOnly="readonly"
                  />
                  <div className="btn-group">
                    <button
                      className="plus-item"
                      onClick={() => this.modifyCart(product.index, "add")}
                    >
                      +
                    </button>
                    <button
                      className="subtract-item"
                      onClick={() => this.modifyCart(product.index, "subtract")}
                      disabled={product.count === 1}
                    >
                      -
                    </button>
                  </div>
                </div>
                <span className="span-cost">
                  {(product.price * product.count).toFixed(2)}
                </span>
                <button
                  className="delete-item"
                  onClick={() => this.modifyCart(product.index, "remove")}
                />
              </div>
            </div>
          );
        });
        vatAmt = (subTotal * (constants.Vat_Per / 100)).toFixed(2);
        totalAmt = (parseFloat(subTotal) + parseFloat(vatAmt)).toFixed(2);
        const cartTotal = (
          <div className="totals" key="totals">
            <div key="Subtotal" className="totals-item">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal">
                {constants.Currency_Symbol}
                {subTotal}
              </div>
            </div>
            <div key="Vat" className="totals-item">
              <label>Vat @20%</label>
              <div className="totals-value" id="cart-tax">
                {constants.Currency_Symbol}
                {vatAmt}
              </div>
            </div>
            <div key="Total" className="totals-item totals-item-total">
              <label>Total Cost</label>
              <div className="totals-value" id="cart-total">
                {constants.Currency_Symbol}
                {totalAmt}
              </div>
            </div>
            <button
              key="checkout"
              className="checkout"
              onClick={() => this.props.buyNow(this.props.cartData)}
            >
              Buy Now >>
            </button>
          </div>
        );

        return [listItems, cartTotal];
    }
  }
  handleBuyNow() {
    alert("Buy");
  }
  render() {
    return (
      <div className="shopping-cart">
        <CartHeader />
        {this.renderCart()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartData: state.cartData,
    purchaseStatus: state.purchaseStatus
  };
}
export default connect(mapStateToProps, actions)(Cart);
