angular.module("myPropperApp").controller("AlbumController", AlbumController);

function AlbumController($routeParams, AlbumFactory) {
  const vm = this;
  const albumId = $routeParams.albumId;
  AlbumFactory.getOneAlbum(albumId).then(function (response) {
    vm.album = response;
  });
}
