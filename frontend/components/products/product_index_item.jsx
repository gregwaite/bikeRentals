import React from "react";

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ quantity: e.target.value });
  }
  render() {
    const { product } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <p>{product.name}</p>
        <img src={product.image} alt="" />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.product_type}</p>
        <form onSubmit={this.handleSubmit}>
          <select value={quantity} onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            onClick={e => this.props.handleSubmit(e, product, quantity)}
          ></button>
        </form>
      </div>
    );
  }
}

export default ProductIndexItem;
