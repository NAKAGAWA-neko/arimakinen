window.onload = function () {
  // 人気と着順ランキング
  let contentLHRChange1 = document.querySelector(".localheavyr-1");
  let contentLHRChange2 = document.querySelector(".localheavyr-2");
  let contentLHRChange3 = document.querySelector(".localheavyr-3");

  // 初期表示設定
  contentLHRChange1.style.display = "block";
  contentLHRChange2.style.display = "none";
  contentLHRChange3.style.display = "none";

  let changeLHRButton = document.querySelector(".btnCyakujyun");
  if (changeLHRButton) {
    changeLHRButton.addEventListener("click", function () {
      if (contentLHRChange1 && contentLHRChange2 && contentLHRChange3) {
        if (contentLHRChange1.style.display === "block") {
          // 1つ目のチャートを非表示、2つ目のチャートを表示
          contentLHRChange1.style.display = "none";
          contentLHRChange2.style.display = "block";
          contentLHRChange3.style.display = "none";
          changeLHRButton.textContent = "3着の人気は？";
        } else if (contentLHRChange2.style.display === "block") {
          // 2つ目のチャートを非表示、3つ目のチャートを表示
          contentLHRChange1.style.display = "none";
          contentLHRChange2.style.display = "none";
          contentLHRChange3.style.display = "block";
          changeLHRButton.textContent = "1着の人気は？";
        } else {
          // 3つ目のチャートを非表示、1つ目のチャートを表示
          contentLHRChange1.style.display = "block";
          contentLHRChange2.style.display = "none";
          contentLHRChange3.style.display = "none";
          changeLHRButton.textContent = "2着の人気は？";
        }
      }
    });
  }

  // 騎手ランキング
  let contentLHRChange4 = document.querySelector(".localheavyr-4");
  let contentLHRChange5 = document.querySelector(".localheavyr-5");
  let contentLHRChange6 = document.querySelector(".localheavyr-6");

  // 初期表示設定
  contentLHRChange4.style.display = "block";
  contentLHRChange5.style.display = "none";
  contentLHRChange6.style.display = "none";

  let changeLHRButton2 = document.querySelector(".btnJockey");
  if (changeLHRButton2) {
    changeLHRButton2.addEventListener("click", function () {
      if (contentLHRChange4 && contentLHRChange5 && contentLHRChange6) {
        if (contentLHRChange4.style.display === "block") {
          // 1つ目のチャートを非表示、2つ目のチャートを表示
          contentLHRChange4.style.display = "none";
          contentLHRChange5.style.display = "block";
          contentLHRChange6.style.display = "none";
          changeLHRButton2.textContent = "3着の騎手は？";
        } else if (contentLHRChange5.style.display === "block") {
          // 2つ目のチャートを非表示、3つ目のチャートを表示
          contentLHRChange4.style.display = "none";
          contentLHRChange5.style.display = "none";
          contentLHRChange6.style.display = "block";
          changeLHRButton2.textContent = "1着の騎手は？";
        } else {
          // 3つ目のチャートを非表示、1つ目のチャートを表示
          contentLHRChange4.style.display = "block";
          contentLHRChange5.style.display = "none";
          contentLHRChange6.style.display = "none";
          changeLHRButton2.textContent = "2着の騎手は？";
        }
      }
    });
  }
};
