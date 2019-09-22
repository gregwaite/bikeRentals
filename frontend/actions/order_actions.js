import * as APIUtil from "../util/order_api_util";

export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const DESTROY_ORDERS = "DESTROY_ORDERS";

export const receiveOrder = order => {
  return {
    type: RECEIVE_ORDER,
    order: order
  };
};
export const receiveOrders = orders => {
  return {
    type: RECEIVE_ORDERS,
    orders: orders
  };
};
export const destroyOrders = () => {
  return {
    type: DESTROY_ORDERS
  };
};

export const createOrder = order => dispatch => {
  return APIUtil.createOrder(order).then(order => {
    dispatch(receiveOrder(order));
  });
};
export const fetchOrders = () => dispatch => {
  return APIUtil.fetchOrders().then(orders => {
    dispatch(receiveOrders(orders));
  });
};
