angular.module("musicGenres").controller("MusicsController", MusicsController)

function MusicsController(MusicsFactory, $route){
    const vm= this
    vm.title= "Music Genres App"
    MusicsFactory.getAllMusics().then(function(musics){
            vm.musics = musics
            console.log("vm.musics ", vm.musics)
        })

        vm.addMusic = function () {
            console.log("Jobs controller inside - addJOb");
            const newMusic = {
              genre: vm.musicGenre,
              origin: vm.musicOrigin,
              year: vm.musicYear,
              name :vm.artistName,
              age : vm.artistAge,
        
            };

            MusicsFactory.addOne(newMusic).then(function (response) {
                console.log("Music Saved");
                $route.reload()
              });
            };
          

        
    
}