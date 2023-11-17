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
  for (let year = 2022; year >= 1996; year--) {
    let csvFilePath = `/src/data/kokunai-${year}.csv`;
    let containerId = `kokunai-${year}`;
    loadAndDisplay10daiCSV(csvFilePath, containerId);
  }

  //海外
  for (let year = 2022; year >= 1996; year--) {
    let csvFilePath = `/src/data/kaigai-${year}.csv`;
    let containerId = `kaigai-${year}`;
    loadAndDisplay10daiCSV(csvFilePath, containerId);
  }

  // 有馬記念結果
  // 1997年から2022年までの各年についてループを実行
  for (let year = 2022; year >= 1997; year--) {
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
