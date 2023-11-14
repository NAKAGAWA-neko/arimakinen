window.onload = function () {
  // 人気と着順ランキング
  let contentLHRChange1 = document.querySelector(".cyakujyun-1");
  let contentLHRChange2 = document.querySelector(".cyakujyun-2");
  let contentLHRChange3 = document.querySelector(".cyakujyun-3");

  // 初期表示設定
  contentLHRChange1.style.display = "block";
  contentLHRChange2.style.display = "none";
  contentLHRChange3.style.display = "none";

  let changeLHRButtonCyakujyun = document.querySelector(".btnCyakujyun");
  if (changeLHRButtonCyakujyun) {
    changeLHRButtonCyakujyun.addEventListener("click", function () {
      if (contentLHRChange1 && contentLHRChange2 && contentLHRChange3) {
        if (contentLHRChange1.style.display === "block") {
          // 1つ目のチャートを非表示、2つ目のチャートを表示
          contentLHRChange1.style.display = "none";
          contentLHRChange2.style.display = "block";
          contentLHRChange3.style.display = "none";
          changeLHRButtonCyakujyun.textContent = "3着の人気は？";
        } else if (contentLHRChange2.style.display === "block") {
          // 2つ目のチャートを非表示、3つ目のチャートを表示
          contentLHRChange1.style.display = "none";
          contentLHRChange2.style.display = "none";
          contentLHRChange3.style.display = "block";
          changeLHRButtonCyakujyun.textContent = "1着の人気は？";
        } else {
          // 3つ目のチャートを非表示、1つ目のチャートを表示
          contentLHRChange1.style.display = "block";
          contentLHRChange2.style.display = "none";
          contentLHRChange3.style.display = "none";
          changeLHRButtonCyakujyun.textContent = "2着の人気は？";
        }
      }
    });
  }

  // 騎手ランキング
  let contentLHRChangeJockey1 = document.querySelector(".JockeyR-1");
  let contentLHRChangeJockey2 = document.querySelector(".JockeyR-2");
  let contentLHRChangeJockey3 = document.querySelector(".JockeyR-3");

  contentLHRChangeJockey1.style.display = "block";
  contentLHRChangeJockey2.style.display = "none";
  contentLHRChangeJockey3.style.display = "none";

  let changeLHRButtonJockey = document.querySelector(".btnJockey");
  if (changeLHRButtonJockey) {
    changeLHRButtonJockey.addEventListener("click", function () {
      if (contentLHRChangeJockey1 && contentLHRChangeJockey2 && contentLHRChangeJockey3) {
        if (contentLHRChangeJockey1.style.display === "block") {
          // 1つ目のチャートを非表示、2つ目のチャートを表示
          contentLHRChangeJockey1.style.display = "none";
          contentLHRChangeJockey2.style.display = "block";
          contentLHRChangeJockey3.style.display = "none";
          changeLHRButtonJockey.textContent = "3着の騎手は？";
        } else if (contentLHRChangeJockey2.style.display === "block") {
          // 2つ目のチャートを非表示、3つ目のチャートを表示
          contentLHRChangeJockey1.style.display = "none";
          contentLHRChangeJockey2.style.display = "none";
          contentLHRChangeJockey3.style.display = "block";
          changeLHRButtonJockey.textContent = "1着の騎手は？";
        } else {
          // 3つ目のチャートを非表示、1つ目のチャートを表示
          contentLHRChangeJockey1.style.display = "block";
          contentLHRChangeJockey2.style.display = "none";
          contentLHRChangeJockey3.style.display = "none";
          changeLHRButtonJockey.textContent = "2着の騎手は？";
        }
      }
    });
  }

  // 馬体重
  let contentLHRChangeUma1 = document.querySelector(".bataijyu-1");
  let contentLHRChangeUma2 = document.querySelector(".bataijyu-2");

  // 初期表示設定
  contentLHRChangeUma1.style.display = "block";
  contentLHRChangeUma2.style.display = "none";

  let changeLHRButtonUma = document.querySelector(".btnBataijyu");
  if (changeLHRButtonUma) {
    changeLHRButtonUma.addEventListener("click", function () {
      if (contentLHRChangeUma1 && contentLHRChangeUma2) {
        if (contentLHRChangeUma1.style.display === "block") {
          // 1つ目のチャートを非表示、2つ目のチャートを表示
          contentLHRChangeUma1.style.display = "none";
          contentLHRChangeUma2.style.display = "block";

          changeLHRButtonUma.textContent = "大きいのは？";
        } else {
          // 3つ目のチャートを非表示、1つ目のチャートを表示
          contentLHRChangeUma1.style.display = "block";
          contentLHRChangeUma2.style.display = "none";

          changeLHRButtonUma.textContent = "小さいのは？";
        }
      }
    });
  }
};
