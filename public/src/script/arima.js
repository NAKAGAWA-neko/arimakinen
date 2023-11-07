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
          if ([0, 1, 2, 4, 5, 8, 10, 11, 13].includes(columnIndex)) classes.push("center-text");
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
  loadAndDisplayCSV("/src/data/arima2022.csv", "dataTable2022");
  loadAndDisplayCSV("/src/data/arima2021.csv", "dataTable2021");
}

// ページが完全にロードされたらinit関数を呼び出す
document.addEventListener("DOMContentLoaded", init);
