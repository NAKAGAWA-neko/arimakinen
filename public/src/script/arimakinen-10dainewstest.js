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
