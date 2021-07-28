$(document).ready(function () {
  // Highlight the link when the mouse hovers on
  $("a.navbar_large").hover(function() {
      $(this).css("background-color", "white");
      $(this).css("color", "black");
    },
    // Remove highlight when the mouse moves away
    function() {
      $(this).css("background-color", "black");
      $(this).css("color", "white");
    }
  );
  // Call the vertical navbar out when clicking on the menu button
  $("a.mobile").click(function (e) {
    e.preventDefault();
      // Click the menu button to toggle the links' class name
    $("a.navbar_large").toggleClass("responsive");
  });
});
