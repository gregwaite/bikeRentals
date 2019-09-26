import React from "react";

class OrderProduct extends React.Component {
  render() {
    const { product, amount } = this.props;
    return (
      <div className="order-index-item">
        <div>{product.name}</div>
        <div>QTY: {amount}</div>
        <div>${product.price}</div>
      </div>
    );
  }
}

export default OrderProduct;
