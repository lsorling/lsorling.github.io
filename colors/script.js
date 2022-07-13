/*
add jquery for easy dom manipulations
*/
$(document).ready(function(){
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    $("#btnRef").click( function() {
      window.open("https://www.smashingmagazine.com/2016/04/web-developer-guide-color/");
    });

    $("#btnNext").click( function() {
      window.open("theme.html");
    });
});