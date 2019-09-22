import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import GreetingContainer from "./greeting/greeting_container";
import ProductIndex from "./products/product_index_container";
import OrderIndex from "./orders/order_index_container";

const App = () => (
  <div>
    <h1>Bike Rentals</h1>
    <GreetingContainer />
    <Switch>
      <Route exact path="/orders" component={OrderIndex}></Route>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <Route exact path="/" component={ProductIndex}></Route>
  </div>
);

export default App;
