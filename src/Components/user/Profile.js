import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class profile extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    oldUsername: "",
    genre: "",
    role: "",
    showUpdateAlert: false,
    editable: false
  };

  async componentDidMount() {
    const isLoggedIn = await this.props.loggedIn();
    if (isLoggedIn === 0) {
      // this.props.history.push("/login");
      return;
    }
    this.setState({
      editable: true
    });
    const uid = this.props.match.params.uid;
    const res = await axios.get(`/api/user/${uid}`);
    if (res.data) {
      this.showUser(res.data);
    } else {
      alert("this username is not in our system");
    }
  }

  showUser = user => {
    const {
      username,
      email,
      firstName,
      lastName,
      password,
      role,
      genre
    } = user;
    this.setState({
      username,
      email,
      firstName,
      lastName,
      password,
      oldUsername: username,
      role,
      genre
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      showUpdateAlert: false
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const {
      username,
      email,
      firstName,
      lastName,
      password,
      oldUsername,
      genre
    } = this.state;

    if (username !== oldUsername) {
      //check if username is available
      const res = await axios.get(`/api/user?username=${username}`);

      if (res.data) {
        alert("Username is taken, please try another one");
        return;
      }
    }
    const newUser = {
      _id: this.props.match.params.uid,
      username,
      password,
      email,
      firstName,
      lastName,
      genre
    };
    await axios.put("/api/user", newUser);
    //alert("Updated user profile successfully ");
    this.setState({
      showUpdateAlert: true
    });
    window.$("#exampleModal").modal("hide");
  };

  // Logout
  logout = async () => {
    await axios.post("/api/logout");
    this.props.history.push("/login");
  };

  render() {
    const { username, email, firstName, lastName, role, genre } = this.state;
    console.log(username);
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="#">Visitor View </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Library</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>
        {/* Button trigger modal */}
        {this.state.editable && (
          <button
            type="button"
            className="btn btn-dark color-secondary mt-5 ml-5"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Edit User Info
          </button>
        )}
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header color-secondary-bg">
                <h5 className="modal-title" id="exampleModalLabel">
                  Change User Information
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="profileForm" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label className="color-main" htmlFor="username">
                      Username
                    </label>
                    <input
                      placeholder="Enter your username here..."
                      className="form-control"
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="color-main" htmlFor="email">
                      Email
                    </label>
                    <input
                      placeholder="Enter your email here..."
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="color-main" htmlFor="password2">
                      First Name
                    </label>
                    <input
                      placeholder="Enter your first name here..."
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="color-main" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      placeholder="Enter your last name here..."
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      onChange={this.onChange}
                    />
                  </div>
                  {/* */}
                  <label className="color-secondary" htmlFor="genre">
                    Select Genre
                  </label>
                  <div className="input-group mb-3">
                    <select
                      className="custom-select"
                      id="genre"
                      name="genre"
                      onChange={this.onChange}
                      value={genre}
                    >
                      <option disabled selected value>
                        {" "}
                        -- select an option --{" "}
                      </option>
                      <option>Hip-Hop/Rap</option>
                      <option>Instrumentals/Beats</option>
                      <option> R&B/Soul</option>
                    </select>
                    <div className="input-group-append">
                      <label
                        className="input-group-text color-secondary"
                        htmlFor="genre"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-success color-main-bg"
                  form="profileForm"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link className="color-main float-left " to="/login">
          <i className="fas fa-chevron-circle-left fa-2x" />
        </Link>
        {username && (
          <h1 className="float-right">welcome back {username} !!</h1>
        )}
        <br />
        <div className="container">
          <br />
          {this.state.showUpdateAlert && (
            <div className="alert alert-success">Updated Successfully </div>
          )}
          <br />
          <br />
          <Link
            className="btn btn-info btn-block"
            to={`/user/${this.props.match.params.uid}/website`}
          >
            Websites
          </Link>
          <button
            type="button"
            onClick={this.logout}
            className="btn btn-danger btn-block"
          >
            Logout
          </button>
          {role === "admin" ? (
            <Link className="btn btn-block second-color2" to="/manage">
              Manage Users
            </Link>
          ) : null}
        </div>
      </div>
    );
  }
}
