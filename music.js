var button = document.getElementById("button");
var audio = document.getElementById("player");
      
button.addEventListener('click', function(){      
  if(audio.paused){
  audio.play();
  button.innerHTML = '<p class="music"> Pause </p>';
        
  } else {
  audio.pause();
  button.innerHTML = '<p class="music"> Play </p>';
  }
});