angular.module("olympicMusics").factory("MusicsFactory", MusicsFactory);

function MusicsFactory($http) {
  return {
    getAllMusics: getAll,
    getOneRace: getOne,
  };

  function getAll() {
    return $http.get("/api/musics").then(complete).catch(failed);
  }
  function getOne(musicId) {
    console.log("musicId", musicId);
    return $http
      .get("/api/musics/" + musicId)
      .then(complete)
      .catch(failed);
  }
  function complete(response) {
    return response.data;
  }

  function failed(error) {
    return error;
  }
}
