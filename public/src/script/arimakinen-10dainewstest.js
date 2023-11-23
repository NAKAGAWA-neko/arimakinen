// 各年のデータをオブジェクトで構造化
const yearlyData = {
  1995: {
    title: "1995年のニュース",
    links: [
      { url: "https://example.com/1995/news1", text: "ニュース1" },
      { url: "https://example.com/1995/news2", text: "ニュース2" },
      // ... その他のリンク ...
    ],
  },
  // ... 各年のデータを追加 ...
  2022: {
    title: "2022年のニュース",
    links: [
      {
        url: "https://www.yomiuri.co.jp/feature/top10news/20221223-OYT8T50087/",
        text: "ニュース1",
      },
      { url: "https://another-link.com/2022/news2", text: "ニュース2" },
      // ... その他のリンク ...
    ],
  },
};

// 各年のデータに基づいてHTMLコンテンツを生成する関数
function createAccordions() {
  const container = document.getElementById("accordion-container");

  for (const year in yearlyData) {
    const yearData = yearlyData[year];
    const accordion = document.createElement("div");
    accordion.className = "accordion";
    accordion.innerHTML = `
      <div class="accordion-title">${yearData.title}</div>
      <div class="accordion-content">
        ${yearData.links
          .map((link) => `<a href="${link.url}" target="_blank">${link.text}</a>`)
          .join("<br>")}
      </div>
    `;
    container.appendChild(accordion);
  }
}

// 関数を呼び出してコンテンツを生成
createAccordions();

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
}

// アコーディオン表示非表示
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

window.loadAndDisplayDataCSV = loadAndDisplayDataCSV;

// CSVファイルをページロード時に自動的に読み込むための関数
function init() {
  for (let year = 2022; year >= 1956; year--) {
    let csvFilePath = `/src/data/arimakinen-${year}.csv`;
    let containerId = `arimakinen-${year}`;
    loadAndDisplayDataCSV(csvFilePath, containerId);
  }
}
// ページが完全にロードされたらinit関数を呼び出す
document.addEventListener("DOMContentLoaded", init);
