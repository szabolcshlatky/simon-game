"use strict";
/* const $ = (query) => document.querySelector(query); */
/* This code if the script lines are more above in the HTML.
$(document).ready(function() {
 ...
});
*/
// STEP-BY-STEP UNTIL 37.
//3. At the top of the simon.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];
//5. At the top of the simon.js file, create a new empty array called gamePattern.
var gamePattern = [];
//12. At the top of the simon.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;
//22. Create a new variable called level and start at level 0.
var level = 0;
//21. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function () {
    if (!started) {
        //23. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});
//10. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function () {
    //11. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");
    //13. Add the contents of the variable userChosenColour created in step 11 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
    //14. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
    playSound(userChosenColour);
    animatePress(userChosenColour);
    //27. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length - 1);
});
//26. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {
    //28. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        //29. If the user got the most recent answer right in step 28, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {
            //30. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("wrong");
        //32. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
        playSound("wrong");
        //33. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        //34. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("#level-title").text("Game Over, Press Any Key to Restart");
        //36. Call startOver() if the user gets the sequence wrong.
        startOver();
    }
}
//1. Inside simon.js create a new function called nextSequence()
function nextSequence() {
    //31. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];
    //24. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;
    //25. Inside nextSequence(), update the h1 with this change in the value of level.
    $("#level-title").text("Level " + level);
    //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);
    //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];
    //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
    //7. Use jQuery to select the button with the same id as the randomChosenColour
    //8. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 4.
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    //9. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 4.
    /*var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();*/
    //17. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    playSound(randomChosenColour);
}
//15. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
    //16. Take the code we used to play sound in the nextSequence() function and add it to playSound().
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
//18. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {
    //19. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#" + currentColor).addClass("pressed");
    //20. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
//35. Create a new function called startOver().
function startOver() {
    //37. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLHlEQUF5RDtBQUV6RDs7OztFQUlFO0FBRUYseUJBQXlCO0FBRXpCLGdKQUFnSjtBQUNoSixJQUFJLGFBQWEsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRXZELGtGQUFrRjtBQUNsRixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFFckIsaUdBQWlHO0FBQ2pHLElBQUksa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0FBRTVCLG1JQUFtSTtBQUNuSSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFFcEIsOERBQThEO0FBQzlELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUVkLDJIQUEySDtBQUMzSCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFFWixxSEFBcUg7UUFDckgsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDekMsWUFBWSxFQUFFLENBQUM7UUFDZixPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCw4RkFBOEY7QUFDOUYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUVkLHVIQUF1SDtJQUN2SCxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsb0hBQW9IO0lBQ3BILGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTFDLGtDQUFrQztJQUVsQyxtSUFBbUk7SUFDbkksU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFNUIs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