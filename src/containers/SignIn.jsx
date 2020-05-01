import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ContainerRow from "../components/Shared/ContainerRow";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // Set Logged in from App.js
    this.props.setIsLoggedIn(true);
    // Provided to us by react-router
    // this.props.history.push("/content");
  };

  handleInputChange = (event) => {
    // object destructuring
    const { name, value } = event.target;
    // Computer property
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <Redirect to="/content" />
        ) : (
          <ContainerRow>
            <div
              className="col"
              style={{ textAlign: "center", margin: "auto" }}
            >
              <h1>Sign In Below</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Email address</label>
                  {/* FORM INPUT */}
                  {/* REQUIRES name, value, onChange */}
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </ContainerRow>
        )}
      </>
    );
  }
}

export default SignIn;
