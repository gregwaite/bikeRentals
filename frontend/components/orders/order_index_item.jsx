import React from "react";
import OrderProduct from "./order_product";

class OrderIndexItem extends React.Component {
  render() {
    const { order } = this.props;
    const products = Object.values(order.products);
    const orderProducts = products.map(orderProduct => {
      const { amount } = order.user_products[orderProduct.id];
      return (
        <OrderProduct product={orderProduct} amount={amount}></OrderProduct>
      );
    });
    return (
      <div>
        <p>This is an order your ordered</p>
        <p>{orderProducts}</p>
      </div>
    );
  }
}

export default OrderIndexItem;
