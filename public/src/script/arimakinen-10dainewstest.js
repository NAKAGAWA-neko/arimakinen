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

      data.forEach(function (item) {
        console.log(item.year); // コンソールに年度を出力
      });
    },
  });

  // HTMLタグを動的に生成する関数
  function createAccordions(data) {
    var container = document.getElementById("arimakinen-10dainews-main");
    var fragment = document.createDocumentFragment(); // ドキュメントフラグメントを作成

    // データを1995年以降にフィルタリング
    var filteredData = data.filter(function (item) {
      var year = parseInt(item.year);
      return year >= 1995;
    });

    filteredData.forEach(function (item) {
      var accordion = document.createElement("div"); // div要素を作成
      accordion.className = "arimakinen-content";

      // IDを設定
      accordion.id = "10dainews-" + item.year.replace("年", "");

      // HTML要素を作成
      accordion.innerHTML = `
      
      <div id="data-${item.year.replace("年", "")}">
      <div class="arimakinen-content-10dainews">
      <div class="arimakinen-content-10dainews-title">
      ${item.year.replace("年", "")}<span>年</span></div>
      <div class="arimakinen-content-10dainews-bar"></div>
      
      <!-- コンテンツメイン -->
      <div class="arimakinen-content-10dainews-main">
      <!-- ボタン -->
      <div class="arimakinen-content-10dainews-head">
        <button class="arimakinen-content-10dainews-head-btn changeBtn10dainews">
          海外
        </button>
      </div>
      <!-- ニュース内容 -->
      <div class="arimakinen-content-10dainews-news">
        <!-- 日本 -->
        <div class="arimakinen-content-10dainews-1-1">
          <div class="arimakinen-content-10dainews-news-title">
            日本の<span class="arima-kaigyo-600-660"><br /></span>10大ニュース
          </div>
          <div class="arimakinen-content-10dainews-news-table">
            <div class="arimakinen-content-10dainews-news-table-scrollcontainer">
              <table id="kokunai-${item.year.replace("年", "")}"></table>
            </div>
            <div class="arimakinen-content-10dainews-news-table-link">
            <a
            href="https://www.yomiuri.co.jp/feature/top10news/20221223-OYT8T50087/"
            target="_blank"
            >詳しくはこちらから</a
          >
        </div>
      </div>
    </div>

    <!-- 海外 -->
    <div class="arimakinen-content-10dainews-1-2">
      <div class="arimakinen-content-10dainews-news-title">
        海外の<span class="arima-kaigyo-600-660"><br /></span>10大ニュース
      </div>
      <div class="arimakinen-content-10dainews-news-table">
        <div class="arimakinen-content-10dainews-news-table-scrollcontainer">
          <table id="kaigai-${item.year.replace("年", "")}"></table>
        </div>
        <div class="arimakinen-content-10dainews-news-table-link">
          <a href="https://www.yomiuri.co.jp/feature/top10news/20221223-OYT8T50087/"
            target="_blank">詳しくはこちらから</a>
        </div>
      </div>
    </div>
  </div>
  <!-- 有馬記念データ -->
  <div class="arimakinen-content-10dainews-arimadata">
    <div class="arimakinen-content-10dainews-arimadata-title">
    ${item.number}有馬記念<br /><span>${item.year}${item.date}</span>
    </div>
    <div class="arimakinen-content-10dainews-arimadata-table">
      <div class="arimakinen-content-10dainews-arimadata-table-scrollcontainer">
        <table id="arimakinen-10dai-${item.year.replace("年", "")}"></table>
      </div>
      <div class="arimakinen-content-10dainews-arimadata-table-link">
        <a href="data.html#data-61">詳し成績はこちらから</a>
      </div>
    </div>
  </div>
  <!-- その他ワード -->
  <div class="arimakinen-content-10dainews-others">
    <div class="arimakinen-content-10dainews-others-kanji">
      <div class="others-title">今年の漢字</div>
      <div class="others-answer" id="${item.year.replace("年", "")}-1"></div>
    </div>

    <div class="arimakinen-content-10dainews-others-buzzword">
      <div class="others-title">流行語大賞</div>
      <div class="others-answer" id="${item.year.replace("年", "")}-2"></div>
    </div>
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

function loadAndDisplay10daiCSV(csvFilePath, containerId) {
  // CSVファイルをフェッチしてテキストとして取得します。
  fetch(csvFilePath)
    .then((response) => response.text())
    .then((csvString) => {
      // CSVをパースしてデータを取得します。ヘッダー付きで空行をスキップします。
      const data = Papa.parse(csvString, { header: true, skipEmptyLines: true }).data;
      let tableHTML = "<thead><tr>";

      // ヘッダー行を生成します。
      for (let header in data[0]) {
        tableHTML += `<th>${header}</th>`;
      }
      tableHTML += "</tr></thead><tbody>";

      // データ行を生成します。
      for (let i = 0; i < data.length; i++) {
        let rowHTML = "<tr>";
        let columnIndex = 0;
        for (let cell in data[i]) {
          let classes = [];
          let cellContent = data[i][cell];

          // 最初の列（ランク）の処理を行います。
          if (columnIndex === 0) {
            // '位'という文字を取り除きます。
            cellContent = cellContent.replace(/位/, "");
            // 数字を丸で囲むためのspan要素を追加します。
            cellContent = `<span class="arimakinen-content-10dainews-news-table-circle-number">${cellContent}</span>`;
          }

          rowHTML += `<td>${cellContent}</td>`;
          columnIndex++;
        }
        rowHTML += "</tr>";
        tableHTML += rowHTML;
      }

      tableHTML += "</tbody>";
      // 生成したHTMLを指定されたコンテナに設定します。
      document.getElementById(containerId).innerHTML = tableHTML;
    })
    .catch((error) => {
      // エラーが発生した場合、エラーメッセージをコンソールに出力し、
      // ユーザーにエラーを通知するメッセージを表示します。
      console.error("Error loading or parsing CSV: ", error);
      document.getElementById(containerId).innerHTML = "<p>Error loading data.</p>";
    });
}

// この関数をグローバルスコープに公開し、HTMLからアクセス可能にします。
window.loadAndDisplay10daiCSV = loadAndDisplay10daiCSV;

function loadAndDisplay10daiArimaCSV(csvFilePath, containerId) {
  fetch(csvFilePath)
    .then((response) => response.text())
    .then((csvString) => {
      const data = Papa.parse(csvString, { header: true, skipEmptyLines: true }).data;

      // 指定された列のヘッダー名を取得します。
      const headers = Object.keys(data[0]);
      const selectedColumns = [0, 1, 2, 3, 4, 6]; // 列のインデックス（0始まり）
      let tableHTML = "<thead><tr>";

      // 選択されたヘッダーのみを表示します。
      selectedColumns.forEach((index) => {
        tableHTML += `<th>${headers[index]}</th>`;
      });
      tableHTML += "</tr></thead><tbody>";

      // 指定された行のみを処理します（最初の4行）。
      for (let i = 0; i < Math.min(data.length, 3); i++) {
        let row = data[i];
        let rowHTML = "<tr>";
        selectedColumns.forEach((index, colNumber) => {
          let cellContent = row[headers[index]];
          // 2列目のセルに特別なクラスを適用します。
          let cellClass = colNumber === 1 ? `column-2 cell-${i + 1}` : `column-${colNumber + 1}`;
          rowHTML += `<td class="${cellClass}">${cellContent}</td>`;
        });
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

window.loadAndDisplay10daiArimaCSV = loadAndDisplay10daiArimaCSV;

// CSVファイルをページロード時に自動的に読み込むための関数
function init() {
  // 国内
  for (let year = 2022; year >= 1995; year--) {
    let csvFilePath = `/src/data/kokunai-${year}.csv`;
    let containerId = `kokunai-${year}`;
    loadAndDisplay10daiCSV(csvFilePath, containerId);
  }

  //海外
  for (let year = 2022; year >= 1995; year--) {
    let csvFilePath = `/src/data/kaigai-${year}.csv`;
    let containerId = `kaigai-${year}`;
    loadAndDisplay10daiCSV(csvFilePath, containerId);
  }

  // 有馬記念結果

  for (let year = 2022; year >= 1995; year--) {
    let csvFilePath = `/src/data/arimakinen-${year}.csv`;
    let containerId = `arimakinen-10dai-${year}`;
    loadAndDisplay10daiArimaCSV(csvFilePath, containerId);
  }

  // 漢字と流行語
  fetch("/src/data/kanji-buzz.csv")
    .then((response) => response.text())
    .then((text) => {
      Papa.parse(text, {
        complete: function (results) {
          // 最初の年から最後の年までループ
          for (let year = 2022; year >= 2001; year--) {
            // CSVデータの各行に対してループ
            for (let col = 1; col <= 2; col++) {
              let row = 2022 - year; // 行インデックスの計算

              let elementId = `${year}-${col}`; // 要素のIDを生成
              let cellData = results.data[row][col]; // CSVデータからセルの値を取得

              // HTML要素にデータを設定
              document.getElementById(elementId).textContent = cellData;
            }
          }
        },
      });
    });
}

// ページが完全にロードされたらinit関数を呼び出す
document.addEventListener("DOMContentLoaded", init);
