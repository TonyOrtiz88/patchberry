import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello from Home Page</h1>
        <Link to="/about">Go To Patch Berry's Mission</Link>
      </div>
    );
  }
}
