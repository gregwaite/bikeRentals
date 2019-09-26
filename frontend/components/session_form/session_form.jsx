import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  guestLogin() {
    this.props.login({ username: "CoolBikerPerson", password: "password" });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-signup">
        <form onSubmit={this.handleSubmit}>
          Welcome to Bike Rentals!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div>
            <br />
            <label>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <br />
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
        <button onClick={this.guestLogin}>Demo</button>
      </div>
    );
  }
}

export default SessionForm;
