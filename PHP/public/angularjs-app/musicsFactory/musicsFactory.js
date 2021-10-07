// const { getAllMusic } = require("../../../controller/music.controller");

angular.module("musicGenres").factory("MusicsFactory", MusicsFactory);

function MusicsFactory($http){
    return {
        getAllMusics : getAll,
        getOneMusic : getOne
        
    };

    function getAll(){
        return $http.get("/api/music").then(complete).catch(fail);
    }

    function getOne(musicId){
        return $http.get("/api/music/" + musicId).then(complete).catch(fail);
    }

    function complete(response){
        console.log("got response");
        return response.data;
    }
    function fail(error){
        console.log(error);
        return error
    }

}