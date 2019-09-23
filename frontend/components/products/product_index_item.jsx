import React from "react";

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ amount: e.target.value });
  }
  render() {
    const { product, loggedIn } = this.props;
    const { amount } = this.state;
    const buttons = loggedIn ? (
      <form onSubmit={this.handleSubmit}>
        <select value={amount} onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
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
