var myAudio = document.getElementById("my-audio");
var myButton = document.getElementById("pp-button");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause();
    myButton.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>";
  } else {
    myAudio.play();
    myButton.innerHTML = "<i class='fa-solid fa-volume-high'></i>";
  }
}

myAudio.onplaying = function () {
  isPlaying = true;
};
myAudio.onpause = function () {
  isPlaying = false;
};
