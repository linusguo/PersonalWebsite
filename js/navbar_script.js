$(document).ready(function () {
  $("a.navbar").hover(function() {
      $(this).css("background-color", "white");
      $(this).css("color", "black");
    }, function() {
      $(this).css("background-color", "black");
      $(this).css("color", "white");
    }
  );
});
