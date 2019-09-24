import { combineReducers } from "redux";

import users from "./users_reducer";
import products from "./products_reducer";
import orders from "./orders_reducer";

export default combineReducers({
  users,
  products,
  orders
});
