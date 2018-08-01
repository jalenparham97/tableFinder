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
      saved_seat
        .addClass("reserved")
        .removeClass("available")
        // Getting form input values
        .data("guest-name", $("input").eq(0).val())
        .data("guest-phone", $("input").eq(1).val())
        .data("guest-size", $("input").eq(2).val()); 
        // Fading form out
      $(".form").fadeOut(1000);
      $("body").on("mouseenter", ".floor__plan--container .reserved", (e) => {
        // Clear form inputs
        $("#name").val("");
        $("#phone").val("");
        $("#party").val("");
        // Toggle seat info to appear on mouseenter
        $("section.input__vals").show();
        $("section.input__vals p.guest-name").text(`Name: ${$(e.target).data("guest-name")}`);
        $("section.input__vals p.guest-size").text(`Size Of Party: ${$(e.target).data("guest-size")}`);
      });
      $("body").on("mouseleave", ".floor__plan--container .reserved", (e) => {
        // Toggle seat info to hide on mouseleave
        $("section.input__vals").hide();
      });
    }); 
  });
});

