// ページが完全にロードされたらinitAccordion関数を呼び出す
document.addEventListener("DOMContentLoaded", initAccordion);

// initAccordion関数の定義
function initAccordion() {
  // CSVファイルのパス
  var csvFilePath = "./src/data/arimakinen-date.csv";

  // PapaParseを使用してCSVファイルを読み込む
  Papa.parse(csvFilePath, {
    download: true,
    header: true,
    complete: function (results) {
      var data = results.data; // 読み込まれたデータ
      createAccordions(data); // アコーディオンを生成する関数を呼び出し
    },
  });

  // アコーディオンを動的に生成する関数
  function createAccordions(data) {
    var container = document.getElementById("arimakinen-alldata");

    // CSVデータの各行に対してループ処理
    data.forEach(function (item) {
      // コメントとしてアコーディオンの回数を追加
      var comment = document.createComment(
        ` <第${item.number.replace("第", "").replace("回", "")}回> `
      );
      container.appendChild(comment);

      // 新しいアコーディオン要素を作成
      var accordion = document.createElement("div");
      accordion.className = "arimakinen-accordion";
      accordion.innerHTML = `
      <div class="arimakinen-accordion-toggle" id="${item.number
        .replace("第", "")
        .replace("回", "")}">
          <div class="arimakinen-accordion-icon"></div>
          <div class="arimakinen-times">
              第<span class="arimakinen-times-number">${item.number
                .replace("第", "")
                .replace("回", "")}</span>回
          </div>
          <div class="arimakinen-times-date">
              ${item.year}<span class="arimakinen-times-date-non"> ${item.date}</span>
          </div>
      </div>
      <div class="arimakinen-table">
          <div class="arimakinen-table-bar"></div>
          <div class="arimakinen-table-scrollcontainer">
              <div class="arimakinen-accordion-content">
                  <table id="arimakinen-${item.year.replace("年", "")}"></table>
              </div>
          </div>
      </div>
      </div>
  `;

      // コンテナにアコーディオン要素を追加
      container.appendChild(accordion);
    });
  }
}
