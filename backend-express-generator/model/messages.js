const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let messageData = new Schema({
  message: {
    type: String
  },
  pseudo: {
    type: String
  }
});

module.exports = mongoose.model("messages", messageData);