const mongoose = require("mongoose");
const Job = mongoose.model("Job");

addOne = function (req, res) {

  var newLocation = {
    address : req.body.address,
    zipcode : req.body.zipcode,
    phoneNumber : req.body.phoneNumber
  }
  var newJob = {
    title: req.body.title,
    salary: req.body.salary,
    description: req.body.description,
    postDate : req.body.postDate,
    experience: req.body.experience,
    skill: req.body.skill,
    location: newLocation

  };
  console.log("postDate ", req.body.location)
  Job.create(newJob, function (err, response) {
    if (err) {
      res.status(500).json({ error: err });
      return;
    }
    res.status(201).json(response.ops);
  });
};

getAllJObs = function (req, res) {
  let offset = 0;
  let count = 5;
  const maxCount = 10;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
    if (count > maxCount) {
      count = maxCount;
    }
  }
  if (isNaN(offset) || isNaN(count)) {
    console.log("offset and count should be numbers");
    res
      .status(400)
      .json({ message: "offset and count should be numbers" });
    return;
  }
  Job.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, jobs) {
      if (err) {
        console.log("Error finding jobs");
        res.status(500).json(err);
      } else {
        console.log("jobs found");
        res.status(200).json(jobs);
      }
    });
};

deleteOne = function (req, res) {
  const jobId = req.params.jobId;
  if (!mongoose.isValidObjectId(jobId)) {
    console.log("Invalid job Id");
    res.status(400).json({ error: "invalid job id" });
    return;
  } else {
    Job.findByIdAndRemove(jobId).exec(function (err, deletedGame) {
      if (err) {
        console.log("Error deleting job");
        res.status(500).json(err);
      } else {
        if (!deletedGame) {
          console.log("Job id not found");
          res.status(404).json({ error: '"' + jobId + '" not found' });
        } else {
          console.log("Deleted Successfully");
          res.status(204).json();
        }
      }
    });
  }
};

jobsGetOne = function (req, res) {
  const jobId = req.params.jobId;
  if (!mongoose.isValidObjectId(jobId)) {
    console.log('"' + jobId + '" is invalid jobId');
    res.status(400).json({ message: '"' + jobId + '" is invalid jobId' });
    return;
  }
  Job.findById(jobId).exec(function (err, job) {
    if (err) {
      console.log("Error finding the job");
      res.status(500).json(err);
      return;
    } else {
      if (job) {
        console.log("job found");
        res.status(200).json(job);
      } else {
        console.log("Job with this id not available");
        res
          .status(404)
          .json({ message: 'Job with id "' + jobId + '" not available' });
      }
    }
  });
};
module.exports = {
  jobsAddOne: addOne,
  getAllJObs: getAllJObs,
  jobsGetOne: jobsGetOne,
  deleteOne: deleteOne,
};
