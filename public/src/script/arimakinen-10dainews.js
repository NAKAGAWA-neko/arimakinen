window.onload = function () {
  let arimaItems = document.querySelectorAll(".arimakinen-content-10dainews");

  for (let i = 0; i < arimaItems.length; i++) {
    let arimaButton = arimaItems[i].querySelector(".changeBtn10dainews");
    let div1 = arimaItems[i].querySelector(".arimakinen-content-10dainews-1-1"); // 切り替える最初のdivのセレクタ
    let div2 = arimaItems[i].querySelector(".arimakinen-content-10dainews-1-2"); // 切り替える2番目のdivのセレクタ

    if (arimaButton && div1 && div2) {
      // button, div1, div2が存在することを確認

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
