import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/utility/Navbar";
import Footer from "./Components/utility/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Forum from "./Components/Forum";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/user/Login";
import Register from "./Components/user/Register";
import AdminManage from "./Components/user/AdminManage";
import Profile from "./Components/user/Profile";
import ProfileEdit from "./Components/profile/ProfileEdit";
// import ProfileView from "./Components/user/ProfileView";

class App extends Component {
  // Check if user is logged in
  loggedIn = async () => {
    const res = await axios.get("/api/loggedIn");
    return res.data;
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/admin" component={AdminManage} />
          <Route
            exact
            path="/user/:uid"
            render={props => <Profile {...props} loggedIn={this.loggedIn} />}
          />
          {/* <Route
            exact
            path="/user/:uid"
            render={props => (
              <ProfileView {...props} loggedIn={this.loggedIn} />
            )}
          /> */}
          <Route exact path="/editprofile" component={ProfileEdit} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
