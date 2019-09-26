import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, history, destroyOrders }) => {
  const sessionLinks = () => (
    <nav className="greeting">
      <div className="greeting-links">
        <Link to="/login">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign up</Link>
        {` to Rent Bikes!`}
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="greeting">
      <div className="personal-message">
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
      </div>
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
