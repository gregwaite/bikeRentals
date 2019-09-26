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
    this.rentalsLink = this.rentalsLink.bind(this);
    this.checkOutComponents = this.checkOutComponents.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }
  componentDidMount() {
    this.props.fetchProducts();
    if (this.props.loggedIn) {
      this.props.fetchOrders();
    }
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.props.fetchOrders();
    }
  }

  demoLogin() {
    this.props.login({ username: "CoolBikerPerson", password: "password" });
  }

  addCheckoutProducts(e, product, amount) {
    e.preventDefault();
    const whiteList = Object.assign({}, this.state.whiteList);
    const numbersInCheckout = Object.assign({}, this.state.numbersInCheckout);
    if (product.product_type == "bike") {
      numbersInCheckout["bike"] += amount;
      whiteList["accessory"] = true;
      whiteList["addon"] = true;
    } else if (product.product_type == "accessory") {
      numbersInCheckout["accessory"] += amount;
      if (numbersInCheckout["bike"] - numbersInCheckout["accessory"] < 1) {
        whiteList["accessory"] = false;
      }
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

    let blackList = Object.assign({}, this.state.blackList);
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
      } else if (
        numbersInCheckout["bike"] - numbersInCheckout["accessory"] >
        0
      ) {
        whiteList["accessory"] = true;
      }
    } else if (product.product_type == "accessory") {
      numbersInCheckout["accessory"] -= product.amount;
      if (numbersInCheckout["bike"] - numbersInCheckout["accessory"] > 0) {
        whiteList["accessory"] = true;
      }
    }

    if (!checkoutProducts.find(product => product.product_type == "bike")) {
      whiteList["accessory"] = false;
      whiteList["addon"] = false;
      blackList = {};
      checkoutProducts = [];
    }

    this.setState({
      checkoutProducts: checkoutProducts,
      blackList: blackList,
      whiteList: whiteList,
      numbersInCheckout: numbersInCheckout
    });
  }

  rentalsLink() {
    if (this.props.loggedIn && this.props.orders.length > 0) {
      return (
        <nav>
          <Link to="/orders">Your Rentals</Link>
        </nav>
      );
    }
  }

  checkOutComponents(checkoutProducts, createOrder, loggedIn) {
    if (loggedIn && checkoutProducts.length > 0) {
      return (
        <div className="checkout-product-index">
          <h1>Checkout</h1>
          <CheckoutProductIndex
            checkoutProducts={checkoutProducts}
            createOrder={createOrder}
            removeCheckoutProducts={this.removeCheckoutProducts}
            history={this.props.history}
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

    const bikes = [];
    let bikesH1 = "";
    const accessories = [];
    let accessoriesH1 = "";
    const addons = [];
    let addonsH1 = "";
    products.forEach(product => {
      if (
        !blackList[product.id] &&
        whiteList[product.product_type] &&
        product.product_type == "bike"
      ) {
        bikesH1 = loggedIn ? (
          <h3>Rent a bike!</h3>
        ) : (
          <h2>
            Log in or <button onClick={this.demoLogin}> or Demo</button> to rent
            a bike!
          </h2>
        );
        bikes.push(
          <ProductIndexItem
            product={product}
            key={product.id}
            handleSubmit={this.addCheckoutProducts}
            loggedIn={loggedIn}
            numbersInCheckout={numbersInCheckout}
          ></ProductIndexItem>
        );
      } else if (
        !blackList[product.id] &&
        whiteList[product.product_type] &&
        product.product_type == "accessory"
      ) {
        accessoriesH1 = <h3>Won't hurt to get a helmet! (1 per bike)</h3>;
        accessories.push(
          <ProductIndexItem
            product={product}
            key={product.id}
            handleSubmit={this.addCheckoutProducts}
            loggedIn={loggedIn}
            numbersInCheckout={numbersInCheckout}
          ></ProductIndexItem>
        );
      } else if (
        !blackList[product.id] &&
        whiteList[product.product_type] &&
        product.product_type == "addon"
      ) {
        addonsH1 = <h3>Add some insurance</h3>;
        addons.push(
          <ProductIndexItem
            product={product}
            key={product.id}
            handleSubmit={this.addCheckoutProducts}
            loggedIn={loggedIn}
            numbersInCheckout={numbersInCheckout}
          ></ProductIndexItem>
        );
      }
    });
    const rentalsLink = this.rentalsLink();
    const checkOutComponents = this.checkOutComponents(
      checkoutProducts,
      createOrder,
      loggedIn
    );
    return (
      <div className="all-products">
        <div className="product-index">
          {rentalsLink}
          {bikesH1}
          <div>{bikes}</div>
          {accessoriesH1}
          <div>{accessories}</div>
          {addonsH1}
          <div>{addons}</div>
        </div>
        {checkOutComponents}
      </div>
    );
  }
}

export default ProductIndex;
