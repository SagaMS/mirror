    
let isOn = false;
const audiobuttonImage = document.getElementById('mute-img');
const audio = new Audio('audio/audio.mp3')


function playPauseAudio() {
  
    if(!isOn){
   
        audio.play();
        audio.loop = true;
        audio.volume = 0.35;
        isOn = true
        audiobuttonImage.src = 'img/volume-button.png'

   
    }else{
        audio.pause();
        isOn = false;
        audiobuttonImage.src = 'img/mutebutton.png'
    }
  
  }

    const audiobutton= document.getElementById('mute');
    

audiobutton.addEventListener('click', playPauseAudio);




