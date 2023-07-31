$(document).ready(function () {
  //прикрепляем клик по заголовкам acc-head
  $("#accordeon .acc-head").on("click", f_acc);
  $("#accordeon-menu-1 .accm1-head").on("click", f_accm1);
  $("#accordeon-menu-2 .accm2-head").on("click", f_accm2);
  $("#accordeon-menu-3 .accm3-head").on("click", f_accm3);
});

function f_acc() {
  //скрываем все кроме того, что должны открыть
  $("#accordeon .acc-body").not($(this).next()).slideUp(100);
  // открываем или скрываем блок под заголовоком, по которому кликнули
  $(this).next().slideToggle(100);
  $(this).toggleClass("add-bg");
}

function f_accm1() {
  $("#accordeon-menu-1 .accm1-body").not($(this).next()).slideUp(100);
  $(this).next().slideToggle(100);
}
function f_accm2() {
  $("#accordeon-menu-2 .accm2-body").not($(this).next()).slideUp(100);
  $(this).next().slideToggle(100);
}
function f_accm3() {
  $("#accordeon-menu-3 .accm3-body").not($(this).next()).slideUp(100);
  $(this).next().slideToggle(100);
}
