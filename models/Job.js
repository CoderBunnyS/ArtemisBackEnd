const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jobSchema = new Schema({
  title: {
    type: String
  },
  company: {
    type: String
  },
  appliedDate: {
    type: String
  }
}, {
    collection: 'jobs'
  })

module.exports = mongoose.model('Job', jobSchema)