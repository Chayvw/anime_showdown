// connecting jQuery
$(document).ready(function(){
    // const showFighters = document.getElementById("#selectFighter");
    // checking connection in the browser 
    // console.log("jQuery is working")

// functions that should run
   function showFighter(){
       $(".selection").attr("style" , "display:block")
    // $("#selectFighter").attr("style", "display:block");

   } 

    // here we use jQuery to select the button via the ID with #getStarted with an on click event listener 
    $("#getStarted").on("click", function(){
        showFighter()
        
        // function showFighter(){
        //   $("#selectFighter").style(display, "block");

        // } document.getElementById("#selectFighter").style.display = block
        
        console.log("displayed worked")
        // }
        // showFighter()
    })

    

   
    
})