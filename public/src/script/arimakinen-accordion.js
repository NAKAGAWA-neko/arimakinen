$(document).ready(function () {
  // アコーディオンの三角形とタイトルをクリックした時の動作
  $(".arimakinen-accordion-icon, .arimakinen-times").click(function () {
    // このアコーディオンのコンテンツをトグル表示
    $(this).closest(".arimakinen-accordion").find(".arimakinen-accordion-content").slideToggle(200);

    // クリックされたアコーディオンのアイコンのクラスを切り替える
    $(this)
      .closest(".arimakinen-accordion")
      .find(".arimakinen-accordion-icon")
      .toggleClass("active");

    // イベントの伝播を防ぐ
    event.stopPropagation();
  });

  // .arimakinen-accordion-toggle自体にクリックイベントを割り当てず、.arimakinen-accordion-iconと.arima-timesのみにイベントを設定
});
