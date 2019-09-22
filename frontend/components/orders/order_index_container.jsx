import { connect } from "react-redux";
import { fetchOrders } from "../../actions/order_actions";
import OrderIndex from "./order_index";

const mapStateToProps = state => {
  return {
    orders: Object.values(state.entities.orders)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderIndex);
