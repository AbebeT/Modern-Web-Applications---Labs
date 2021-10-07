angular.module("musicGenres").controller("MusicController", MusicController)


function MusicController(MusicsFactory, $routeParams){

    const vm = this
    const id = $routeParams.musicId
    MusicsFactory.getOneMusic(id).then(function(response){
        vm.music = response
        // vm.rating= _getStarRating(response.rate)
    })

}