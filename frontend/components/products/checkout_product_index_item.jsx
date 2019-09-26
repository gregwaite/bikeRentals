import React from "react";

class CheckoutProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product } = this.props;
    return (
      <div className="product-index-item">
        <img src={product.image} alt="" className="product-index-item-img" />
        <div>
          <div className="product-index-item-info">
            <div className="product-index-item-name">{product.name}</div>
            <div>${product.price}</div>
            <div>QTY: {product.amount}</div>
          </div>
          <div className="checkout-product-index-item-buttons">
            <button
              onClick={e => this.props.removeCheckoutProducts(e, product)}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutProductIndexItem;
