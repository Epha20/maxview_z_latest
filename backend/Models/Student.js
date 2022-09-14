const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
    },
    mobile: {
      type: Number,
    },
    checkbox: {
      type: String,
    },
    sex: {
      type: String,
    },
    duration: {
      type: String,
    },
    membership: {
      type: String,
    },
    amount: {
      type: Number,
    },
    date: {
      type: Date,
    },
    cname: {
      type: String,
    },
  },
  {
    collection: "students",
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);
