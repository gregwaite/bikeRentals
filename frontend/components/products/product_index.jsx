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
    this.orders = this.orders.bind(this);
    this.checkOut = this.checkOut.bind(this);
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

  orders() {
    if (this.props.loggedIn) {
      return (
        <nav>
          <Link to="/orders">Your Orders</Link>
        </nav>
      );
    }
  }

  checkOut(checkoutProducts, createOrder, loggedIn) {
    if (loggedIn && checkoutProducts.length > 0) {
      return (
        <div>
          <h1>Checkout</h1>
          <CheckoutProductIndex
            checkoutProducts={checkoutProducts}
            createOrder={createOrder}
          ></CheckoutProductIndex>
        </div>
      );
    }
  }
  render() {
    const { products, createOrder, loggedIn } = this.props;
    const { checkoutProducts } = this.state;

    const productComponents = products.map(product => {
      return (
        <ProductIndexItem
          product={product}
          key={product.id}
          handleSubmit={this.addCheckoutProducts}
          loggedIn={loggedIn}
        ></ProductIndexItem>
      );
    });
    const orders = this.orders();
    const checkOut = this.checkOut(checkoutProducts, createOrder, loggedIn);
    return (
      <div>
        {orders}
        {productComponents}
        {checkOut}
      </div>
    );
  }
}

export default ProductIndex;
