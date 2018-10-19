$(document).ready(function() {
  $("#blanks form").submit(function() {
    event.preventDefault();
    var name = $("input#name").val();
    var type = $("#type").val();
    var bigorsmall = $("#bigorsmall").val();
    var application = $("#application").val();
    var security = $("#security").val();
    var ms = $("#ms").val();
    if (name) {
      $(".name").text(name);
      $(".suggestion").show();
      if (type == 1) {
        $(".result").text("we suggest CSS/Design path to you.")
      } else if (bigorsmall == 1) {
        $(".result").text("we suggest Ruby/Rails path to you.")
      } else if ((ms == 0) && (security == 0) && (application == 0)) {
        $(".result").text("we suggest Java/Android, PHP/Drupal or C#/.NET path to you.")
      } else if ((application == 0) && (security == 0)) {
        $(".result").text("we suggest PHP/Drupal or Java/Android path to you.")
      } else if ((ms == 0) && (security == 0)) {
        $(".result").text("we suggest PHP/Drupal or C#/.NET path to you.")
      } else if ((ms == 0) && (application == 0)) {
        $(".result").text("we suggest Java/Android or C#/.NET path to you.")
      } else if (application == 0) {
        $(".result").text("we suggest Java/Android path to you.")
      } else if (security == 0){
        $(".result").text("we suggest PHP/Drupal path to you.")
      } else if (ms == 0){
        $(".result").text("we suggest C#/.NET path to you.")
      } else if (ms == 1){
        $(".result").text("are you sure that you like web developing at all?")
      }
    } else {
      alert("Please enter your name");
    }
  });
});
