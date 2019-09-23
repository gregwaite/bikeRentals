import React from "react";
import ProductIndexItem from "./product_index_item";
import CheckoutProductIndex from "./checkout_product_index";
import { Link } from "react-router-dom";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutProducts: [],
      blackList: {}
    };

    this.addCheckoutProducts = this.addCheckoutProducts.bind(this);
    this.removeCheckoutProducts = this.removeCheckoutProducts.bind(this);
    this.orders = this.orders.bind(this);
    this.checkOut = this.checkOut.bind(this);
  }
  componentDidMount() {
    this.props.fetchProducts();
  }

  addCheckoutProducts(e, product, amount) {
    e.preventDefault();
    const blackList = Object.assign({}, this.state.blackList);
    blackList[product.id] = true;
    const checkoutProduct = Object.assign({}, product);
    checkoutProduct.amount = amount;
    const checkoutProducts = this.state.checkoutProducts.concat(
      checkoutProduct
    );
    this.setState({ checkoutProducts: checkoutProducts, blackList: blackList });
  }
  removeCheckoutProducts(e, product) {
    e.preventDefault();
    const blackList = Object.assign({}, this.state.blackList);
    blackList[product.id] = false;
    const checkoutProduct = Object.assign({}, product);
    const checkoutProducts = this.state.checkoutProducts.filter(product => {
      return product.id != checkoutProduct.id;
    });
    this.setState({ checkoutProducts: checkoutProducts, blackList: blackList });
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
            removeCheckoutProducts={this.removeCheckoutProducts}
          ></CheckoutProductIndex>
        </div>
      );
    }
  }
  render() {
    const { products, createOrder, loggedIn } = this.props;
    const { checkoutProducts, blackList } = this.state;

    const productComponents = [];
    products.forEach(product => {
      if (!blackList[product.id])
        productComponents.push(
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
