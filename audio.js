

var musica = document.querySelector('.audio')
musica.play()
function mute(){

    if(musica.paused){
        musica.play()
    }else{
        musica.currentTime = 0
        musica.pause()
    }
}


