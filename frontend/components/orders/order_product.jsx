import React from "react";

class OrderProduct extends React.Component {
  render() {
    const { product, amount } = this.props;
    debugger;
    return (
      <div>
        <p>{product.name}</p>
        <p>{amount}</p>
        <p>{product.price}</p>
        <p>{product.product_type}</p>
      </div>
    );
  }
}

export default OrderProduct;
