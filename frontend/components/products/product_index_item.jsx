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
      <form onSubmit={this.handleSubmit}>
        {/* <select value={amount} onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select> */}
        <button onClick={e => this.handleChange(e, "subtract")}>-</button>
        {`${amount} ${amountName}`}
        <button onClick={e => this.handleChange(e, "add")}>+</button>
        <button onClick={e => this.props.handleSubmit(e, product, amount)}>
          Add to cart
        </button>
      </form>
    ) : (
      <p></p>
    );
    return (
      <div>
        <p>{product.name}</p>
        <img src={product.image} alt="" />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.product_type}</p>
        {buttons}
      </div>
    );
  }
}

export default ProductIndexItem;
