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
  `;

      // コンテナにアコーディオン要素を追加
      container.appendChild(accordion);
    });
  }
}

// /**
//  * CSVファイルをロードして指定されたHTML要素にテーブルとして表示する関数です。
//  * @param {string} csvFilePath - ロードするCSVファイルのパス
//  * @param {string} containerId - テーブルを挿入するHTML要素のID
//  */

function loadAndDisplayCSV(csvFilePath, containerId) {
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
      document.getElementById(containerId).innerHTML = tableHTML;
    })
    .catch((error) => {
      console.error("Error loading or parsing CSV: ", error);
      document.getElementById(containerId).innerHTML = "<p>Error loading data.</p>";
    });
}

window.loadAndDisplayCSV = loadAndDisplayCSV;

// CSVファイルをページロード時に自動的に読み込むための関数
function init() {
  loadAndDisplayCSV("/src/data/arimakinen-2022.csv", "arimakinen-2022");
  loadAndDisplayCSV("/src/data/arimakinen-2021.csv", "arimakinen-2021");
  loadAndDisplayCSV("/src/data/arimakinen-2020.csv", "arimakinen-2020");
  loadAndDisplayCSV("/src/data/arimakinen-2019.csv", "arimakinen-2019");
  loadAndDisplayCSV("/src/data/arimakinen-2018.csv", "arimakinen-2018");
  loadAndDisplayCSV("/src/data/arimakinen-2017.csv", "arimakinen-2017");
  loadAndDisplayCSV("/src/data/arimakinen-2016.csv", "arimakinen-2016");
  loadAndDisplayCSV("/src/data/arimakinen-2015.csv", "arimakinen-2015");
  loadAndDisplayCSV("/src/data/arimakinen-2014.csv", "arimakinen-2014");
  loadAndDisplayCSV("/src/data/arimakinen-2013.csv", "arimakinen-2013");
  loadAndDisplayCSV("/src/data/arimakinen-2012.csv", "arimakinen-2012");
  loadAndDisplayCSV("/src/data/arimakinen-2011.csv", "arimakinen-2011");
  loadAndDisplayCSV("/src/data/arimakinen-2010.csv", "arimakinen-2010");
  loadAndDisplayCSV("/src/data/arimakinen-2009.csv", "arimakinen-2009");
  loadAndDisplayCSV("/src/data/arimakinen-2008.csv", "arimakinen-2008");
  loadAndDisplayCSV("/src/data/arimakinen-2007.csv", "arimakinen-2007");
  loadAndDisplayCSV("/src/data/arimakinen-2006.csv", "arimakinen-2006");
  loadAndDisplayCSV("/src/data/arimakinen-2005.csv", "arimakinen-2005");
  loadAndDisplayCSV("/src/data/arimakinen-2004.csv", "arimakinen-2004");
  loadAndDisplayCSV("/src/data/arimakinen-2003.csv", "arimakinen-2003");
  loadAndDisplayCSV("/src/data/arimakinen-2002.csv", "arimakinen-2002");
  loadAndDisplayCSV("/src/data/arimakinen-2001.csv", "arimakinen-2001");
  loadAndDisplayCSV("/src/data/arimakinen-2000.csv", "arimakinen-2000");
  loadAndDisplayCSV("/src/data/arimakinen-1999.csv", "arimakinen-1999");
  loadAndDisplayCSV("/src/data/arimakinen-1998.csv", "arimakinen-1998");
  loadAndDisplayCSV("/src/data/arimakinen-1997.csv", "arimakinen-1997");
  loadAndDisplayCSV("/src/data/arimakinen-1996.csv", "arimakinen-1996");
  loadAndDisplayCSV("/src/data/arimakinen-1995.csv", "arimakinen-1995");
  loadAndDisplayCSV("/src/data/arimakinen-1994.csv", "arimakinen-1994");
  loadAndDisplayCSV("/src/data/arimakinen-1993.csv", "arimakinen-1993");
  loadAndDisplayCSV("/src/data/arimakinen-1992.csv", "arimakinen-1992");
  loadAndDisplayCSV("/src/data/arimakinen-1991.csv", "arimakinen-1991");
  loadAndDisplayCSV("/src/data/arimakinen-1990.csv", "arimakinen-1990");
  loadAndDisplayCSV("/src/data/arimakinen-1989.csv", "arimakinen-1989");
  loadAndDisplayCSV("/src/data/arimakinen-1988.csv", "arimakinen-1988");
  loadAndDisplayCSV("/src/data/arimakinen-1987.csv", "arimakinen-1987");
  loadAndDisplayCSV("/src/data/arimakinen-1986.csv", "arimakinen-1986");
  loadAndDisplayCSV("/src/data/arimakinen-1985.csv", "arimakinen-1985");
  loadAndDisplayCSV("/src/data/arimakinen-1984.csv", "arimakinen-1984");
  loadAndDisplayCSV("/src/data/arimakinen-1983.csv", "arimakinen-1983");
  loadAndDisplayCSV("/src/data/arimakinen-1982.csv", "arimakinen-1982");
  loadAndDisplayCSV("/src/data/arimakinen-1981.csv", "arimakinen-1981");
  loadAndDisplayCSV("/src/data/arimakinen-1980.csv", "arimakinen-1980");
  loadAndDisplayCSV("/src/data/arimakinen-1979.csv", "arimakinen-1979");
  loadAndDisplayCSV("/src/data/arimakinen-1978.csv", "arimakinen-1978");
  loadAndDisplayCSV("/src/data/arimakinen-1977.csv", "arimakinen-1977");
  loadAndDisplayCSV("/src/data/arimakinen-1976.csv", "arimakinen-1976");
  loadAndDisplayCSV("/src/data/arimakinen-1975.csv", "arimakinen-1975");
  loadAndDisplayCSV("/src/data/arimakinen-1974.csv", "arimakinen-1974");
  loadAndDisplayCSV("/src/data/arimakinen-1973.csv", "arimakinen-1973");
  loadAndDisplayCSV("/src/data/arimakinen-1972.csv", "arimakinen-1972");
  loadAndDisplayCSV("/src/data/arimakinen-1971.csv", "arimakinen-1971");
  loadAndDisplayCSV("/src/data/arimakinen-1970.csv", "arimakinen-1970");
  loadAndDisplayCSV("/src/data/arimakinen-1969.csv", "arimakinen-1969");
  loadAndDisplayCSV("/src/data/arimakinen-1968.csv", "arimakinen-1968");
  loadAndDisplayCSV("/src/data/arimakinen-1967.csv", "arimakinen-1967");
  loadAndDisplayCSV("/src/data/arimakinen-1966.csv", "arimakinen-1966");
  loadAndDisplayCSV("/src/data/arimakinen-1965.csv", "arimakinen-1965");
  loadAndDisplayCSV("/src/data/arimakinen-1964.csv", "arimakinen-1964");
  loadAndDisplayCSV("/src/data/arimakinen-1963.csv", "arimakinen-1963");
  loadAndDisplayCSV("/src/data/arimakinen-1962.csv", "arimakinen-1962");
  loadAndDisplayCSV("/src/data/arimakinen-1961.csv", "arimakinen-1961");
  loadAndDisplayCSV("/src/data/arimakinen-1960.csv", "arimakinen-1960");
  loadAndDisplayCSV("/src/data/arimakinen-1959.csv", "arimakinen-1959");
  loadAndDisplayCSV("/src/data/arimakinen-1958.csv", "arimakinen-1958");
  loadAndDisplayCSV("/src/data/arimakinen-1957.csv", "arimakinen-1957");
  loadAndDisplayCSV("/src/data/arimakinen-1956.csv", "arimakinen-1956");
}
// ページが完全にロードされたらinit関数を呼び出す
document.addEventListener("DOMContentLoaded", init);

$(document).ready(function () {
  // 既存のアコーディオンの動作設定
  $(".arimakinen-accordion-icon, .arimakinen-times").click(function (event) {
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

  // 最初のアコーディオン要素を開く
  $(".arimakinen-accordion:first .arimakinen-accordion-content").show();
  $(".arimakinen-accordion:first .arimakinen-accordion-icon").addClass("active");
});

// クリックイベントを設定する要素を選択
const hamburger = document.querySelector(".hamburger");

// クリックイベントを設定
hamburger.addEventListener("click", function () {
  // クリックされた要素（.hamburger）に .is-active クラスを追加したり削除したりする
  hamburger.classList.toggle("is-active");
});
