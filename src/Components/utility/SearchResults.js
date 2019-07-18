import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SearchResults extends Component {
  render() {
    return (
      <div className="">
        <div className="jumbotron jumbotron-fluid color-main-bg">
          <div className="container">
            <h1 className="display-4 text-white text-center">Search Results</h1>
            <ul className="list-group">
              {this.props.location.state.users.map(user => (
                <li key={user._id} className="list-group-item" id="resultsList">
                  <Link to={`/user/${user._id}`}>
                    {user.firstName} {user.lastName}
                  </Link>
                  <p>Username: {user.username}</p>
                  <p>Genre: {user.genre}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
