$(document).ready(function () {
  $("a.link").hover(function() {
      $(this).css("background-color", "white");
      $(this).css("color", "black");
    }, function() {
      $(this).css("background-color", "black");
      $(this).css("color", "white");
    }
  );
});
