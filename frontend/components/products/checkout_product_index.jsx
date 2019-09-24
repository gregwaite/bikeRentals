import React from "react";
import CheckoutProductIndexItem from "./checkout_product_index_item";

class CheckoutProductIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout() {
    const { checkoutProducts, createOrder } = this.props;
    const orderArray = [];
    checkoutProducts.forEach(product => {
      orderArray.push({ product_id: product.id, amount: product.amount });
    });
    const order = { user_products: orderArray };
    createOrder(order);
    this.props.history.push("/orders");
  }

  render() {
    const { checkoutProducts, removeCheckoutProducts } = this.props;
    const indexItems = checkoutProducts.map((product, i) => {
      return (
        <CheckoutProductIndexItem
          product={product}
          key={i}
          removeCheckoutProducts={removeCheckoutProducts}
        ></CheckoutProductIndexItem>
      );
    });
    return (
      <div>
        {indexItems}
        <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    );
  }
}

export default CheckoutProductIndex;
