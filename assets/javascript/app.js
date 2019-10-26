$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyA7W5R5wt-lIy9HZokVKM3rRNV6SdjPetM",
        authDomain: "timesheet-manager-b9e4a.firebaseapp.com",
        databaseURL: "https://timesheet-manager-b9e4a.firebaseio.com",
        projectId: "timesheet-manager-b9e4a",
        storageBucket: "timesheet-manager-b9e4a.appspot.com",
        messagingSenderId: "195420129592",
        appId: "1:195420129592:web:f921eba976f0b8665b59cd"
    }

    firebase.initializeApp(config);

    var database = firebase.database();

    var employee = {
        name: "",
        role: "",
        startDate: "",
        rate: "",
    }

    //input form variables
    employee.name = $(".name-input").val().trim();
    employee.role = $(".role-input").val().trim();
    employee.startDate = $(".start-date-input").val().trim();
    employee.rate = $(".rate-input").val().trim();


    database.ref().push({
        name: employee.name,
        role: employee.role,
        startDate: employee.startDate,
        rate: employee.rate,
    })
    //table header variables

    var nameDisplay = $(".name")
    var roleDisplay = $(".role")
    var dateDisplay = $(".start-date")
    var monthsDisplay = $(".months-worked")
    var rateDispay = $(".rate")
    var billedDisplay = $(".total-billed")

    //buttons

    var submitButton = $("button");

    //functions

    function addToTable() { //add form data to table
        database.ref().once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                console.log(childData)
            });
        });
    };


    //when submit button is clcked, populate table (needs firebase stuff) and empty form
    submitButton.on("click", function () {
        event.preventDefault();
        addToTable();

    });


});


