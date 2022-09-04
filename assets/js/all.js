"use strict";

$(".menu-hamburger-open").click(function () {
  $(".menu-hamburger-open").hide();
  $(".menu-hamburger-close").show();
});
$(".menu-hamburger-close").click(function () {
  $(".menu-hamburger-close").hide();
  $(".menu-hamburger-open").show();
});
$(".menu-hamburger-open,.menu-hamburger-close").click(function () {
  $(".mobile-menu").toggleClass("active"); //動態載入class如何使用??用toggleClass可以動,用show不能動??
  //注意要寫active而非.active
});
//# sourceMappingURL=all.js.map
