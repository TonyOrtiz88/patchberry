import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    showAlert: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      showAlert: false
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password
    };
    this.login(user);
  };

  login = async user => {
    try {
      const res = await axios.post("api/login", user);
      this.props.history.push(`/user/${res.data._id}`);
    } catch {
      this.setState({
        showAlert: true
      });
    }
  };

  render() {
    return (
      <div>
        <Link className="color-main float-left " to="/">
          <i className="fas fa-chevron-circle-left fa-2x" />
        </Link>
        <div className="container pt-5">
          {this.state.showAlert ? (
            <div className="alert alert-danger">
              invalid username and/or password
            </div>
          ) : null}
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="color-main">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
                placeholder="Enter Username here...."
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="color-main">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn-block btn color-main-bg btn-success"
            >
              Submit
            </button>
          </form>
        </div>
        <div
          className="container card text-white bg-dark mt-3 mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Haven't registered yet? </div>
          <div className="card-body">
            <h5 className="card-title">Register below</h5>
            <p className="card-text">
              Register to become a member and share your content with thousands
              of members.
            </p>
          </div>
        </div>
        <Link
          className=" btn-block container btn color-main btn-success"
          to="/register"
        >
          Register here!
        </Link>
      </div>
    );
  }
}
