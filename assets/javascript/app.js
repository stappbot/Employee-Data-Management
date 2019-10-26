$(document).ready(function () {

    //input form variables
    var nameInput = $(".name-input").val().trim();
    var roleInput = $(".role-input").val().trim();
    var dateInput = $(".start-date-input").val().trim();
    var rateInput = $(".rate-input").val().trim();

    //table header variables

    var nameDisplay = $(".name")
    var roleDisplay = $(".role")
    var dateDisplay = $(".start-date")
    var monthsDisplay = $(".months-worked")
    var rateDispay = $(".rate")
    var billedDisplay = $(".total-billed")

    //buttons

    var sumbitButton = $(".btn");

    //functions

    function addToTable() { //add form data to table

    };


    //when submit button is clcked, populate table (needs firebase stuff) and empty form
    submitButton.on("click", function () {
        event.preventDefault();
        addToTable();

    });


});


