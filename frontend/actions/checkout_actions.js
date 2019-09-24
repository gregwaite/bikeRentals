export const RECEIVE_CHECKOUT_ITEM = "RECEIVE_CHECKOUT_ITEM";
export const RECEIVE_CHECKOUT_ITEMS = "RECEIVE_CHECKOUT_ITEMS";
export const DESTROY_CHECKOUT_ITEMS = "DESTROY_CHECKOUT_ITEMS";

export const receiveCheckoutItem = checkoutItem => {
  return {
    type: RECEIVE_CHECKOUT_ITEM,
    checkoutItem: checkoutItem
  };
};
export const receiveCheckoutItems = checkoutItems => {
  return {
    type: RECEIVE_CHECKOUT_ITEMS,
    checkoutItems: checkoutItems
  };
};
export const destroyCheckoutItems = () => {
  return {
    type: DESTROY_CHECKOUT_ITEMS
  };
};
