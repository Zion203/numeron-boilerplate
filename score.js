// Iteration 5: Store the player score and display it on the game over screen
a=window.localStorage.getItem("score")
var score1=document.getElementById("score-box")
score1.textContent=`Score : ${a}`
