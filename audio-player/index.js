const audio = document.querySelector('audio');
const playPauseButton = document.querySelector('.playpause');
const nextButton  = document.querySelector('.next');
const previousButton  = document.querySelector('.previous');
const playPauseImage = document.querySelector('.playpause-image');
const volume = document.getElementById('volume');
const artistNameStr = document.querySelector('.artist-name');
const songTitleString = document.querySelector('.song-name');
const photoOfAlbum = document.getElementById('album-photo');
const currentTime = document.querySelector('.current-time');
const leftTime = document.querySelector('.all-duration-time');
const progressbar = document.querySelector('.progress-bar')
const currentprogressbar = document.querySelector('.current-progress-bar')


let songs = ['./assets/audio/beyonce.mp3', './assets/audio/dontstartnow.mp3', './assets/audio/closer.mp3', './assets/audio/neleiche.mp3',]
let artist = ['Beyonce', 'Dua Lipa', 'Nine Inch Nails', "SDP"]
let songsTitle = ["Don't Hurt Yourself", "Don't Start Now", "Closer", "Nr Leiche"]
let songImg =['./assets/img/lemonade.png', './assets/img/dontstartnow.png', './assets/img/nineinch.png',
  './assets/img/sdp.png']

  function secondsToMinutes(s, minus = false){

    const zero = 2;
 

    let seconds = parseInt(s);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    minutes = minutes.toString().padStart(zero, '0')
    seconds = seconds.toString().padStart(zero, '0')
    if(!minus){
    return `${minutes}:${seconds}`;
  }else{
    return `-${minutes}:${seconds}`
    }
    
    }

  

let isOn = false;
function playPauseAudio() {

    if(!isOn){
   
        audio.play();
        isOn = true
        playPauseImage.src = 'assets/svg/pause.png'

   
    }else{
        audio.pause();
        isOn = false;
          playPauseImage.src = 'assets/svg/play.png'
    }
  
  }
  

function nextSong(){
  
}







function changeContent(n){ 
  
  audio.src = songs[n];

  artistNameStr.innerHTML = artist[n];
  songTitleString.innerHTML = songsTitle[n];
  photoOfAlbum.src = songImg[n];
  let mainEl = document.querySelector('.main');
  let url = songImg[n];

 document.styleSheets[0].addRule('.main::before', `background:  url(${url})  center / cover no-repeat;`);



    audio.addEventListener('loadedmetadata', function(){
    leftTime.innerHTML = secondsToMinutes(audio.duration);
  })




}






volume.addEventListener('change', function(){

   audio.volume = this.value /100;
})




playPauseButton.addEventListener('click', playPauseAudio);
nextButton.addEventListener('click', nextSong);

setInterval(() => {
    
    let current = audio.currentTime;
    currentTime.innerHTML = secondsToMinutes(current);

    currentprogressbar.style.width = `${audio.currentTime / audio.duration * 100}%`
      
 
  

}, 500);


progressbar.addEventListener("click", e => {
  const progressbarWidth = window.getComputedStyle(progressbar).width;
  const toJump = e.offsetX / parseInt(progressbarWidth) * audio.duration;
  audio.currentTime = toJump;
}, false);



let timebackward;
let funcarray = [
  function(){
      timebackward =  setInterval(() => {
    
      let current = audio.currentTime;
      let alltime = audio.duration
      leftTime.innerHTML = secondsToMinutes(alltime-current, minus = true)
      isMinus= true
  }, 500);
// alert(1)
  }, 
  function(){
    clearInterval(timebackward);
    let alltime = audio.duration
    leftTime.innerHTML = secondsToMinutes(alltime)
    // alert(2)
  }
]


///
let i = 0;
window.onload = function() { 
  changeContent(1)

  leftTime.addEventListener( 'click', function() {
    funcarray[i++ % funcarray.length](); 
}
  )
}

