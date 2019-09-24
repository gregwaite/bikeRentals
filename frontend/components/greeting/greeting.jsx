import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, history, destroyOrders }) => {
  const sessionLinks = () => (
    <nav>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up</Link>
      {` to Rent Bikes!`}
    </nav>
  );
  const personalGreeting = () => (
    <hgroup>
      <h2>Hi, {currentUser.username}!</h2>
      <button
        onClick={() => {
          logout();
          destroyOrders();
          history.push("/");
        }}
      >
        Log Out
      </button>
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
