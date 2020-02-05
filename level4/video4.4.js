$(document).ready(function() {
      // vacation get price buttons
      $(".vacation").on("click", "button", function(e) {
         var vacation = $(this).closest(".vacation"); 
         var amount = vacation.data("price");
         var price = $('<p class="price">From $' + amount + '</p>');
         vacation.append(price);  // FIX this line to show the price in the correct spot
         $(this).remove();
     });

//Complete the code to show the comments
  $('.vacation').on('click', '.expand', function(event) {
 

    
  });

})