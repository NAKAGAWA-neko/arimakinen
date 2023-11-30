document.getElementById("cameraIcon").addEventListener("click", function () {
  document.getElementById("menuContent").style.display = "block";
  this.style.display = "none";
  document.getElementById("closeIcon").style.display = "block";
});

document.getElementById("closeIcon").addEventListener("click", function () {
  document.getElementById("menuContent").style.display = "none";
  this.style.display = "none";
  document.getElementById("cameraIcon").style.display = "block";
});

let currentSlide = 0;
const slides = document.querySelectorAll(
  ".arimakinen-header-camera-content-photos .arimakinen-header-camera-content-photos-slide"
);
const totalSlides = slides.length;

// 左アロー
// document.querySelector(".arrow-left").addEventListener("click", () => {
//   slides[currentSlide].style.display = "none";
//   currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//   slides[currentSlide].style.display = "block";
// });

document.querySelector(".arrow-right").addEventListener("click", () => {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].style.display = "block";
});

// 初期スライドを表示
slides[currentSlide].style.display = "block";

// 元のハンバーガー
// クリックイベントを設定する要素を選択
// const hamburger = document.querySelector(".hamburger");
// // クリックイベントを設定
// hamburger.addEventListener("click", function () {
// // クリックされた要素（.hamburger）に .is-active クラスを追加したり削除したりする
// hamburger.classList.toggle("is-active");
// });
