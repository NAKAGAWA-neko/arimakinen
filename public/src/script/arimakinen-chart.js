// 1着
var arimaChartCyakujyun1Config = {
  type: "bar",
  data: {
    labels: [
      "1番人気",
      "2番人気",
      "3番人気",
      "4番人気",
      "5番人気",
      "6番人気",
      "7番人気",
      "8番人気",
      "9番人気",
      "10番人気",
      "11番人気",
      "12番人気",
      "13番人気",
      "14番人気",
      "15番人気",
      "16番人気",
    ],
    datasets: [
      {
        label: "頭数",
        data: [26, 11, 7, 10, 0, 3, 1, 1, 4, 2, 0, 0, 0, 1, 1, 0],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        bodyFont: {
          weight: "bold", // テキストを太字に設定
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        stacked: true,
        max: 30,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

// 2着
var arimaChartCyakujyun2Config = {
  type: "bar",
  data: {
    labels: [
      "1番人気",
      "2番人気",
      "3番人気",
      "4番人気",
      "5番人気",
      "6番人気",
      "7番人気",
      "8番人気",
      "9番人気",
      "10番人気",
      "11番人気",
      "12番人気",
      "13番人気",
      "14番人気",
      "15番人気",
      "16番人気",
    ],
    datasets: [
      {
        label: "頭数",
        data: [14, 8, 14, 4, 8, 4, 4, 2, 1, 2, 2, 1, 2, 1, 0, 0],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        bodyFont: {
          weight: "bold", // テキストを太字に設定
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        stacked: true,
        max: 30,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};
// 3着
var arimaChartCyakujyun3Config = {
  type: "bar",
  data: {
    labels: [
      "1番人気",
      "2番人気",
      "3番人気",
      "4番人気",
      "5番人気",
      "6番人気",
      "7番人気",
      "8番人気",
      "9番人気",
      "10番人気",
      "11番人気",
      "12番人気",
      "13番人気",
      "14番人気",
      "15番人気",
      "16番人気",
    ],
    datasets: [
      {
        label: "頭数",
        data: [6, 13, 8, 10, 1, 8, 3, 3, 3, 2, 3, 2, 2, 3, 0, 0],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        bodyFont: {
          weight: "bold", // テキストを太字に設定
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        stacked: true,
        max: 30,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

// 騎手優勝ランキング
var arimaChartJockeyConfig = {
  type: "bar",
  data: {
    labels: [
      "池添謙一",
      "武豊",
      "田原成貴",
      "O.ペリエ",
      "岡部幸雄",
      "C.ルメール",
      "野平祐二",
      "的場均",
      "大崎昭一",
      "加賀武見",
      "保田隆芳",
      "高松三太",
      "蛯名正義",
      "増沢末夫",
    ],
    datasets: [
      {
        label: "",
        data: [4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2],
        backgroundColor: ["rgba(232, 195, 52, 0.7)"],
        borderColor: ["rgba(232, 195, 52, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        bodyFont: {
          weight: "bold", // テキストを太字に設定
        },
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ":";
            }
            if (context.raw !== null) {
              label += context.raw + "回";
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false, // 横軸のグリッド（縦線たち）を非表示
        },
      },
    },
  },
};

let arimaChartCyakujyun1 = null;
let arimaChartCyakujyun2 = null;
let arimaChartCyakujyun3 = null;
let arimaChartJockey = null;

// チャートを生成するための関数
function generateChart(config, canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    throw new Error("Cannot find a canvas element with id ".concat(canvasId));
  }
  const chart = new Chart(canvas, config);
  return chart;
}

// 初期チャートの生成
arimaChartCyakujyun1 = generateChart(arimaChartCyakujyun1Config, "arimaChartCyakujyun1");
arimaChartCyakujyun2 = generateChart(arimaChartCyakujyun2Config, "arimaChartCyakujyun2");
arimaChartCyakujyun3 = generateChart(arimaChartCyakujyun3Config, "arimaChartCyakujyun3");
arimaChartJockey = generateChart(arimaChartJockeyConfig, "arimaChartJockey");

// ウィンドウサイズの変更時にチャートを再描画
window.addEventListener("resize", function () {
  if (arimaChartCyakujyun1) {
    arimaChartCyakujyun1.destroy();
    arimaChartCyakujyun1 = generateChart(arimaChartCyakujyun1Config, "arimaChartCyakujyun1");
  }
  if (arimaChartCyakujyun2) {
    arimaChartCyakujyun2.destroy();
    arimaChartCyakujyun2 = generateChart(arimaChartCyakujyun2Config, "arimaChartCyakujyun2");
  }
  if (arimaChartCyakujyun3) {
    arimaChartCyakujyun3.destroy();
    arimaChartCyakujyun3 = generateChart(arimaChartCyakujyun3Config, "arimaChartCyakujyun3");
  }
  if (arimaChartJockey) {
    arimaChartJockey.destroy();
    arimaChartJockey = generateChart(arimaChartJockeyConfig, "arimaChartJockey");
  }
});
