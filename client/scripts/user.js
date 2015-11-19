$(document).ready(function(){
    console.log("Hey it loads!");

    $.ajax({
        type: "GET",
        url: "/user",
        success: function(data){
            console.log(data);
            $("#welcome").text("Welcome, " +  data.username);
            $("#userInfo").append("<p>First Name: " + data.firstName + "</p>" +
                "<p>Last Name: " + data.lastName + "</p>" +
                "<p>Email: " + data.email + "</p>");
        }
    });
});