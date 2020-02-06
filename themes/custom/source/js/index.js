// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

video.playbackRate = 0.7;
// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}