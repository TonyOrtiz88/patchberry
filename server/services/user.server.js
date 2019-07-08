module.exports = function(app) {
  const passport = require("passport");
  const LocalStrategy = require("passport-local").Strategy;
  const userModel = require("../models/user/user.model");
  const bcrypt = require("bcryptjs");

  // Generate a salt
  const salt = bcrypt.genSaltSync(10);

  passport.serializeUser(serializeUser);

  function serializeUser(user, done) {
    done(null, user);
  }

  passport.deserializeUser(deserializeUser);

  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      function(user) {
        done(null, user);
      },
      function(err) {
        done(err, null);
      }
    );
  }

  // Register
  app.post("/api/register", async (req, res) => {
    const user = req.body;
    // encrypt user password
    user.password = bcrypt.hashSync(user.password, salt);
    const data = await userModel.createUser(user);
    req.login(data, () => {
      res.json(data);
    });
  });

  // find all users
  app.get("/api/users", async (req, res) => {
    const data = await userModel.findAllUsers();
    res.json(data);
  });
};
