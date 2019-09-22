import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import { createOrder } from "../../actions/order_actions";
import ProductIndex from "./product_index";

const mapStateToProps = (state, ownProps) => {
  return {
    products: Object.values(state.entities.products)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    createOrder: () => dispatch(createOrder())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIndex);
