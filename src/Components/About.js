import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div className="">
        <Link className="color-main float-left " to="/">
          <i className="fas fa-chevron-circle-left fa-2x" />
        </Link>
        <h1 className="container">Patch Berry's Mission</h1>
      </div>
    );
  }
}
