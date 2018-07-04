var newGameBtn = document.getElementById("newGameButton"),
	pickRock = document.getElementById("playerPickRock"),
	pickPaper = document.getElementById("playerPickPaper"),
	pickScissors = document.getElementById("playerPickScissors"),
	pickLizard = document.getElementById("playerPickLizard"),
	pickSpock = document.getElementById("playerPickSpock"),
	newGameElem = document.getElementById('newGameElement'),
    pickElem = document.getElementById('playerPickElement'),
    resultsElem = document.getElementById('resultsTableElement'),
    playerPointsElem = document.getElementById("playerPoints"),
	playerNameElem = document.getElementById("playerName"),
	computerPointsElem = document.getElementById("computerPoints"),
	playerPickElem = document.getElementById('playerPick'),
    computerPickElem = document.getElementById('computerPick'),
    playerResultElem = document.getElementById('playerResult'),
    computerResultElem = document.getElementById('computerResult'),
 	gameState = "notStarted",
	player = {
		name: "",
		score: 0
	},
	computer = {
		score:0
	};

newGameBtn.addEventListener("click", newGame);
pickRock.addEventListener("click", function() { playerPick("rock"); } );
pickPaper.addEventListener("click", function() { playerPick("paper"); } );
pickScissors.addEventListener("click", function() { playerPick("scissors"); } );
pickLizard.addEventListener("click", function() { playerPick("lizard"); } );
pickSpock.addEventListener("click", function() { playerPick("spock"); } );

function setGameElements() {
	switch(gameState) {
		case "started":
			newGameElem.style.display = "none";
			pickElem.style.display = "block";
			resultsElem.style.display = "block";
		  break;
		case "ended":
			newGameBtn.innerText = "Play again";
		case "notStarted":
		default:
			newGameElem.style.display = "block";
			pickElem.style.display = "none";
			resultsElem.style.display = "none";
	}
}

setGameElements();


function newGame() {
	player.name = prompt("Please enter your name");
	if (player.name) {
		player.score = computer.score = 0;
		gameState = "started";
		setGameElements();
		playerNameElem.innerHTML = player.name;
		playerPointsElem.innerHTML = player.score;
		computerPointsElem.innerHTML = computer.score;
	}
}	



function getComputerPick() {
	var possiblePicks = ["rock", "paper", "scissors", "lizard", "spock"];
	return possiblePicks[Math.floor(Math.random()*5)];
}	

function playerPick(playerPick) {
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = "";

	var winnerIs = "player";

	if (playerPick == computerPick) {
		winnerIs = "noone";
	} else if (
		(computerPick == "rock" && playerPick == "scissors") ||
    	(computerPick == "scissors" && playerPick == "paper") || 
		(computerPick == "paper" && playerPick == "rock") ||
		(computerPick == "rock" && playerPick == "lizard") ||
		(computerPick == "lizard" && playerPick == "spock") ||
		(computerPick == "spock" && playerPick == "rock") ||
		(computerPick == "scissors" && playerPick == "lizar") ||
		(computerPick == "lizard" && playerPick == "paper") ||
		(computerPick == "paper" && playerPick == "spock") ||
		(computerPick == "spock" && playerPick == "scissors") ) {

		winnerIs = "computer";	
	}

	if (winnerIs == "player") {
		playerResultElem.innerHTML = "Win!";
		player.score++;
		setGamePoints();
	} else if (winnerIs == "computer") {
		computerResultElem.innerHTML = "Win!";
		computer.score++;
		setGamePoints();
	}

}

function setGamePoints() {
	if (player.score == 10) {
		alert("And the winner is " + player.name);
		gameState = "ended";
		setGameElements();


	} else if (computer.score == 10) {
		alert("And the winner is Computer");
		gameState = "ended";
		setGameElements();


	} else {
		playerPointsElem.innerHTML = player.score;
		computerPointsElem.innerHTML = computer.score;
	}
}
