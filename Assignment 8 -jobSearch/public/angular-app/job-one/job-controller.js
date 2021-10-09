angular.module("jobsSearch").controller("JobController", JobController);


function JobController(JobsFactory, $routeParams, $window){
    console.log("Job controller inside")
    const vm = this;
    vm.title = "Job Information"
    const id = $routeParams.jobId

    JobsFactory.getOneJob(id).then(function(job){
        vm.job = job;
    })

    vm.deleteJob = function(){
        console.log("deleteJob function")
        JobsFactory.deleteOneJob(id).then(function(response){
            vm.message = "";
            console.log("Job deleted")

        if(!response.status){
                $window.location.href="#!/jobs"           
        }
        

        });
    }


}