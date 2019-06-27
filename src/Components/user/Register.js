import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div>
        <Link className="color-main float-left " to="/login">
          <i className="fas fa-chevron-circle-left fa-2x" />
        </Link>
        <br />
        <br />
        <div className="container">
          <form className="needs-validation" novalidate>
            <div className="form-row">
              <div className="col-md-4 mb-3 color-secondary">
                <label for="validationCustom01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="First name"
                  value=""
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3 color-secondary">
                <label for="validationCustom02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  placeholder="Last name"
                  value=""
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3 color-secondary">
                <label for="validationCustomUsername">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="validationCustomUsername"
                    placeholder="valid E-mail"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3 color-secondary">
                <label for="validationCustom03">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  placeholder="City"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3 color-secondary">
                <label for="validationCustom04">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom04"
                  placeholder="State"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3 color-secondary">
                <label for="validationCustom05">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  placeholder="Username"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid Username.
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <button
              className="btn-block btn color-main-bg btn-success"
              type="submit"
            >
              Submit form
            </button>
          </form>
        </div>
      </div>
    );
  }
}
