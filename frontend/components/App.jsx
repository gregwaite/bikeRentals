import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import GreetingContainer from "./greeting/greeting_container";

const App = () => (
  <div>
    <h1>Bike Rentals</h1>
    <GreetingContainer />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;