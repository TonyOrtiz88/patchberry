import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>Hello from About page</h1>
        <Link className="btn" to="/">
          Home Page
        </Link>
      </div>
    );
  }
}
