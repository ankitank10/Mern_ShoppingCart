import React from "react";

const CartHeader = () => {
  return (
    <header>
        <h1>ABC Shopping!!</h1>
        <h3>Your Basket</h3>
        <span className="span-header">Items you have added to your basket are shown below.</span>
        <span className="span-header">Adjust the quatitites or remove items before continuing your purchase .</span>
        <section>
          <div className="column-narrow">
            <span className="span-cart">Products</span>
          </div>
          <div className="column-wide">
            <span className="span-head">Price</span>
            <span className="span-head">Qty</span>
            <span className="span-head">Cost</span>
          </div>
        </section>
        <hr className="border-thick" />
    </header>
  );
};

export default CartHeader;
