import { RECEIVE_ORDERS, DESTROY_ORDERS } from "../actions/order_actions";

const ordersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORDERS:
      return action.orders;
    case DESTROY_ORDERS:
      return {};
    default:
      return state;
  }
};

export default ordersReducer;
