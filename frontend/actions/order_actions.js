import * as APIUtil from "../util/order_api_util";

export const RECEIVE_ORDER = "RECEIVE_ORDER";

export const receiveOrder = order => {
  return {
    type: RECEIVE_ORDER,
    order: order
  };
};

export const createOrder = () => dispatch => {
  return APIUtil.createOrder().then(order => {
    dispatch(receiveOrder(order));
  });
};
