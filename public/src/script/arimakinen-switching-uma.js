function setupBataijyu() {
  let contentLHRChangeUma1 = document.querySelector(".bataijyu-1");
  let contentLHRChangeUma2 = document.querySelector(".bataijyu-2");
  let changeLHRButtonUma = document.querySelector(".btnBataijyu");

  if (contentLHRChangeUma1 && contentLHRChangeUma2 && changeLHRButtonUma) {
    contentLHRChangeUma1.style.display = "block";
    contentLHRChangeUma2.style.display = "none";

    changeLHRButtonUma.addEventListener("click", function () {
      if (contentLHRChangeUma1.style.display === "block") {
        contentLHRChangeUma1.style.display = "none";
        contentLHRChangeUma2.style.display = "block";
        changeLHRButtonUma.textContent = "大きいのは？";
      } else {
        contentLHRChangeUma1.style.display = "block";
        contentLHRChangeUma2.style.display = "none";
        changeLHRButtonUma.textContent = "小さいのは？";
      }
    });
  }
}

function setupCyakujyun() {
  let contentLHRChange1 = document.querySelector(".cyakujyun-1");
  let contentLHRChange2 = document.querySelector(".cyakujyun-2");
  let contentLHRChange3 = document.querySelector(".cyakujyun-3");
  let changeLHRButtonCyakujyun = document.querySelector(".btnCyakujyun");

  if (contentLHRChange1 && contentLHRChange2 && contentLHRChange3 && changeLHRButtonCyakujyun) {
    contentLHRChange1.style.display = "block";
    contentLHRChange2.style.display = "none";
    contentLHRChange3.style.display = "none";

    changeLHRButtonCyakujyun.addEventListener("click", function () {
      if (contentLHRChange1.style.display === "block") {
        contentLHRChange1.style.display = "none";
        contentLHRChange2.style.display = "block";
        contentLHRChange3.style.display = "none";
        changeLHRButtonCyakujyun.textContent = "3着の人気は？";
      } else if (contentLHRChange2.style.display === "block") {
        contentLHRChange1.style.display = "none";
        contentLHRChange2.style.display = "none";
        contentLHRChange3.style.display = "block";
        changeLHRButtonCyakujyun.textContent = "1着の人気は？";
      } else {
        contentLHRChange1.style.display = "block";
        contentLHRChange2.style.display = "none";
        contentLHRChange3.style.display = "none";
        changeLHRButtonCyakujyun.textContent = "2着の人気は？";
      }
    });
  }
}

function setupJockey() {
  let contentLHRChangeJockey1 = document.querySelector(".JockeyR-1");
  let contentLHRChangeJockey2 = document.querySelector(".JockeyR-2");
  let contentLHRChangeJockey3 = document.querySelector(".JockeyR-3");
  let changeLHRButtonJockey = document.querySelector(".btnJockey");

  if (
    contentLHRChangeJockey1 &&
    contentLHRChangeJockey2 &&
    contentLHRChangeJockey3 &&
    changeLHRButtonJockey
  ) {
    contentLHRChangeJockey1.style.display = "block";
    contentLHRChangeJockey2.style.display = "none";
    contentLHRChangeJockey3.style.display = "none";

    changeLHRButtonJockey.addEventListener("click", function () {
      if (contentLHRChangeJockey1.style.display === "block") {
        contentLHRChangeJockey1.style.display = "none";
        contentLHRChangeJockey2.style.display = "block";
        contentLHRChangeJockey3.style.display = "none";
        changeLHRButtonJockey.textContent = "3着の騎手は？";
      } else if (contentLHRChangeJockey2.style.display === "block") {
        contentLHRChangeJockey1.style.display = "none";
        contentLHRChangeJockey2.style.display = "none";
        contentLHRChangeJockey3.style.display = "block";
        changeLHRButtonJockey.textContent = "1着の騎手は？";
      } else {
        contentLHRChangeJockey1.style.display = "block";
        contentLHRChangeJockey2.style.display = "none";
        contentLHRChangeJockey3.style.display = "none";
        changeLHRButtonJockey.textContent = "2着の騎手は？";
      }
    });
  }
}

window.onload = function () {
  setupBataijyu();
  setupCyakujyun();
  setupJockey();
};
