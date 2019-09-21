export const fetchProducts = () => {
  return $.ajax({
    method: "get",
    url: "/api/products"
  });
};
