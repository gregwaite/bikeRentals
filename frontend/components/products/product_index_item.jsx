import React from "react";

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product } = this.props;
    debugger;
    return (
      <div>
        <p>{product.name}</p>
        <p>{product.image}</p>
        <p>{product.description}</p>
        <p>{product.product_type}</p>
      </div>
    );
  }
}

export default ProductIndexItem;
