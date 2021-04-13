// connecting jQuery
$(document).ready(function(){
    // checking connection in the browser 
    // console.log("jQuery is working")

    // here we use jQuery to select the button via the ID with #getStarted
    $("#getStarted").on("click", function(){
        console.log("you've clicked the button")
    })
    
})