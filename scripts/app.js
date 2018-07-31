"use strict";
$(document).ready(() => {
  $("body").on("click", ".floor__plan--container .available, .delete", (e) => {
    let saved_seat = $(e.target);
    $(".table__number").text(`Table Number: ${$(e.target).text()}`);
    $(".form").fadeToggle();
    $("body").on("click", ".form .form__button", (e) => {
        $(saved_seat).addClass("reserved");
        $(saved_seat).removeClass("available");
        $(".form").fadeOut(1000);
    });
  });
});

