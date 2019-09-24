import {
  RECEIVE_CHECKOUT_ITEM,
  RECEIVE_CHECKOUT_ITEMS,
  DESTROY_CHECKOUT_ITEMS
} from "../actions/checkout_actions";
import { merge } from "lodash";

const ordersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CHECKOUT_ITEM:
      newState[action.checkoutItem.id] = action.checkoutItem;
      return newState;
    case RECEIVE_CHECKOUT_ITEMS:
      return action.checkoutItem;
    case DESTROY_CHECKOUT_ITEMS:
      return {};
    default:
      return state;
  }
};

export default ordersReducer;
