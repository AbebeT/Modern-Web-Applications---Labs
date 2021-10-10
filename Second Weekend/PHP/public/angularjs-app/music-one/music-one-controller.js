angular.module("musicGenres").controller("MusicController", MusicController)


function MusicController(MusicsFactory, $routeParams, $window){

    const vm = this
    const id = $routeParams.musicId
    MusicsFactory.getOneMusic(id).then(function(response){
        vm.music = response
       
    })

    vm.deleteJob = function(){
        console.log("delete Music function")
        MusicsFactory.deleteOne(id).then(function(response){
            vm.message = "";
            console.log("music deleted")

        if(!response.status){
                $window.location.href="#!/music"           
        }
        

        });
    }

}