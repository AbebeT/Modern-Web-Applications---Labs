angular.module("myPropperApp").controller("AlbumsController", AlbumsController);

function AlbumsController(AlbumFactory) {
  const vm = this;
  console.log("before get albums");
  AlbumFactory.getAllAlbums().then(function (response) {
    vm.albums = response;
  });
}
