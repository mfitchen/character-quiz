$(document).ready(function() {
  $("form#the-wire").submit(function(event) {
    var liberal = parseInt($("select#liberal").val());
    var superficial = parseInt($("select#superficial").val());
    var faithful = parseInt($("select#faithful").val());
    var trustworthy = parseInt($("select#trustworthy").val());
    var generous = parseInt($("select#generous").val());
    var honest = parseInt($("select#honest").val());
    var result = (liberal + superficial + faithful + trustworthy + generous + honest);

    if (result === 0) {
      $("#wire-character").text("Marlo");
    } else if (result === 1) {
      $("#wire-character").text("Marlo");
    } else if (result === 2) {
      $("#wire-character").text("Jimmy");
    } else if (result === 3) {
      $("#wire-character").text("Jimmy");
    } else if (result === 4) {
      $("#wire-character").text("Jimmy");
    } else if (result === 5) {
      $("#wire-character").text("Omar");
    } else if (result === 6) {
      $("#wire-character").text("Omar");
    }

    $("#character").show();

    event.preventDefault();

  });
});
