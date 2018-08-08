
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameFirstInput = $("input#name-first").val();
    var nameLastInput = $("input#name-last").val();

    $(".name-first").append(nameFirstInput);
    $(".name-last").append(nameLastInput);

    $("#letter").show();

    event.preventDefault();
  });
});
