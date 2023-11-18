$(document).ready(function () {
  // 既存のアコーディオンの動作設定
  $(".arimakinen-accordion-icon, .arimakinen-times").click(function (event) {
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

  // 最初のアコーディオン要素を開く
  $(".arimakinen-accordion:first .arimakinen-accordion-content").show();
  $(".arimakinen-accordion:first .arimakinen-accordion-icon").addClass("active");
});
