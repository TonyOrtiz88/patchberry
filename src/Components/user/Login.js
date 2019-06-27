import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Link className="color-main float-left " to="/">
          <i className="fas fa-chevron-circle-left fa-2x" />
        </Link>
        <div className="container pt-5">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1" className="color-main">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email here...."
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1" className="color-main">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
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
