function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

var isPaused = false;
var myGamePiece;
var startMusic;
startMusic = new sound("audios/GC.wav");

function startGame() {
    startMusic.play();
}

function playMusic(){
    if(isPaused == true)
    {
        startMusic.play();
        isPaused = false;
    }else if(isPaused == false)
    {
        startMusic.stop();
        isPaused = true;
    }
}
