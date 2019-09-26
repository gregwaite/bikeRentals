import React from "react";
import OrderProduct from "./order_product";

class OrderIndexItem extends React.Component {
  render() {
    const { order } = this.props;
    const products = Object.values(order.products);
    let totalPrice = 0;
    const orderProducts = products.map(orderProduct => {
      const { amount } = order.user_products[orderProduct.id];
      totalPrice += amount * orderProduct.price;
      return (
        <OrderProduct
          product={orderProduct}
          amount={amount}
          key={orderProduct.id}
        ></OrderProduct>
      );
    });
    return (
      <div className="individual-order">
        <div>This is a rental you rented</div>
        <div>Total Price: ${totalPrice}</div>
        <div>{orderProducts}</div>
      </div>
    );
  }
}

export default OrderIndexItem;
