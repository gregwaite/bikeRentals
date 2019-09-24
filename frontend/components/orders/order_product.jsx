import React from "react";

class OrderProduct extends React.Component {
  render() {
    const { product, amount } = this.props;
    return (
      <div className="product-index-item">
        <div>{product.name}</div>
        <div>{amount}</div>
        <div>{product.price}</div>
        <div>{product.product_type}</div>
      </div>
    );
  }
}

export default OrderProduct;
