function showHide() {
  $(this).closest(".confirmation").find(".ticket").slideToggle();
}

$(document).ready(function() {
  //Refactor the code to call the function showHide when the button is clicked
  $('.confirmation').on('click', 'button', function () {
    $(this).closest(".confirmation").find(".ticket").slideDown();
   });

   
   //Add a mousenter event on the h3 of the confirmation class to show the ticket
   // and a mouseleave even to hide the ticket
   
   
   //If any more functions are required create them

});