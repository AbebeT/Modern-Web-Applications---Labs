angular.module("jobsSearch", ["ngRoute"]).config(config);


function config($routeProvider){

    console.log("app front")
    $routeProvider.when("/", {
        templateUrl : "angular-app/main/main.html"
    }).when("/jobs", {
        templateUrl : "angular-app/jobs-list/jobs-list.html",
        controller: "JobsController",
        controllerAs: "vm"

    }).when("/jobs/:jobId", {
        templateUrl : "angular-app/job-one/job-one.html",
        controller: "JobController",
        controllerAs: "vm"
    })
}