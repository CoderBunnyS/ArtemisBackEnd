let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Job Model
let jobSchema = require('../models/Job');

// CREATE Job
router.route('/create-job').post((req, res, next) => {
  jobSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Jobs
router.route('/').get((req, res, next) => {
  jobSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})

// Get Single Job
router.route('/edit-job/:id').get((req, res, next) => {
  jobSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})


// Update Job
router.route('/update-job/:id').put((req, res, next) => {
  jobSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {

      console.log(error)
      return next(error)
    } else {
      res.json(data)
      console.log('Job updated successfully !')
    }
  })
})

// Delete Job
router.route('/delete-job/:id').delete((req, res, next) => {
  jobSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;