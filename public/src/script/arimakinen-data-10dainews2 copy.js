// 一般データ（有馬記念以外）を読み込んで、テーブルとして表示する関数
function loadAndDisplayCSV(csvFilePath, containerId) {
  fetch(csvFilePath)
    .then((response) => response.text())
    .then((csvString) => {
      const data = Papa.parse(csvString, { header: true, skipEmptyLines: true }).data;
      let tableHTML = "<thead><tr>";

      // ヘッダー行を生成
      Object.keys(data[0]).forEach((header, index) => {
        let headerClass = `header-column-${index}`;
        tableHTML += `<th class="${headerClass}">${header}</th>`;
      });
      tableHTML += "</tr></thead><tbody>";

      // データ行を生成
      data.forEach((row, rowIndex) => {
        let rowClass = `data-row-${rowIndex + 1}`;
        let rowHTML = `<tr class="${rowClass}">`;

        Object.values(row).forEach((cell, columnIndex) => {
          let cellClass = `data-cell-${rowIndex + 1}-${columnIndex + 1}`;
          let cellContent = cell;

          // 最初の列（ランク）の特別な処理
          if (columnIndex === 0) {
            cellContent = cell.replace(/位/, "");
            cellContent = `<span class="arimakinen-content-10dainews-news-table-circle-number">${cellContent}</span>`;
          }

          rowHTML += `<td class="${cellClass}">${cellContent}</td>`;
        });

        rowHTML += "</tr>";
        tableHTML += rowHTML;
      });

      tableHTML += "</tbody>";
      document.getElementById(containerId).innerHTML = tableHTML;
    })
    .catch((error) => {
      console.error("Error loading or parsing CSV: ", error);
      document.getElementById(containerId).innerHTML = "<p>Error loading data.</p>";
    });
}

// 有馬記念データを読み込んで、テーブルとして表示する関数

function loadAndDisplayArimaCSV(csvFilePath, containerId) {
  fetch(csvFilePath)
    .then((response) => response.text())
    .then((csvString) => {
      const data = Papa.parse(csvString, { header: true, skipEmptyLines: true }).data;
      let tableHTML = "<thead><tr>";

      // ヘッダー行を生成
      Object.keys(data[0]).forEach((header, index) => {
        let headerClass = `arimacolumnth-${index + 1}`;
        tableHTML += `<th class="${headerClass}">${header}</th>`;
      });
      tableHTML += "</tr></thead><tbody>";

      // データ行を生成
      data.forEach((row, rowIndex) => {
        let rowHTML = `<tr>`;

        Object.values(row).forEach((cell, columnIndex) => {
          // 行クラスと列クラスを付与
          let columnClass = `arimacolumn-${columnIndex + 1}`;
          let cellClass = `arimacell-${rowIndex + 1}`;
          rowHTML += `<td class="${columnClass} ${cellClass}">${cell}</td>`;
        });

        rowHTML += "</tr>";
        tableHTML += rowHTML;
      });

      tableHTML += "</tbody>";
      document.getElementById(containerId).innerHTML = tableHTML;
    })
    .catch((error) => {
      console.error("Error loading or parsing CSV: ", error);
      document.getElementById(containerId).innerHTML = "<p>Error loading data.</p>";
    });
}

// この関数をグローバルスコープに公開
window.loadAndDisplayCSV = loadAndDisplayCSV;
window.loadAndDisplayArimaCSV = loadAndDisplayArimaCSV;

// CSVファイルをページロード時に自動的に読み込むための関数
function init() {
  // 国内データと海外データの読み込み（一般データ）
  const csvFilePaths = {
    kokunai: `/src/data/kokunai-2023.csv`,
    kaigai: `/src/data/kaigai-2023.csv`,
  };
  Object.entries(csvFilePaths).forEach(([key, path]) => {
    let containerId = `${key}-2023`;
    if (document.getElementById(containerId)) {
      loadAndDisplayCSV(path, containerId);
    }
  });

  // 有馬記念データの読み込み（特別データ）
  let arimaCsvFilePath = `/src/data/arimakinen-2023.csv`;
  let arimaContainerId = `arimakinen-10dai-2023`;
  if (document.getElementById(arimaContainerId)) {
    loadAndDisplayArimaCSV(arimaCsvFilePath, arimaContainerId);
  }
}

// ページが完全にロードされたらinit関数を呼び出す
document.addEventListener("DOMContentLoaded", init);
