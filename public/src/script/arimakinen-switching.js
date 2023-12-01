window.onload = function () {
  setupContentSwitcher("Jockey", 3, ["2着の騎手は？", "3着の騎手は？", "1着の騎手は？"]);
  setupContentSwitcher("Stallion", 3, [
    "2着馬の種牡馬は？",
    "3着馬の種牡馬は？",
    "1着馬の種牡馬は？",
  ]);
  setupContentSwitcher("Ninki", 3, ["2着の人気は？", "3着の人気は？", "1着の人気は？"]);
  setupContentSwitcher("TaijyuZougen", 3, ["2着馬は？", "3着馬は？", "1着馬は？"]);
  setupContentSwitcher("Bataijyu", 2, ["小さいのは？", "大きいのは？"]);
  setupContentSwitcher("Waku", 2, ["2着は？", "1着は？"]);
  setupContentSwitcher("Umaban", 3, ["2着は？", "3着は？", "1着は？"]);

  // 10大の切替
  let arimaItems = document.querySelectorAll(".arimakinen-content-10dainews");
  for (let i = 0; i < arimaItems.length; i++) {
    let arimaButton = arimaItems[i].querySelector(".changeBtn10dainews");
    let div1 = arimaItems[i].querySelector(".arimakinen-content-10dainews-1-1");
    let div2 = arimaItems[i].querySelector(".arimakinen-content-10dainews-1-2");

    if (arimaButton && div1 && div2) {
      div1.style.display = "block";
      div2.style.display = "none";

      arimaButton.addEventListener("click", function () {
        if (div1.style.display === "block") {
          div1.style.display = "none";
          div2.style.display = "block";
          arimaButton.textContent = "日本";
        } else {
          div1.style.display = "block";
          div2.style.display = "none";
          arimaButton.textContent = "海外";
        }
        console.log("Button was clicked");
      });
    } else {
      console.error("Button, div1 or div2 not found");
    }
  }
};

// その他切替

function setupContentSwitcher(prefix, contentCount, buttonTexts) {
  // コンテンツ要素のセレクターを作成
  let selectors = [];
  for (let i = 1; i <= contentCount; i++) {
    selectors.push(`.arimakinen-content-chart.${prefix}-${i}`);
  }
  let contents = Array.from(document.querySelectorAll(selectors.join(", ")));

  let button = document.querySelector(`.btn${prefix}`);

  // ボタンが存在しない場合、このプレフィックスに対する処理をスキップ
  if (!button) return;

  let currentIndex = 0;
  updateDisplay();

  button.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % contents.length;
    updateDisplay();
  });

  function updateDisplay() {
    contents.forEach((content) => (content.style.display = "none"));
    contents[currentIndex].style.display = "block";
    button.textContent = buttonTexts[currentIndex % buttonTexts.length];
  }
}

const changePopularImage = (imageFileName) => {
  document.getElementById("popularImage").src = imageFileName;
};
