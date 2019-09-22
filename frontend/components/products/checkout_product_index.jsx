import React from "react";
import CheckoutProductIndexItem from "./checkout_product_index_item";

class CheckoutProductIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout() {
    const { checkoutProducts } = this.props;
    const orderArray = [];
    checkoutProducts.forEach(product => {
      orderArray.push({ product_id: product.id, amount: product.amount });
    });
    const order = { user_products: orderArray };
    this.props.createOrder(order);
  }

  render() {
    const { checkoutProducts, createOrder, fetchOrders } = this.props;
    const indexItems = checkoutProducts.map((product, i) => {
      return (
        <CheckoutProductIndexItem
          product={product}
          key={i}
        ></CheckoutProductIndexItem>
      );
    });
    return (
      <div>
        {indexItems}
        <button onClick={this.handleCheckout}>Checkout</button>
        <button onClick={fetchOrders}>View Orders</button>
      </div>
    );
  }
}

export default CheckoutProductIndex;
