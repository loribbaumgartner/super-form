$(function() {

  var $form = $('.weird-form');

  var validateForm = function() {
    var actualValue = $('input[name="favorite-number"]').val();
    var selectedAmphibian = $('#amphibian :selected').val();

    if (actualValue === 5 && isFrogs) {
      console.log('IS VALID');
    } else {
      console.log("BOOOOOOOOOOOOOOO");
    }
  };

  $form.on('submit', function(event) {
    event.preventDefault();
    validateForm();
  });


});
