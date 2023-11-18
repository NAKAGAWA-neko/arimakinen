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

let arimaChartCyakujyun1 = null;
let arimaChartCyakujyun2 = null;
let arimaChartCyakujyun3 = null;

let arimaChartBataiJu1 = null;
let arimaChartBataiJu2 = null;
let arimaChartBataiJu3 = null;

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
function initializeChart(config, canvasId) {
  const canvasElement = document.getElementById(canvasId);
  if (canvasElement) {
    return generateChart(config, canvasId);
  }
  return null;
}
arimaChartCyakujyun1 = initializeChart(arimaChartCyakujyun1Config, "arimaChartCyakujyun1");
arimaChartCyakujyun2 = initializeChart(arimaChartCyakujyun2Config, "arimaChartCyakujyun2");
arimaChartCyakujyun3 = initializeChart(arimaChartCyakujyun3Config, "arimaChartCyakujyun3");

arimaChartBataiJu1 = initializeChart(arimaChartBataiJu1Config, "arimaChartBataiJu1");
arimaChartBataiJu2 = initializeChart(arimaChartBataiJu2Config, "arimaChartBataiJu2");
arimaChartBataiJu3 = initializeChart(arimaChartBataiJu3Config, "arimaChartBataiJu3");

// ウィンドウサイズの変更時にチャートを再描画
window.addEventListener("resize", function () {
  if (arimaChartCyakujyun1) {
    arimaChartCyakujyun1.destroy();
    arimaChartCyakujyun1 = initializeChart(arimaChartCyakujyun1Config, "arimaChartCyakujyun1");
  }
  if (arimaChartCyakujyun2) {
    arimaChartCyakujyun2.destroy();
    arimaChartCyakujyun2 = initializeChart(arimaChartCyakujyun2Config, "arimaChartCyakujyun2");
  }
  if (arimaChartCyakujyun3) {
    arimaChartCyakujyun3.destroy();
    arimaChartCyakujyun3 = initializeChart(arimaChartCyakujyun3Config, "arimaChartCyakujyun3");
  }

  if (arimaChartBataiJu1) {
    arimaChartBataiJu1.destroy();
    arimaChartBataiJu1 = initializeChart(arimaChartBataiJu1Config, "arimaChartBataiJu1");
  }
  if (arimaChartBataiJu2) {
    arimaChartBataiJu2.destroy();
    arimaChartBataiJu2 = initializeChart(arimaChartBataiJu2Config, "arimaChartBataiJu2");
  }
  if (arimaChartBataiJu3) {
    arimaChartBataiJu3.destroy();
    arimaChartBataiJu3 = initializeChart(arimaChartBataiJu3Config, "arimaChartBataiJu3");
  }
});
