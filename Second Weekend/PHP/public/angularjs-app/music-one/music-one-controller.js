angular.module("musicGenres").controller("MusicController", MusicController)


function MusicController(MusicsFactory, $routeParams, $window, $route){

    const vm = this
    const id = $routeParams.musicId
    MusicsFactory.getOneMusic(id).then(function(response){
        vm.music = response
       
    })

    vm.deleteMusic = function(){
        console.log("delete Music function")
        MusicsFactory.deleteOne(id).then(function(response){
            vm.message = "";
            console.log("music deleted")

        if(!response.status){
                $window.location.href="#!/music"           
        }
        

        });
    }
    vm.updateMusic = function () {
        console.log("Music controller  update inside");
        const newMusic = {
          genre: vm.musicGenre,
          origin: vm.musicOrigin,
          year: vm.musicYear
        };

        MusicsFactory.updateOne(id, newMusic).then(function (response) {
            console.log("Music updated");
            $route.reload()
          });
        };

}