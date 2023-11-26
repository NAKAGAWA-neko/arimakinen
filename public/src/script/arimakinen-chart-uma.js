// 体重変動 1着
var arimaChartBataiJu1Config = {
  type: "bar",
  data: {
    labels: ["-8", "-6", "-4", "-2", "0", "2", "4", "6", "8", "10", "12", "14", "前計不"],
    datasets: [
      {
        label: "人気馬の頭数",
        data: [1, 0, 2, 0, 3, 4, 6, 2, 0, 2, 2, 0, 2],
        backgroundColor: [
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
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
            return tooltipItems[0].label + "kg";
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
        // title: {
        //   display: true, // タイトルを表示する
        //   text: "人気", // 表示するテキスト
        // },
      },
      y: {
        stacked: true,
        max: 6,
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
var arimaChartBataiJu2Config = {
  type: "bar",
  data: {
    labels: ["-8", "-6", "-4", "-2", "0", "2", "4", "6", "8", "10", "12", "14", "前計不"],
    datasets: [
      {
        label: "人気馬の頭数",
        data: [2, 0, 4, 1, 4, 5, 1, 2, 2, 0, 0, 0, 3],
        backgroundColor: [
          "rgba(0,136,71, 0.7)",
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
            return tooltipItems[0].label + "kg";
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
        // title: {
        //   display: true, // タイトルを表示する
        //   text: "人気", // 表示するテキスト
        // },
      },
      y: {
        stacked: true,
        max: 6,
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
var arimaChartBataiJu3Config = {
  type: "bar",
  data: {
    labels: ["-8", "-6", "-4", "-2", "0", "2", "4", "6", "8", "10", "12", "14", "前計不"],
    datasets: [
      {
        label: "人気馬の頭数",
        data: [0, 1, 2, 3, 3, 2, 2, 3, 2, 1, 2, 1, 2],
        backgroundColor: [
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(0,136,71, 0.7)",
          "rgba(171,151,58, 0.7)",
          "rgba(171,151,58, 0.7)",
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
            return tooltipItems[0].label + "kg";
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
        // title: {
        //   display: true, // タイトルを表示する
        //   text: "人気", // 表示するテキスト
        // },
      },
      y: {
        stacked: true,
        max: 6,
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

let arimaChartBataiJu1 = null;
let arimaChartBataiJu2 = null;
let arimaChartBataiJu3 = null;

// チャートの設定
const chartConfigs = {
  arimaChartBataiJu1: arimaChartBataiJu1Config,
  arimaChartBataiJu2: arimaChartBataiJu2Config,
  arimaChartBataiJu3: arimaChartBataiJu3Config,
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
