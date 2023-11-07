$(document).ready(function () {
  // アコーディオンの三角形とタイトルをクリックした時の動作
  $(".accordion-icon, .arima-times").click(function () {
    // このアコーディオンのコンテンツをトグル表示
    $(this).closest(".arima-accordion").find(".accordion-content").slideToggle(200);

    // クリックされたアコーディオンのアイコンのクラスを切り替える
    $(this).closest(".arima-accordion").find(".accordion-icon").toggleClass("active");

    // イベントの伝播を防ぐ
    event.stopPropagation();
  });

  // .accordion-toggle自体にクリックイベントを割り当てず、.accordion-iconと.arima-timesのみにイベントを設定
});
