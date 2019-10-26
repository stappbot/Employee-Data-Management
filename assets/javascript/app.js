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
        nameDisplay.append($("<td>").val(nameInput));
        roleDisplay.val(roleInput);
        dateDisplay.val(dateInput);
        monthsDisplay.val(12);
        rateDisplay.val(rateInput);
        billedDisplay.val(rateInput * monthsDisplay);
    };

    function emptyDisplay() { //empty form
        nameDisplay.empty();
        roleDisplay.empty();
        dateDisplay.empty();
        monthsDisplay.empty();
        rateDisplay.empty();
        billedDisplay.empty();
    }

    //when submit button is clcked, populate table (needs firebase stuff) and empty form
    submitButton.on("click", function () {
        event.preventDefault();
        addToTable();
        emptyDisplay();
    });


});


