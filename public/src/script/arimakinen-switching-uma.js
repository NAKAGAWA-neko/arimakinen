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

function setupTaijyuZougen() {
  let contentLHRChangeTaijyuZougen1 = document.querySelector(".TaijyuZougen-1");
  let contentLHRChangeTaijyuZougen2 = document.querySelector(".TaijyuZougen-2");
  let contentLHRChangeTaijyuZougen3 = document.querySelector(".TaijyuZougen-3");
  let changeLHRButtonTaijyuZougen = document.querySelector(".btnTaijyuZougen");

  if (
    contentLHRChangeTaijyuZougen1 &&
    contentLHRChangeTaijyuZougen2 &&
    contentLHRChangeTaijyuZougen3 &&
    changeLHRButtonTaijyuZougen
  ) {
    contentLHRChangeTaijyuZougen1.style.display = "block";
    contentLHRChangeTaijyuZougen2.style.display = "none";
    contentLHRChangeTaijyuZougen3.style.display = "none";

    changeLHRButtonTaijyuZougen.addEventListener("click", function () {
      if (contentLHRChangeTaijyuZougen1.style.display === "block") {
        contentLHRChangeTaijyuZougen1.style.display = "none";
        contentLHRChangeTaijyuZougen2.style.display = "block";
        contentLHRChangeTaijyuZougen3.style.display = "none";
        changeLHRButtonTaijyuZougen.textContent = "3着馬は？";
      } else if (contentLHRChangeTaijyuZougen2.style.display === "block") {
        contentLHRChangeTaijyuZougen1.style.display = "none";
        contentLHRChangeTaijyuZougen2.style.display = "none";
        contentLHRChangeTaijyuZougen3.style.display = "block";
        changeLHRButtonTaijyuZougen.textContent = "1着馬は？";
      } else {
        contentLHRChangeTaijyuZougen1.style.display = "block";
        contentLHRChangeTaijyuZougen2.style.display = "none";
        contentLHRChangeTaijyuZougen3.style.display = "none";
        changeLHRButtonTaijyuZougen.textContent = "2着馬は？";
      }
    });
  }
}

window.onload = function () {
  setupBataijyu();
  setupCyakujyun();
  setupTaijyuZougen();
};
