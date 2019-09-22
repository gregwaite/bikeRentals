import React from "react";
import ProductIndexItem from "./product_index_item";
import CheckoutProductIndex from "./checkout_product_index";
import { Link } from "react-router-dom";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutProducts: []
    };

    this.addCheckoutProducts = this.addCheckoutProducts.bind(this);
  }
  componentDidMount() {
    this.props.fetchProducts();
  }

  addCheckoutProducts(e, product, amount) {
    e.preventDefault();
    const checkoutProduct = Object.assign({}, product);
    checkoutProduct.amount = amount;
    const checkoutProducts = this.state.checkoutProducts.concat(
      checkoutProduct
    );
    this.setState({ checkoutProducts: checkoutProducts });
  }
  render() {
    const { products, createOrder, fetchOrders } = this.props;
    const { checkoutProducts } = this.state;

    const productComponents = products.map(product => {
      return (
        <ProductIndexItem
          product={product}
          key={product.id}
          handleSubmit={this.addCheckoutProducts}
        ></ProductIndexItem>
      );
    });
    return (
      <div>
        <nav>
          <Link to="/orders">Your Orders</Link>
        </nav>
        {productComponents}
        <h1>Checkout</h1>
        <CheckoutProductIndex
          checkoutProducts={checkoutProducts}
          createOrder={createOrder}
          fetchOrders={fetchOrders}
        ></CheckoutProductIndex>
      </div>
    );
  }
}

export default ProductIndex;
