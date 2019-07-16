const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    dateOfBirth: Date,
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    dateCreated: { type: Date, default: Date.now },
    genre: {
      type: String,
      enum: ["Hip-Hop/Rap", "Instrumentals/Beats", "R&B/Soul"]
    },
    role: { type: String, enum: ["admin", "regular"], default: "regular" }
  },
  { collection: "user" }
);

module.exports = UserSchema;
