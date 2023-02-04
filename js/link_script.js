$(document).ready(function () {
    // Highlight the link when the mouse hovers on
    $("a.link").hover(function() {
        $(this).css("background-color", "white");
        $(this).css("color", "black");
      }, function() {
        $(this).css("background-color", "black");
        $(this).css("color", "white");
      }
    );
  });
