// 1着
var arimaChartCyakujyun1Config = {
  type: "bar",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
    datasets: [
      {
        label: "人気馬の頭数",
        data: [26, 11, 7, 10, 0, 3, 1, 1, 4, 2, 0, 0, 0, 1, 1, 0],
        backgroundColor: [
          "rgba(171,151,58, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
        ],
        hoverOffset: 1,
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
        callbacks: {
          title: function (tooltipItems) {
            // X軸のラベルに「番人気」を追加してタイトルとして設定
            return tooltipItems[0].label + "番人気";
          },
          label: function (context) {
            // データの値に「頭」を追加してラベルとして設定
            return context.raw + "頭";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
        title: {
          display: true, // タイトルを表示する
          text: "人気", // 表示するテキスト
        },
      },
      y: {
        stacked: true,
        max: 30,
      },
    },
    layout: {
      padding: {
        bottom: 0, // 下のパディングを0に設定
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
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
    datasets: [
      {
        label: "頭数",
        data: [14, 8, 14, 4, 8, 4, 4, 2, 1, 2, 2, 1, 2, 1, 0, 0],
        backgroundColor: [
          "rgba(171,151,58, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(171,151,58, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
        ],
        hoverOffset: 1,
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
        callbacks: {
          title: function (tooltipItems) {
            // X軸のラベルに「番人気」を追加してタイトルとして設定
            return tooltipItems[0].label + "番人気";
          },
          label: function (context) {
            // データの値に「頭」を追加してラベルとして設定
            return context.raw + "頭";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
        title: {
          display: true, // タイトルを表示する
          text: "人気", // 表示するテキスト
        },
      },
      y: {
        stacked: true,
        max: 30,
      },
    },
    layout: {
      padding: {
        bottom: 0, // 下のパディングを0に設定
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
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
    datasets: [
      {
        label: "頭数",
        data: [6, 13, 8, 10, 1, 8, 3, 3, 3, 2, 3, 2, 2, 3, 0, 0],
        backgroundColor: [
          "rgba(0,136,71, 0.7)",
          "rgba(171,151,58, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
        ],
        hoverOffset: 5,
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
        callbacks: {
          title: function (tooltipItems) {
            // X軸のラベルに「番人気」を追加してタイトルとして設定
            return tooltipItems[0].label + "番人気";
          },
          label: function (context) {
            // データの値に「頭」を追加してラベルとして設定
            return context.raw + "頭";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
        title: {
          display: true, // タイトルを表示する
          text: "人気", // 表示するテキスト
        },
      },
      y: {
        stacked: true,
        max: 30,
      },
    },
    layout: {
      padding: {
        bottom: 0, // 下のパディングを0に設定
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

// 枠

var arimaChartWakuConfig = {
  type: "bar",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
    datasets: [
      {
        label: "人気馬の頭数",
        data: [7, 8, 9, 11, 13, 5, 6, 8],
        backgroundColor: [
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(171,151,58, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
        ],
        hoverOffset: 1,
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
        callbacks: {
          title: function (tooltipItems) {
            // X軸のラベルに「番人気」を追加してタイトルとして設定
            return tooltipItems[0].label + "枠";
          },
          label: function (context) {
            // データの値に「頭」を追加してラベルとして設定
            return context.raw + "回";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },

    responsive: true,
    maintainAspectRatio: false,
  },
};

// -------------

let arimaChartCyakujyun1 = null;
let arimaChartCyakujyun2 = null;
let arimaChartCyakujyun3 = null;
let arimaChartWaku = null;

// チャートの設定
const chartConfigs = {
  arimaChartCyakujyun1: arimaChartCyakujyun1Config,
  arimaChartCyakujyun2: arimaChartCyakujyun2Config,
  arimaChartCyakujyun3: arimaChartCyakujyun3Config,
  arimaChartWaku: arimaChartWakuConfig,
};

// チャートインスタンスを格納するオブジェクト
const charts = {};

// チャートを生成する関数
function generateChart(config, canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    throw new Error("Cannot find a canvas element with id ".concat(canvasId));
  }
  return new Chart(canvas, config);
}

// チャートの初期化
Object.keys(chartConfigs).forEach((key) => {
  charts[key] = generateChart(chartConfigs[key], key);
});

// ウィンドウサイズの変更時にチャートを再描画
window.addEventListener("resize", function () {
  Object.keys(charts).forEach((key) => {
    if (charts[key]) {
      charts[key].destroy();
      charts[key] = generateChart(chartConfigs[key], key);
    }
  });
});
