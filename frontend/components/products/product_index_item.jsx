import React from "react";

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, type) {
    e.preventDefault();
    const { amount } = this.state;
    const { numbersInCheckout, product } = this.props;
    let newAmount = amount;
    if (
      type == "add" &&
      product.product_type == "accessory" &&
      amount < numbersInCheckout["bike"] - numbersInCheckout["accessory"]
    ) {
      newAmount += 1;
    } else if (
      type == "add" &&
      product.product_type == "addon" &&
      amount < numbersInCheckout["bike"]
    ) {
      newAmount += 1;
    } else if (type == "add" && product.product_type == "bike") {
      newAmount += 1;
    } else if (type == "subtract" && amount - 1 > 0) {
      newAmount -= 1;
    }
    this.setState({ amount: newAmount });
  }
  render() {
    const { product, loggedIn } = this.props;
    const { amount } = this.state;
    const amountName = amount > 1 ? `${product.name}s` : `${product.name}`;
    const buttons = loggedIn ? (
      <div className="product-index-item-buttons">
        <button onClick={e => this.handleChange(e, "subtract")}>-</button>
        {`${amount} ${amountName}`}
        <button onClick={e => this.handleChange(e, "add")}>+</button>
        <button onClick={e => this.props.handleSubmit(e, product, amount)}>
          Add to cart
        </button>
      </div>
    ) : (
      <div></div>
    );
    return (
      <div className="product-index-item">
        <img src={product.image} alt="" className="product-index-item-img" />
        <div className="product-index-item-contents">
          <div className="product-index-item-info">
            <div className="product-index-item-name">{product.name}</div>
            <div>${product.price}</div>
          </div>
          {buttons}
        </div>
      </div>
    );
  }
}

export default ProductIndexItem;
