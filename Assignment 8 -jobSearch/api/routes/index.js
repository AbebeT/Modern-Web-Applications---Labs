const express = require("express")
const controllerJobs = require("../controller/jobs.controller")

const router = express.Router()

router.route("/jobs")
     .post(controllerJobs.jobsAddOne)
     .get(controllerJobs.getAllJObs)

router.route("/jobs/:jobId")
     .get(controllerJobs.jobsGetOne)
     .delete(controllerJobs.deleteOne)


module.exports = router;