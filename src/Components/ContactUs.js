import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="color-third-bg col-6 text-center">
            <i className="fas fa-phone-square fa-3x icn-gld text-white" />
            <h3 className="color-secondary">Phone Number</h3>
            <p className="text-white">(857)763-7967</p>
          </div>
          <div className="color-third-bg col-6 text-center">
            <i className="fas fa-envelope fa-3x  text-prime text-white" />
            <h3 className="color-secondary">Email Address</h3>
            <p className="text-white">contactpatch@patchberry.com</p>
          </div>
        </div>
        <div>
          <h1 className="text-center color-main-bg text-white mb-6">
            Have concerns complaints or feedback? Message us we'll get back to
            you as soon as possible
          </h1>
          <textarea
            className="container ml-5 border outline-"
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
          />
        </div>
      </div>
    );
  }
}
