$(document).ready(function() {
           
    // vacation get price buttons
    $(".vacation").on("click", "button", function(e) {
        var vacation = $(this).closest(".vacation"); //keeping it DRY and only querying DOM once
        var amount = vacation.data("price");
        var price = $('<p>From $' + amount + '</p>');
        vacation.append(price);
        $(this).remove();
    });

    // listen for clicks on items which have the onsale-filter class
    $("#filters").on("click", ".onsale-filter", function(){

        // first remove all hightlighte classes

        // then find all vacation and filter using on sale class:
        // add 'highlighted' class to these vacations
       
    });

    //Do the same and listen for clicks on items which have the expiring-filter class



    
})