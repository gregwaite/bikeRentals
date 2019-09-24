import React from "react";
import OrderProduct from "./order_product";

class OrderIndexItem extends React.Component {
  render() {
    const { order } = this.props;
    const products = Object.values(order.products);
    const orderProducts = products.map(orderProduct => {
      const { amount } = order.user_products[orderProduct.id];
      return (
        <OrderProduct
          product={orderProduct}
          amount={amount}
          key={orderProduct.id}
        ></OrderProduct>
      );
    });
    return (
      <div>
        <div>This is an order your ordered</div>
        <div>{orderProducts}</div>
      </div>
    );
  }
}

export default OrderIndexItem;
