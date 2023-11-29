// JavaScript to toggle the camera icon to an 'X' icon
document.addEventListener("DOMContentLoaded", function () {
  var cameraIcon = document.getElementById("camera-icon");
  cameraIcon.addEventListener("click", function () {
    cameraIcon.classList.toggle("x");
  });
});
