angular.module("jobsSearch").factory("JobsFactory", JobsFactory);

function JobsFactory($http){
    return {
        getAllJobs: getAll,
        getOneJob: getOne,
        addOneJob : addOne,
        deleteOneJob : deleteOneJob,
        searchjobs : searchjobs
    }

    function searchjobs(){}

    function addOne(job){
        return $http.post("/api/jobs", job)
        .then(complete).catch(failed)
       
    }

    function getAll(offset){
        console.log("offset ", offset)
        return $http.get("/api/jobs/?offset=" + offset)
        .then(complete).catch(failed)
       
    }
   

    function getOne(jobId){
        return $http.get("/api/jobs/"+ jobId)
            .then(complete).catch(failed)
    }

    function deleteOneJob(jobId){
        return $http.delete("/api/jobs/"+ jobId)
            .then(complete).catch(failed)
    }


    function complete(response){
        console.log("got response");
        return response.data;
    }
    function failed(error){
        console.log(error);
        return error
    }

}