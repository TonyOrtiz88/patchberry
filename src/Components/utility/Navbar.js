import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import berry from "../../img/patchBerryLogo.jpg";

import axios from "axios";

class Navbar extends Component {
  state = {
    searchInput: "",
    users: [],
    usersShowing: []
  };

  async componentDidMount() {
    const res = await axios.get("/api/users");
    this.setState({
      users: res.data
    });
  }

  changeSearch = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  filterUsers = e => {
    e.preventDefault();
    const keepUser = (user, text) => {
      return (user.firstName + user.lastName + user.genre).includes(text);
    };

    const filteredUsers = this.state.users.filter(user =>
      keepUser(user, this.state.searchInput)
    );

    this.props.history.push({
      pathname: "/searchResults",
      state: { users: filteredUsers }
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <img
              src={berry}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            <span className="color-secondary">Patch Berry</span>
          </Link>
          <button
            className="navbar-toggler btn-dark"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login/Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQ's
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/forum">
                  Forum
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Genre
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">
                    Hip-Hop/Rap
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Instrumentals/Beats
                  </Link>
                  <Link className="dropdown-item" to="#">
                    R&B/Soul
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Merchandise
                  </Link>
                </div>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li> */}
            </ul>
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={this.filterUsers}
            >
              <input
                onChange={this.changeSearch}
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search user by name or genre..."
                aria-label="Search"
                name="searchInput"
              />
              <button
                className="btn btn-outline-success color-main-bg my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
