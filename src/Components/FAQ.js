import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FAQ extends Component {
  render() {
    return (
      <div>
        <Link className="color-main float-left " to="/">
          <i class="fas fa-chevron-circle-left fa-2x" />
        </Link>
        <h1> Welcome to FAQ'S </h1>
      </div>
    );
  }
}
