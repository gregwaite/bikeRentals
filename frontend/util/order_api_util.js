export const fetchOrders = data => {
  return $.ajax({
    method: "get",
    url: "/api/orders",
    data
  });
};
// export const createOrder = data => {
//   return $.ajax({
//     method: "post",
//     url: "/api/orders",
//     data
//   });
// };

export const createOrder = () => {
  return $.ajax({
    method: "post",
    url: "/api/orders",
    data: { user_products: [{ product_id: 8, amount: 1 }] }
  });
};
