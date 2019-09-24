import React from "react";

class CheckoutProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product } = this.props;
    return (
      <div className="checkout-product-index-item">
        <img src={product.image} alt="" />
        <div>{product.name}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
        <div>{product.product_type}</div>
        <div>{product.amount}</div>
        <div>
          <button onClick={e => this.props.removeCheckoutProducts(e, product)}>
            Remove from cart
          </button>
        </div>
      </div>
    );
  }
}

export default CheckoutProductIndexItem;
