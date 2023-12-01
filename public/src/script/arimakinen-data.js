// ページが読み込まれた後にURLのハッシュ部分をチェックし、該当する要素が存在すればその要素までスムーズにスクロール

window.onload = function () {
  var hash = window.location.hash;
  console.log("Hash:", hash);

  // セッションストレージの値をチェックせずに、ハッシュがある場合はスクロールする
  if (hash) {
    var targetElement = document.querySelector(hash);
    console.log("Target element:", targetElement);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  // ページが読み込まれた後で「reloaded」をtrueに設定
  sessionStorage.setItem("reloaded", true);
};

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
      createAccordions(data); // 生成する関数を呼び出し
      init(); // createAccordionsが完了した後にinitを呼び出す
    },
  });

  // HTMLタグを動的に生成する関数
  function createAccordions(data) {
    var container = document.getElementById("arimakinen-alldata");

    // CSVデータの各行に対してループ処理
    data.forEach(function (item) {
      // コメントアウトとで回数を追加
      var comment = document.createComment(
        ` <第${item.number.replace("第", "").replace("回", "")}回> `
      );
      container.appendChild(comment);

      // HTML要素を作成
      var accordion = document.createElement("div");
      accordion.className = "arimakinen-accordion";
      accordion.innerHTML = `
      <div class="arimakinen-accordion-toggle" id="data-${item.number
        .replace("第", "")
        .replace("回", "")}">
          <div class="arimakinen-accordion-icon"></div>
          <div class="arimakinen-times">
              第<span class="arimakinen-times-number">${item.number
                .replace("第", "")
                .replace("回", "")}</span>回
          </div>
          <div class="arimakinen-times-date">
              ${item.year}<span class="arimakinen-times-date-non">${item.date}</span>
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

      // コンテナにHTML要素を追加
      container.appendChild(accordion);
    });

    // 最初のアコーディオン要素を開く（jQuery）
    // $(".arimakinen-accordion:first .arimakinen-accordion-content").show();
    // $(".arimakinen-accordion:first .arimakinen-accordion-icon").addClass("active");

    // / 最初のアコーディオン要素を開く（jQuery →js）
    var firstAccordion = container.querySelector(".arimakinen-accordion");
    if (firstAccordion) {
      var firstContent = firstAccordion.querySelector(".arimakinen-accordion-content");
      var firstIcon = firstAccordion.querySelector(".arimakinen-accordion-icon");
      if (firstContent) {
        firstContent.style.display = "block";
      }
      if (firstIcon) {
        firstIcon.classList.add("active");
      }
    }
  }
  // HTML要素の生成が完了したことを確認してからinitを呼び出す
  // setTimeout(function () {
  //   init();
  // }, 0);

  console.log("Accordion elements created.");
}

// アコーディオン表示非表示 jQuery
$(document).ready(function () {
  $(document).on("click", ".arimakinen-accordion-icon, .arimakinen-times", function (event) {
    // このアコーディオンのコンテンツをトグル表示
    $(this).closest(".arimakinen-accordion").find(".arimakinen-accordion-content").slideToggle(200);

    // クリックされたアコーディオンのアイコンのクラスを切り替える
    $(this)
      .closest(".arimakinen-accordion")
      .find(".arimakinen-accordion-icon")
      .toggleClass("active");

    // イベントの伝播を防ぐ
    event.stopPropagation();
  });
});

// /**
//  * CSVファイルをロードして指定されたHTML要素にテーブルとして表示する関数です。
//  * @param {string} csvFilePath - ロードするCSVファイルのパス
//  * @param {string} containerId - テーブルを挿入するHTML要素のID
//  */

function loadAndDisplayDataCSV(csvFilePath, containerId) {
  fetch(csvFilePath)
    .then((response) => response.text())
    .then((csvString) => {
      const data = Papa.parse(csvString, { header: true, skipEmptyLines: true }).data;
      let tableHTML = "<thead><tr>";

      for (let header in data[0]) {
        tableHTML += `<th>${header}</th>`;
      }
      tableHTML += "</tr></thead><tbody>";

      for (let i = 0; i < data.length; i++) {
        let rowHTML = "<tr>";
        let columnIndex = 0;
        for (let cell in data[i]) {
          let classes = [];
          if (columnIndex === 3) classes.push("horsename");
          if (columnIndex === 1) classes.push("waku");
          if (columnIndex === 0) classes.push("rank");
          if ([0, 1, 2, 4, 5, 8, 9, 10, 11, 12].includes(columnIndex)) classes.push("center-text");
          let classString = classes.length > 0 ? ` class="${classes.join(" ")}"` : "";
          rowHTML += `<td${classString}>${data[i][cell]}</td>`;
          columnIndex++;
        }
        rowHTML += "</tr>";
        tableHTML += rowHTML;
      }

      tableHTML += "</tbody>";

      // nullチェックを追加
      const containerElement = document.getElementById(containerId);
      if (containerElement) {
        containerElement.innerHTML = tableHTML;
      } else {
        console.error(`Element with ID '${containerId}' not found.`);
        console.error(
          `Element with ID '${containerId}' not found. Current DOM:`,
          document.body.innerHTML
        );
      }
    })

    .catch((error) => {
      console.error("Error loading or parsing CSV: ", error);
      const containerElement = document.getElementById(containerId);
      if (containerElement) {
        containerElement.innerHTML = "<p>Error loading data.</p>";
      }
    });
}

window.loadAndDisplayDataCSV = loadAndDisplayDataCSV;

// CSVファイルをページロード時に自動的に読み込むための関数
function init() {
  for (let year = 2022; year >= 1956; year--) {
    let containerId = `arimakinen-${year}`;
    console.log(`Checking for element with ID: ${containerId}`);

    let csvFilePath = `/src/data/arimakinen-${year}.csv`;
    loadAndDisplayDataCSV(csvFilePath, containerId);
  }
}

// ページが完全にロードされたらinit関数を呼び出す
document.addEventListener("DOMContentLoaded", init);
