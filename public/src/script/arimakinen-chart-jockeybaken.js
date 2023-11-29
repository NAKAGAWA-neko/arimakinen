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
          title: function () {
            return "";
          },
          label: function () {
            return "";
          },

          afterBody: function (context) {
            if (context[0].label === "池添謙一") {
              return "ブラストワンピース(2018)\nオルフェーヴル(13,11)\nドリームジャーニー(09)";
            } else if (context[0].label === "武豊") {
              return "キタサンブラック(2017)\nディープインパクト(2006)\nオグリキャップ(1990)";
            } else if (context[0].label === "田原成貴") {
              return "マヤノトップガン(1995)\nトウカイテイオー(93)\nリードホーユー(83)";
            } else if (context[0].label === "O.ペリエ") {
              return "ゼンノロブロイ(2004)\nシンボリクリスエス\n(03、2002)";
            } else if (context[0].label === "岡部幸雄") {
              return "オグリキャップ(1988)\nシンボリルドルフ\n(85、84)";
            } else if (context[0].label === "C.ルメール") {
              return "イクイノックス(2022)\nサトノダイヤモンド(16)\nハーツクライ(05)";
            } else if (context[0].label === "野平祐二") {
              return "スピードシンボリ(1970)\nスピードシンボリ(69)";
            } else if (context[0].label === "的場均") {
              return "グラスワンダー(1999、98)";
            } else if (context[0].label === "大崎昭一") {
              return "グリーングラス(1979)\nカブトシロー(67)";
            } else if (context[0].label === "加賀武見") {
              return "カネミノブ(1978)\nイシノアラシ(75)";
            } else if (context[0].label === "保田隆芳") {
              return "コレヒデ(1966)\nハクチカラ(57)";
            } else if (context[0].label === "高松三太") {
              return "ホマレボシ(1961)\nスターロツチ(60)";
            } else if (context[0].label === "蛯名正義") {
              return "マツリダゴッホ(2007)\nマンハッタンカフェ(01)";
            } else if (context[0].label === "増沢末夫") {
              return "ダイナガリバー(1986)\nイシノヒカル(72)";
            } else {
              return "";
            }
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

let arimaChartJockey1 = null;
let arimaChartJockey2 = null;
let arimaChartJockey3 = null;

let arimaChartCyakujyun1 = null;
let arimaChartCyakujyun2 = null;
let arimaChartCyakujyun3 = null;
let arimaChartWaku = null;

// チャートの設定
const chartConfigs = {
  arimaChartJockey1: arimaChartJockey1Config,
  arimaChartJockey2: arimaChartJockey2Config,
  arimaChartJockey3: arimaChartJockey3Config,

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
