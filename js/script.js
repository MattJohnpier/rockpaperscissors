// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
    var userPick = $("input").val();
    var randomNumber = Math.random();
    var computerChoice;
    
    $("#userChoice").text(userPick);

    
    if (randomNumber < .333){
        computerChoice = "rock";
    } else if( (randomNumber > .333) && (randomNumber < .666) ){
        computerChoice = "paper";
    } else if (randomNumber > .666){
        computerChoice = "scissors";
    }
    
    if ((userPick === "scissors" && computerChoice === "paper")    || 
        (userPick === "rock"     && computerChoice === "scissors") || 
        (userPick === "paper"    && computerChoice === "rock")){
            
            $("#result").html("You Win!"); 
    }else if ((userPick === "paper"    && computerChoice === "scissors") || 
              (userPick === "scissors" && computerChoice === "rock")     || 
              (userPick === "rock"     && computerChoice === "scissors")){
                  $("#result").html("Computer Wins!");
                  
    }else if ((userPick === "scissors" && computerChoice === "scissors")  || 
             (userPick === "rock"     && computerChoice === "rock")      || 
             (userPick === "paper"    && computerChoice === "paper")){
                  $("#result").html("It's a Tie!");
    
    }else {
        $("#result").html("...what?");
    }
             
    $("#computerChoice").text(computerChoice);
    $("#input").val("");

});

var winner = "";