
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameFirstInput = $("input#name-first").val();
    var nameLastInput = $("input#name-last").val();

    $(".name-first").text(nameFirstInput);
    $(".name-last").text(nameLastInput);

    $("#letter").show();

    event.preventDefault();
  });
});
