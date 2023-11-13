window.onload = function () {
  let element = document.querySelector(".content-change-1");
  if (element) {
    element.style.display = "block";
  }

  element = document.querySelector(".content-change-2");
  if (element) {
    element.style.display = "none";
  }

  let changeButton = document.querySelector(".changebtn");
  if (changeButton) {
    changeButton.addEventListener("click", function () {
      let contentChange1 = document.querySelector(".content-change-1");
      let contentChange2 = document.querySelector(".content-change-2");
      if (contentChange1 && contentChange2) {
        if (contentChange1.style.display === "block") {
          contentChange1.style.display = "none";
          contentChange2.style.display = "block";
          changeButton.textContent = "年別";
        } else {
          contentChange1.style.display = "block";
          contentChange2.style.display = "none";
          changeButton.textContent = "月別";
        }
      }
    });
  }

  // 着順の表示切り替え
  let contentLHRChange1 = document.querySelector(".localheavyr-1");
  let contentLHRChange2 = document.querySelector(".localheavyr-2");
  let contentLHRChange3 = document.querySelector(".localheavyr-3");

  // 初期表示設定
  contentLHRChange1.style.display = "block";
  contentLHRChange2.style.display = "none";
  contentLHRChange3.style.display = "none";

  let changeLHRButton = document.querySelector(".lhr-c-btn");
  if (changeLHRButton) {
    changeLHRButton.addEventListener("click", function () {
      if (contentLHRChange1 && contentLHRChange2 && contentLHRChange3) {
        if (contentLHRChange1.style.display === "block") {
          // 1つ目のチャートを非表示、2つ目のチャートを表示
          contentLHRChange1.style.display = "none";
          contentLHRChange2.style.display = "block";
          contentLHRChange3.style.display = "none";
          changeLHRButton.textContent = "3着馬は？";
        } else if (contentLHRChange2.style.display === "block") {
          // 2つ目のチャートを非表示、3つ目のチャートを表示
          contentLHRChange1.style.display = "none";
          contentLHRChange2.style.display = "none";
          contentLHRChange3.style.display = "block";
          changeLHRButton.textContent = "1着馬は？";
        } else {
          // 3つ目のチャートを非表示、1つ目のチャートを表示
          contentLHRChange1.style.display = "block";
          contentLHRChange2.style.display = "none";
          contentLHRChange3.style.display = "none";
          changeLHRButton.textContent = "2着馬は？";
        }
      }
    });
  }
};
