$(document).ready(function() {
   //EVENT DELEGATION TECHNIQUE
   //Change the code so that only buttons inside the vacation will execure the code
   //and not all buttons in the page 

   $("button").on('click', function(e) {
      var vacation = $(this).closest(".vacation");
      var amount = vacation.data("price");
      var price = $('<p class="price">From $' + amount + '</p>');
      vacation.append(price);
      $(this).remove();
  });


  
})