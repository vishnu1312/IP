
var buttonColours = ["red" , "green" , "blue" , "Yellow"];

var gamePattern = [];

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChoosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChoosenColour);

    $("#" + randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio(randomChoosenColour + ".mp3")
    audio.play();

    $(".btn").click( function() {
     userChoosenColour = 
    });


}

