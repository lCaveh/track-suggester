$(document).ready(function() {
  $("#blanks form").submit(function() {
    event.preventDefault();
    var name = $("input#name").val();
    var type = $("#type").val();


  });
});
