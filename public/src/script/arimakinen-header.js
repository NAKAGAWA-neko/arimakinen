// クリックイベントを設定する要素を選択
const hamburger = document.querySelector(".hamburger");

// クリックイベントを設定
hamburger.addEventListener("click", function () {
  // クリックされた要素（.hamburger）に .is-active クラスを追加したり削除したりする
  hamburger.classList.toggle("is-active");
});
