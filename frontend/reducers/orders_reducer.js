import {
  RECEIVE_ORDER,
  RECEIVE_ORDERS,
  DESTROY_ORDERS
} from "../actions/order_actions";
import { merge } from "lodash";

const ordersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ORDER:
      newState[action.order.id] = action.order;
      return newState;
    case RECEIVE_ORDERS:
      return action.orders;
    case DESTROY_ORDERS:
      return {};
    default:
      return state;
  }
};

export default ordersReducer;
