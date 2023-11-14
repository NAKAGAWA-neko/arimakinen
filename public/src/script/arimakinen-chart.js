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

// 騎手優勝ランキング1
var arimaChartJockey1Config = {
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
        ],
        // borderColor: ["rgba(171,151,58, 1)"],
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
          title: function (tooltipItems) {
            // X軸のラベルに「番人気」を追加してタイトルとして設定
            return tooltipItems[0].label + "騎手";
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
        ticks: {
          stepSize: 1, // X軸の目盛りを整数のみにする
        },
      },
      y: {
        grid: {
          display: false, // 横軸のグリッド（縦線たち）を非表示
        },
        ticks: {
          color: "#1e2428",
          font: {
            size: 14, // フォントサイズを14に設定
            weight: "bold", // フォントを太字に設定
          },
        },
      },
    },
  },
};
// 騎手優勝ランキング2
var arimaChartJockey2Config = {
  type: "bar",
  data: {
    labels: [
      "武豊",
      "C.ルメール",
      "野平好男",
      "丸目敏栄",
      "河内洋",
      "横山典弘",
      "佐藤哲三",
      "横山富雄",
      "増沢末夫",
      "加賀武見",
      "加藤和宏",
      "野平祐二",
    ],
    datasets: [
      {
        label: "",
        data: [8, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2],
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
        ],
        // borderColor: ["rgba(171,151,58, 1)"],
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
          title: function (tooltipItems) {
            // X軸のラベルに「番人気」を追加してタイトルとして設定
            return tooltipItems[0].label + "騎手";
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
        ticks: {
          stepSize: 1, // X軸の目盛りを整数のみにする
        },
      },
      y: {
        grid: {
          display: false, // 横軸のグリッド（縦線たち）を非表示
        },
        ticks: {
          color: "#1e2428",
          font: {
            size: 14, // フォントサイズを14に設定
            weight: "bold", // フォントを太字に設定
          },
        },
      },
    },
  },
};
// 騎手優勝ランキング3
var arimaChartJockey3Config = {
  type: "bar",
  data: {
    labels: ["松永昌博", "柴田政人", "大崎昭一", "加賀武見", "古山良司"],
    datasets: [
      {
        label: "",
        data: [3, 3, 3, 3, 3],
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
        ],
        // borderColor: ["rgba(171,151,58, 1)"],
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
          title: function (tooltipItems) {
            // X軸のラベルに「番人気」を追加してタイトルとして設定
            return tooltipItems[0].label + "騎手";
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
        ticks: {
          stepSize: 1, // X軸の目盛りを整数のみにする
        },
      },
      y: {
        grid: {
          display: false, // 横軸のグリッド（縦線たち）を非表示
        },
        ticks: {
          color: "#1e2428",
          font: {
            size: 14, // フォントサイズを14に設定
            weight: "bold", // フォントを太字に設定
          },
        },
      },
    },
  },
};

let arimaChartCyakujyun1 = null;
let arimaChartCyakujyun2 = null;
let arimaChartCyakujyun3 = null;
let arimaChartJockey1 = null;
let arimaChartJockey2 = null;
let arimaChartJockey3 = null;

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
arimaChartJockey1 = generateChart(arimaChartJockey1Config, "arimaChartJockey1");
arimaChartJockey2 = generateChart(arimaChartJockey2Config, "arimaChartJockey2");
arimaChartJockey3 = generateChart(arimaChartJockey3Config, "arimaChartJockey3");
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
  if (arimaChartJockey1) {
    arimaChartJockey1.destroy();
    arimaChartJockey1 = generateChart(arimaChartJockey1Config, "arimaChartJockey1");
  }
  if (arimaChartJockey2) {
    arimaChartJockey2.destroy();
    arimaChartJockey2 = generateChart(arimaChartJockey2Config, "arimaChartJockey2");
  }
  if (arimaChartJockey1) {
    arimaChartJockey3.destroy();
    arimaChartJockey3 = generateChart(arimaChartJockey3Config, "arimaChartJockey3");
  }
});
