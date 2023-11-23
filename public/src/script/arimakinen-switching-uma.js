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

  setupTaijyuZougen();
};
