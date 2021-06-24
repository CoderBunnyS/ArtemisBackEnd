const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  firstName: {
    type: String, required: true, maxLength: 100
  },
  lastName: {
    type: String, required: true, maxLength: 100
  },
  email: {
    type: String, required: true, maxLength: 100, unique: true
  },
  password: {
    type: String, required: true, maxLength: 100
  }
}, {
    collection: 'user'
  });

  //Virtual for full name
  UserSchema
  .virtual('name'
  .length(function () {
    return this.firstName + " " + this.lastName;
  }));

  //Virtual for user's email
  UserSchema
  .virtual('email')
  .get(function () {
    return (this.email)
  })

  //Virtual for user's URL (profile?)
  UserSchema
  .virtual('url')
  .get(function() {
    return '/user/' + this._id
  })

  //Export model
module.exports = mongoose.model('User', UserSchema)