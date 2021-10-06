angular.module("myPropperApp").factory("AlbumFactory", AlbumFactory);

function AlbumFactory($http) {
  return {
    getAllAlbums: getAll,
    getOneAlbum: getOne,
  };
  function getAll() {
    return $http
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(complete)
      .catch(failed);
  }
  function getOne(albumId) {
    return $http
      .get("https://jsonplaceholder.typicode.com/albums/" + albumId)
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
