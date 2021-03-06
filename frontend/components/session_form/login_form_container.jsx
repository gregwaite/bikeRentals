import { connect } from "react-redux";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Login",
    navLink: <Link to="/signup">Sign Up instead</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    login: user => dispatch(login(user))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SessionForm)
);
