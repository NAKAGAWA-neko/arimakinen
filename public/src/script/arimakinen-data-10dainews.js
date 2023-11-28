function loadAndDisplay10daiCSV(csvFilePath, containerId) {
  fetch(csvFilePath)
    .then((response) => response.text())
    .then((csvString) => {
      const data = Papa.parse(csvString, { header: true, skipEmptyLines: true }).data;
      let tableHTML = "<thead><tr>";

      // ヘッダー行の生成
      Object.keys(data[0]).forEach((header, index) => {
        let headerClass = `header-column-${index}`; // 列ごとにヘッダーにクラスを追加
        tableHTML += `<th class="${headerClass}">${header}</th>`;
      });
      tableHTML += "</tr></thead><tbody>";

      // データ行の生成
      data.forEach((row, rowIndex) => {
        let rowClass = `data-row-${rowIndex + 1}`; // 行ごとにクラスを追加
        let rowHTML = `<tr class="${rowClass}">`;
        let columnIndex = 0;

        Object.values(row).forEach((cell, columnIndex) => {
          let cellClass = `data-cell-${rowIndex + 1}-${columnIndex + 1}`; // 行と列ごとにセルにクラスを追加
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

// この関数をグローバルスコープに公開し、HTMLからアクセス可能にします。
window.loadAndDisplay10daiCSV = loadAndDisplay10daiCSV;

function loadAndDisplay10daiArimaCSV(csvFilePath, containerId) {
  fetch(csvFilePath)
    .then((response) => response.text())
    .then((csvString) => {
      const data = Papa.parse(csvString, { header: true, skipEmptyLines: true }).data;

      const headers = Object.keys(data[0]);
      const selectedColumns = [0, 1, 2, 3, 4, 6];
      let tableHTML = "<thead><tr>";

      selectedColumns.forEach((index) => {
        tableHTML += `<th>${headers[index]}</th>`;
      });
      tableHTML += "</tr></thead><tbody>";

      for (let i = 0; i < Math.min(data.length, 3); i++) {
        let row = data[i];
        let rowHTML = "<tr>";
        selectedColumns.forEach((index, colNumber) => {
          let cellContent = row[headers[index]];
          // 全ての列にクラスを適用
          let cellClass = `column-${colNumber + 1} cell-${i + 1}`;
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
    if (document.getElementById(containerId)) {
      loadAndDisplay10daiCSV(csvFilePath, containerId);
    }
  }

  //海外
  for (let year = 2022; year >= 1995; year--) {
    let csvFilePath = `/src/data/kaigai-${year}.csv`;
    let containerId = `kaigai-${year}`;
    if (document.getElementById(containerId)) {
      loadAndDisplay10daiCSV(csvFilePath, containerId);
    }
  }

  // 有馬記念結果
  // 1997年から2022年までの各年についてループを実行
  for (let year = 2022; year >= 1995; year--) {
    let csvFilePath = `/src/data/arimakinen-${year}.csv`;
    let containerId = `arimakinen-10dai-${year}`;
    if (document.getElementById(containerId)) {
      loadAndDisplay10daiArimaCSV(csvFilePath, containerId);
    }
  }
  // 漢字と流行語
  fetch("/src/data/kanji-buzz.csv")
    .then((response) => response.text())
    .then((text) => {
      Papa.parse(text, {
        complete: function (results) {
          for (let year = 2022; year >= 2001; year--) {
            for (let col = 1; col <= 2; col++) {
              let row = 2022 - year;
              let elementId = `o-${year}-${col}`;
              if (document.getElementById(elementId)) {
                let cellData = results.data[row][col];
                document.getElementById(elementId).textContent = cellData;
              }
            }
          }
        },
      });
    });
}
// ページが完全にロードされたらinit関数を呼び出す
document.addEventListener("DOMContentLoaded", init);
