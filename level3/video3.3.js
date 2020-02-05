$(document).ready(function() {
   //Try to fix the BUG where once any button was clicked 
   //all prices appered...
  $("button").on('click', function(e) {
     //locate the closest item with vacation class to the button which was clicked
      
      //define the price node
      var price = $('<p class="price">From $ 199.99</p>');
    
      //append the price to the closest vacation (defined above)
      
      //remove only the button which was clicked
      
      
  });
  
})