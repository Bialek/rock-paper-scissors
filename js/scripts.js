var newGameBtn = document.getElementById("newGameButton");
var pickRock = document.getElementById("playerPickRock");
var pickPaper = document.getElementById("playerPickPaper");
var pickScissors = document.getElementById("playerPickScissors");

newGameBtn.addEventListener("click", newGame);
pickRock.addEventListener("click", function() { playerPick("rock") } );
pickPaper.addEventListener("click", function() { playerPick("paper") } );
pickScissors.addEventListener("click", function() { playerPick("scissors") } );