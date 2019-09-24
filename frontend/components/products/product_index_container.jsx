import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchProducts } from "../../actions/product_actions";
import { createOrder, fetchOrders } from "../../actions/order_actions";
import ProductIndex from "./product_index";

const mapStateToProps = state => {
  return {
    products: Object.values(state.entities.products),
    orders: Object.values(state.entities.orders),
    loggedIn: Boolean(state.session.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    createOrder: order => dispatch(createOrder(order)),
    fetchOrders: () => dispatch(fetchOrders())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductIndex)
);
