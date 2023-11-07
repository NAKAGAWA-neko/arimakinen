import * as Papa from "papaparse";

// CSVデータを格納するためのインターフェース。キーはstring型、値もstring型です。
interface MyData {
  [key: string]: string; // もしくはデータに応じたより具体的な型に
}

/**
 * CSVファイルをロードして指定されたHTML要素にテーブルとして表示する関数です。
 * @param {string} csvFilePath - ロードするCSVファイルのパス
 * @param {string} containerId - テーブルを挿入するHTML要素のID
 */
function loadAndDisplayCSV(csvFilePath: string, containerId: string): void {
  // CSVファイルをフェッチする
  fetch(csvFilePath)
    .then((response) => response.text())
    .then((csvString) => {
      // パパパースライブラリを使用してCSVデータをパースする
      const data = Papa.parse(csvString, { header: true, skipEmptyLines: true }).data as MyData[];
      let tableHTML = "<thead><tr>";

      // ヘッダー行を生成する
      for (let header in data[0]) {
        tableHTML += `<th>${header}</th>`;
      }
      tableHTML += "</tr></thead><tbody>";

      // 各データ行を生成する
      for (let i = 0; i < data.length; i++) {
        let rowHTML = "<tr>";
        let columnIndex = 0;
        for (let cell in data[i]) {
          let classes = [];
          // 4列目に太字のスタイルを適用する
          if (columnIndex === 3) {
            classes.push("bold");
          }

          // 特定の列をセンター揃えにするためのクラスを追加する
          if ([0, 1, 2, 4, 5, 8, 10, 11, 13].includes(columnIndex)) {
            classes.push("center-text");
          }

          // クラスを適用するための文字列を生成する
          let classString = classes.length > 0 ? ` class="${classes.join(" ")}"` : "";
          rowHTML += `<td${classString}>${data[i][cell]}</td>`;
          columnIndex++;
        }
        rowHTML += "</tr>";
        tableHTML += rowHTML;
      }

      tableHTML += "</tbody>";
      // 生成したHTMLテーブルを指定された要素に挿入する
      const dataTableElement = document.getElementById(containerId);
      if (dataTableElement) {
        dataTableElement.innerHTML = tableHTML;
      } else {
        console.error(`Element #${containerId} not found.`);
      }
    })
    .catch((error) => {
      // フェッチまたはパース中にエラーが発生した場合の処理
      console.error("Error loading CSV: ", error);
      const dataTableElement = document.getElementById(containerId);
      if (dataTableElement) {
        dataTableElement.innerHTML = "<tr><td>Error loading data.</td></tr>";
      } else {
        console.error(`Element #${containerId} not found.`);
      }
    });
}

// CSVファイルとそのデータを表示するためのHTML要素のIDを指定して関数を呼び出す。
// 例えば、2000年、2001年、2002年のデータを異なるテーブルに表示する。
loadAndDisplayCSV("arima2022.csv", "dataTable2022");
loadAndDisplayCSV("arima2021.csv", "dataTable2021");
