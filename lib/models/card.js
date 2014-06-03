'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('./user');

var CardSchema = new Schema({
  title: String,
  content: String,
  owner: [User.UserSchema]

});


module.exports = mongoose.model('Card', CardSchema);
