import React from "react";

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product } = this.props;
    return (
      <div>
        <p>{product.name}</p>
        <img src={product.image} alt="" />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.product_type}</p>
      </div>
    );
  }
}

export default ProductIndexItem;
