const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  firstName: {
    type: String
  },
  lasName: {
    type: String
  },
  email: {
    type: String
  },
  username: {
      type: String
  }
}, {
    collection: 'user'
  })

module.exports = mongoose.model('User', userSchema)