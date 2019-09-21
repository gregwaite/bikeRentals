import React from "react";
import ProductIndexItem from "./product_index_item";

class ProductIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products } = this.props;
    let productComponents = products.map(product => {
      return (
        <ProductIndexItem product={product} key={product.id}></ProductIndexItem>
      );
    });
    return <div>{productComponents}</div>;
  }
}

export default ProductIndex;
