const audio = document.querySelector('audio');
const playPauseButton = document.querySelector('.playpause');
const playPauseImage = document.querySelector('.playpause-image')
const volume = document.getElementById('volume')

let songs = ['./assets/music/beyonce.mp3', './assets/music/dontstartnow.mp3', './assets/music/colser.mp3', './assets/music/neleiche.mp3',]



let isOn = false;
function playPauseAudio() {

    if(!isOn){
        audio.currentTime = 0;
        audio.play();
        isOn = true
        playPauseImage.src = 'assets/svg/pause.png'
   
    }else{
        audio.pause();
        isOn = false;
          playPauseImage.src = 'assets/svg/play.png'
    }
  
  }

volume.addEventListener('change', function(){

   audio.volume = this.value /100;
})




playPauseButton.addEventListener('click', playPauseAudio);
