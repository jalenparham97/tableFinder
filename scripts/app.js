"use strict";

$(document).ready(() => {
  // Declare Saved Seat
  let saved_seat;
  // Click event for seat and X buttons
  $("body").on("click", ".floor__plan--container .available, .form .delete", (e) => {
    saved_seat = $(e.target);
    $(".table__number").text(`Table Number: ${saved_seat.text()}`);
    $(".form").fadeToggle(1000);
    // Click event for save button
    $("body").on("click", ".form .form__button", () => {
      saved_seat.addClass("reserved");
      saved_seat.removeClass("available");
      $(".form").fadeOut(1000);
    });
  });
});

