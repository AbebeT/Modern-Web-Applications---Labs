angular.module("musicGenres").controller("MusicsController", MusicsController)

function MusicsController(MusicsFactory){
    const vm= this
    vm.title= "Music Genres App"
    MusicsFactory.getAllMusics().then(function(musics){
            vm.musics = musics
            console.log("vm.musics ", vm.musics)
        })
    
}