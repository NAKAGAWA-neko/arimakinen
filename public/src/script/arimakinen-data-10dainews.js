// /**
//  * CSVファイルをロードして指定されたHTML要素にテーブルとして表示する関数です。
//  * @param {string} csvFilePath - ロードするCSVファイルのパス
//  * @param {string} containerId - テーブルを挿入するHTML要素のID
//  */

function loadAndDisplayCSV(csvFilePath, containerId) {
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
            cellContent = `<span class="arimakinen-circle-number">${cellContent}</span>`;
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
window.loadAndDisplayCSV = loadAndDisplayCSV;

// CSVファイルをページロード時に自動的に読み込むための関数
function init() {
  loadAndDisplayCSV("/src/data/kokunai-2022.csv", "kokunai-2022");
  // loadAndDisplayCSV("/src/data/kokunai-2021.csv", "kokunai-2021");
  // loadAndDisplayCSV("/src/data/kokunai-2020.csv", "kokunai-2020");
  // loadAndDisplayCSV("/src/data/kokunai-2019.csv", "kokunai-2019");
  // loadAndDisplayCSV("/src/data/kokunai-2018.csv", "kokunai-2018");
  // loadAndDisplayCSV("/src/data/kokunai-2017.csv", "kokunai-2017");
  // loadAndDisplayCSV("/src/data/kokunai-2016.csv", "kokunai-2016");
  // loadAndDisplayCSV("/src/data/kokunai-2015.csv", "kokunai-2015");
  // loadAndDisplayCSV("/src/data/kokunai-2014.csv", "kokunai-2014");
  // loadAndDisplayCSV("/src/data/kokunai-2013.csv", "kokunai-2013");
  // loadAndDisplayCSV("/src/data/kokunai-2012.csv", "kokunai-2012");
  // loadAndDisplayCSV("/src/data/kokunai-2011.csv", "kokunai-2011");
  // loadAndDisplayCSV("/src/data/kokunai-2010.csv", "kokunai-2010");
  // loadAndDisplayCSV("/src/data/kokunai-2009.csv", "kokunai-2009");
  // loadAndDisplayCSV("/src/data/kokunai-2008.csv", "kokunai-2008");
  // loadAndDisplayCSV("/src/data/kokunai-2007.csv", "kokunai-2007");
  // loadAndDisplayCSV("/src/data/kokunai-2006.csv", "kokunai-2006");
  // loadAndDisplayCSV("/src/data/kokunai-2005.csv", "kokunai-2005");
  // loadAndDisplayCSV("/src/data/kokunai-2004.csv", "kokunai-2004");
  // loadAndDisplayCSV("/src/data/kokunai-2003.csv", "kokunai-2003");
  // loadAndDisplayCSV("/src/data/kokunai-2002.csv", "kokunai-2002");
  // loadAndDisplayCSV("/src/data/kokunai-2001.csv", "kokunai-2001");
  // loadAndDisplayCSV("/src/data/kokunai-2000.csv", "kokunai-2000");
  // loadAndDisplayCSV("/src/data/kokunai-1999.csv", "kokunai-1999");
  // loadAndDisplayCSV("/src/data/kokunai-1998.csv", "kokunai-1998");
  // loadAndDisplayCSV("/src/data/kokunai-1997.csv", "kokunai-1997");
  // loadAndDisplayCSV("/src/data/kokunai-1996.csv", "kokunai-1996");
  // loadAndDisplayCSV("/src/data/kokunai-1995.csv", "kokunai-1995");

  //海外
  loadAndDisplayCSV("/src/data/kaigai-2022.csv", "kaigai-2022");
  // loadAndDisplayCSV("/src/data/kaigai-2021.csv", "kaigai-2021");
  // loadAndDisplayCSV("/src/data/kaigai-2020.csv", "kaigai-2020");
  // loadAndDisplayCSV("/src/data/kaigai-2019.csv", "kaigai-2019");
  // loadAndDisplayCSV("/src/data/kaigai-2018.csv", "kaigai-2018");
  // loadAndDisplayCSV("/src/data/kaigai-2017.csv", "kaigai-2017");
  // loadAndDisplayCSV("/src/data/kaigai-2016.csv", "kaigai-2016");
  // loadAndDisplayCSV("/src/data/kaigai-2015.csv", "kaigai-2015");
  // loadAndDisplayCSV("/src/data/kaigai-2014.csv", "kaigai-2014");
  // loadAndDisplayCSV("/src/data/kaigai-2013.csv", "kaigai-2013");
  // loadAndDisplayCSV("/src/data/kaigai-2012.csv", "kaigai-2012");
  // loadAndDisplayCSV("/src/data/kaigai-2011.csv", "kaigai-2011");
  // loadAndDisplayCSV("/src/data/kaigai-2010.csv", "kaigai-2010");
  // loadAndDisplayCSV("/src/data/kaigai-2009.csv", "kaigai-2009");
  // loadAndDisplayCSV("/src/data/kaigai-2008.csv", "kaigai-2008");
  // loadAndDisplayCSV("/src/data/kaigai-2007.csv", "kaigai-2007");
  // loadAndDisplayCSV("/src/data/kaigai-2006.csv", "kaigai-2006");
  // loadAndDisplayCSV("/src/data/kaigai-2005.csv", "kaigai-2005");
  // loadAndDisplayCSV("/src/data/kaigai-2004.csv", "kaigai-2004");
  // loadAndDisplayCSV("/src/data/kaigai-2003.csv", "kaigai-2003");
  // loadAndDisplayCSV("/src/data/kaigai-2002.csv", "kaigai-2002");
  // loadAndDisplayCSV("/src/data/kaigai-2001.csv", "kaigai-2001");
  // loadAndDisplayCSV("/src/data/kaigai-2000.csv", "kaigai-2000");
  // loadAndDisplayCSV("/src/data/kaigai-1999.csv", "kaigai-1999");
  // loadAndDisplayCSV("/src/data/kaigai-1998.csv", "kaigai-1998");
  // loadAndDisplayCSV("/src/data/kaigai-1997.csv", "kaigai-1997");
  // loadAndDisplayCSV("/src/data/kaigai-1996.csv", "kaigai-1996");
  // loadAndDisplayCSV("/src/data/kaigai-1995.csv", "kaigai-1995");
}
// ページが完全にロードされたらinit関数を呼び出す
document.addEventListener("DOMContentLoaded", init);
