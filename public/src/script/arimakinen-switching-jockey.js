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

window.onload = function () {
  setupContentSwitcher("Jockey", 3, ["2着の騎手は？", "3着の騎手は？", "1着の騎手は？"]);
  setupContentSwitcher("Stallion", 3, ["2着の種牡馬は？", "3着の種牡馬は？", "1着の種牡馬は？"]);
  setupContentSwitcher("Ninki", 3, ["2着の人気は？", "3着の人気は？", "1着の人気は？"]);
};
