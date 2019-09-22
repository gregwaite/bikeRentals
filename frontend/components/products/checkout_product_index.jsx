import React from "react";
import CheckoutProductIndexItem from "./checkout_product_index_item";

class CheckoutProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { checkoutProducts } = this.props;
    const indexItems = checkoutProducts.map((product, i) => {
      return (
        <CheckoutProductIndexItem
          product={product}
          key={i}
        ></CheckoutProductIndexItem>
      );
    });
    return <div>{indexItems}</div>;
  }
}

export default CheckoutProductIndex;
