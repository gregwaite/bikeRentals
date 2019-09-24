import React from "react";
import ProductIndexItem from "./product_index_item";
import CheckoutProductIndex from "./checkout_product_index";
import { Link } from "react-router-dom";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutProducts: [],
      blackList: {},
      whiteList: { bike: true, accessory: false, addon: false },
      numbersInCheckout: { bike: 0, accessory: 0 }
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
    const whiteList = Object.assign({}, this.state.whiteList);
    const numbersInCheckout = Object.assign({}, this.state.numbersInCheckout);
    if (product.product_type == "bike") {
      numbersInCheckout["bike"] += amount;
      whiteList["accessory"] = true;
    } else if (product.product_type == "accessory") {
      numbersInCheckout["accessory"] += amount;
      if (numbersInCheckout["bike"] - numbersInCheckout["accessory"] < 1) {
        whiteList["accessory"] = false;
      }
      whiteList["addon"] = true;
    }

    const blackList = Object.assign({}, this.state.blackList);
    blackList[product.id] = true;

    const checkoutProduct = Object.assign({}, product);
    checkoutProduct.amount = amount;
    const checkoutProducts = this.state.checkoutProducts.concat(
      checkoutProduct
    );

    this.setState({
      checkoutProducts: checkoutProducts,
      blackList: blackList,
      whiteList: whiteList,
      numbersInCheckout: numbersInCheckout
    });
  }
  removeCheckoutProducts(e, product) {
    e.preventDefault();

    const blackList = Object.assign({}, this.state.blackList);
    blackList[product.id] = false;

    const checkoutProduct = Object.assign({}, product);
    let checkoutProducts = this.state.checkoutProducts.filter(product => {
      return product.id != checkoutProduct.id;
    });

    const numbersInCheckout = Object.assign({}, this.state.numbersInCheckout);
    const whiteList = Object.assign({}, this.state.whiteList);

    if (product.product_type == "bike") {
      numbersInCheckout["bike"] -= product.amount;
      if (numbersInCheckout["bike"] - numbersInCheckout["accessory"] < 1) {
        whiteList["accessory"] = false;
        whiteList["addon"] = false;
      } else if (
        numbersInCheckout["bike"] - numbersInCheckout["accessory"] >
        0
      ) {
        whiteList["accessory"] = true;
      }
    } else if (product.product_type == "accessory") {
      numbersInCheckout["accessory"] -= product.amount;
    }

    if (!checkoutProducts.find(product => product.product_type == "bike")) {
      whiteList["accessory"] = false;
      whiteList["addon"] = false;
      checkoutProducts = [];
    } else if (
      !checkoutProducts.find(product => product.product_type == "accessory")
    ) {
      whiteList["addon"] = false;
    }

    this.setState({
      checkoutProducts: checkoutProducts,
      blackList: blackList,
      whiteList: whiteList,
      numbersInCheckout: numbersInCheckout
    });
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
        <div className="checkout-product-index">
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
    const {
      checkoutProducts,
      blackList,
      whiteList,
      numbersInCheckout
    } = this.state;

    const productComponents = [];
    products.forEach(product => {
      if (!blackList[product.id] && whiteList[product.product_type])
        productComponents.push(
          <ProductIndexItem
            product={product}
            key={product.id}
            handleSubmit={this.addCheckoutProducts}
            loggedIn={loggedIn}
            numbersInCheckout={numbersInCheckout}
          ></ProductIndexItem>
        );
    });
    const orders = this.orders();
    const checkOut = this.checkOut(checkoutProducts, createOrder, loggedIn);
    return (
      <div className="all-products">
        <div className="product-index">
          {orders}
          {productComponents}
        </div>
        {checkOut}
      </div>
    );
  }
}

export default ProductIndex;
