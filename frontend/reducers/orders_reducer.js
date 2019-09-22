import { RECEIVE_ORDERS } from "../actions/order_actions";

const ordersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORDERS:
      return action.orders;
    default:
      return state;
  }
};

export default ordersReducer;
