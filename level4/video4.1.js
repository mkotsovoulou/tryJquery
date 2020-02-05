$(document).ready(function() {
  //modify the code so that when we press the button the second time 
  //it hides the flight details

   $('.confirmation').on('click', 'button', function () {
       $(this).closest(".confirmation").find(".ticket").slideDown();
   });

   
})