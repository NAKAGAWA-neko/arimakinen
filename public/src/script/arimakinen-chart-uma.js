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

// 種牡馬着順
var arimaChartStallion1Config = {
  type: "bar",
  data: {
    labels: [
      ["サンデーサイレンス", "(USA)"],
      ["ブライアンズタイム", "(USA)"],
      "ステイゴールド",
      ["Silver Hawk", "(USA)"],
      "ディープインパクト",
      ["Kris S.", "(USA)"],
      ["ダンシングキヤツプ", "(USA)"],
    ],
    datasets: [
      {
        label: "",
        data: [5, 3, 3, 2, 2, 2, 2],
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
            // データの値に「頭」を追加してラベルとして設定
            return "";
          },

          afterBody: function (context) {
            if (context[0].label === "サンデーサイレンス,(USA)") {
              return "マツリダゴッホ(2007)\nディープインパクト(2006)\nハーツクライ(2005)\nゼンノロブロイ(2004)\nマンハッタンカフェ(2001)";
            } else if (context[0].label === "ブライアンズタイム,(USA)") {
              return "シルクジャスティス(1997)\nマヤノトップガン(1995)\nナリタブライアン(1994)";
            } else if (context[0].label === "ステイゴールド") {
              return "オルフェーヴル(2013)\nゴールドシップ(2012)";
            } else if (context[0].label === "Silver Hawk,(USA)") {
              return "グラスワンダー(1999,1998)";
            } else if (context[0].label === "ディープインパクト") {
              return "サトノダイヤモンド(2016)\nジェンティルドンナ(2014)";
            } else if (context[0].label === "Kris S.,(USA)") {
              return "シンボリクリスエス(2003,2002)";
            } else if (context[0].label === "ダンシングキヤツプ,(USA)") {
              return "オグリキャップ(1990,1988)";
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
    responsive: true,
    maintainAspectRatio: false,
  },
};

var arimaChartStallion2Config = {
  type: "bar",
  data: {
    labels: [
      ["サンデーサイレンス", "(USA)"],
      ["スペシャルウィーク"],
      ["モガミ", "(FR)"],
      ["Pleasant Tap", "(USA)"],
      ["キングカメハメハ"],
    ],
    datasets: [
      {
        label: "",
        data: [5, 2, 2, 2, 2],
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
            // データの値に「頭」を追加してラベルとして設定
            return "";
          },

          afterBody: function (context) {
            if (context[0].label === "サンデーサイレンス,(USA)") {
              return "マーベラスサンデー(1996、1997)\nスペシャルウィーク(1999)\nリンカーン(2003)\nディープインパクト(2005)";
            } else if (context[0].label === "スペシャルウィーク") {
              return "ブエナビスタ(2009)\nブエナビスタ(2010)";
            } else if (context[0].label === "モガミ,(FR)") {
              return "ユーワジェームス(1987)\nレガシーワールド(1992)";
            } else if (context[0].label === "Pleasant Tap,(USA)") {
              return "タップダンスシチー(2002、2004)";
            } else if (context[0].label === "キングカメハメハ") {
              return "トゥザワールド(2014)\nレイデオロ(2018)";
            } else {
              return "";
            }
          },
        },
      },
    },
    scales: {
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
    responsive: true,
    maintainAspectRatio: false,
  },
};

var arimaChartStallion3Config = {
  type: "bar",
  data: {
    labels: [
      ["ナイスダンサー", "(CAN)"],
      "キングカメハメハ",
      "ディープインパクト",
      "ハーツクライ",
      "ステイゴールド",
      ["トニービン", "(IRE)"],
    ],
    datasets: [
      {
        label: "",
        data: [9, 3, 2, 2, 2, 2, 2],
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
            // データの値に「頭」を追加してラベルとして設定
            return "";
          },

          afterBody: function (context) {
            if (context[0].label === "サンデーサイレンス,(USA)") {
              return "ステイゴールド(1998)\nトゥザヴィクトリー(2001)\nコイントス(2002)\nゼンノロブロイ(2003)\nリンカーン(2005)\nダイワメジャー(2006、2007)\nエアシェイディ(2008、2009)";
            } else if (context[0].label === "ナイスダンサー,(CAN)") {
              return "ナイスネイチャ(1991、1992、1993)";
            } else if (context[0].label === "キングカメハメハ") {
              return "トゥザグローリー(2011)\nルーラーシップ(2012)";
            } else if (context[0].label === "ディープインパクト") {
              return "ワールドプレミア(2019)\nフィエールマン(2020)";
            } else if (context[0].label === "ハーツクライ") {
              return "シュヴァルグラン(2017、2018)";
            } else if (context[0].label === "ステイゴールド") {
              return "ゴールドシップ(2013、2014)";
            } else if (context[0].label === "トニービン,(IRE)") {
              return "サクラチトセオー(1995)\nエアグルーヴ(1997)";
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
    responsive: true,
    maintainAspectRatio: false,
  },
};

// 種牡馬出走トータル
var arimaChartStallionTotal1Config = {
  type: "bar",
  data: {
    labels: [
      "サンデーサイレンス",
      "ディープインパクト",
      "キングカメハメハ",
      "ステイゴールド",
      "ハーツクライ",
      "ノーザンテ丨スト",
      "ダンスインザダーク",
      "ブライアンズタイム",
      "トニービン",
      "リアルシヤダイ",
    ].map((v) => v.replace("ー", "丨").split("")),
    datasets: [
      {
        label: "人気馬の頭数",
        data: [56, 30, 23, 19, 17, 13, 13, 12, 12, 11],
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
          title: function () {
            return "";
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
        ticks: {
          color: "#1e2428",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        stacked: true,
        max: 60,
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

// 馬
let arimaChartBataiJu1 = null;
let arimaChartBataiJu2 = null;
let arimaChartBataiJu3 = null;
// 種牡馬
let arimaChartStallion1 = null;
let arimaChartStallion2 = null;
let arimaChartStallion3 = null;
let arimaChartStallionTotal1 = null;

// チャートの設定
const chartConfigs = {
  arimaChartBataiJu1: arimaChartBataiJu1Config,
  arimaChartBataiJu2: arimaChartBataiJu2Config,
  arimaChartBataiJu3: arimaChartBataiJu3Config,

  arimaChartStallion1: arimaChartStallion1Config,
  arimaChartStallion2: arimaChartStallion2Config,
  arimaChartStallion3: arimaChartStallion3Config,

  arimaChartStallionTotal1: arimaChartStallionTotal1Config,
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
