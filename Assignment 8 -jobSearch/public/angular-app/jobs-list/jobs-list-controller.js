angular.module("jobsSearch").controller("JobsController", JobsController);

function JobsController(JobsFactory, $window, $route) {
  console.log("Jobs controller inside");
  const vm = this;
  vm.offset = 0;
  vm.title = "Jobs List";

  JobsFactory.getAllJobs(vm.offset).then(function (jobs) {
    vm.jobs = jobs;
    const jobObj = JSON.parse(JSON.stringify(jobs));
    if (jobObj.length < 3) vm.offset = 0;
  });

  vm.addJob = function () {
    console.log("Jobs controller inside - addJOb");
    const newJOb = {
      title: vm.jobTitle,
      salary: vm.jobSalary,
      description: vm.jobDescription,
      postDate :vm.jobPostDate,
      skill : vm.jobSkills,
      experience  : vm.experience,
      address : vm.address,
      phoneNumber : vm.phoneNumber,
      zipcode : vm.zipcode

    };

    JobsFactory.addOneJob(newJOb).then(function (response) {
      console.log("Job Saved");
      $route.reload()
    });
  };

  vm.searchJobs=function(){
    JobsFactory.searchjobs().then(function(response){

    })       
}
  vm.previous = function () {
    vm.offset = vm.offset - 3;
    if (vm.offset <= 0) vm.offset = 0;
    JobsFactory.getAllJobs(vm.offset).then(function (jobs) {
      vm.jobs = jobs;
    });
  };

  vm.next = function () {
    vm.offset = vm.offset + 3;
    JobsFactory.getAllJobs(vm.offset).then(function (jobs) {
      vm.jobs = jobs;
      const jobObj = JSON.parse(JSON.stringify(jobs));
      if (jobObj.length < 3) vm.offset = 0;
    });
  };
}
