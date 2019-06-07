//Attach handlers until DOM is fully loaded.
console.log("Reading");
$(function () {
    //Devour button
    $(".devourBurger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devouredIt = {
            devoured: 1
        };


        //PUT to update table of burgers
        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: devouredIt
        }).then(function () {
            location.reload();
        });//end AJAX PUT
    }); //end .devourBurger
    //Submit new burger
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };

        //POST request to add burger
        $.ajax("/api/burgers", {
            type: "POST", 
            data: newBurger
        }).then(function(){
            console.log("New Burger Added");
            location.reload();
        })


    });//End create new burger

});//End main 