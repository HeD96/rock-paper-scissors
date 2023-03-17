//create a function that gets computer choice and assign it to variable
//create a function that gets player choice and assign it to variable
    //convert the answer to lower case
//create a play round function which receives two parameters (player and computer choice), compares them and chooses a winner
//create a game function that repeats the game for 5 rounds by keeping score for both players and announce a winner in the end

// console.log(playRound(getPlayerChoice(), getComputerChoice()));

fullGame();


function getComputerChoice() {
    const choicePool = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let compRandomChoice = choicePool[randomNumber];    

    return compRandomChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt().toLowerCase();

    return playerChoice;
}

function playRound() {

    let player = getPlayerChoice();
    let computer = getComputerChoice();

    if (player === computer) {
        console.log(player.charAt(0).toUpperCase() + player.slice(1) + " and " + computer.charAt(0).toUpperCase() + computer.slice(1) + "!" + " It's a tie!");
        return "tie";
    } else if (player === "rock" && computer === "paper") {
        console.log("You lost! Paper beats rock!");
        return "lost";
    } else if (player === "rock" && computer === "scissors") {
        console.log("You won! Rock beats scissors!");
        return "won";
    } else if (player === "paper" && computer === "rock") {
        console.log("You won! Paper beats rock!");
        return "won";
    } else if (player === "paper" && computer === "scissors") {
        console.log("You lost! Scissors beat paper!");
        return "lost";
    } else if (player === "scissors" && computer === "rock") {
        console.log("You lost! Rock beats scissors!");
        return "lost";
    } else if (player === "scissors" && computer === "paper") {
        console.log("You won! Scissors beat paper!");
        return "won";
    }
}

function fullGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let round = playRound();
        if (round === "won") {
            playerScore++;
        } else if (round === "lost") {
            computerScore++;
        } else if (round === "tie") {
            computerScore++;
            playerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("CompScore: " + computerScore);
        console.log("PlayerScore " + playerScore);
        console.log("Wow! You won!");
    } else if (playerScore < computerScore) {
        console.log("CompScore: " + computerScore);
        console.log("PlayerScore " + playerScore);
        console.log("Ouch! You lost!");
    } else if (playerScore === computerScore) {
        console.log("CompScore: " + computerScore);
        console.log("PlayerScore " + playerScore);
        console.log("It's a tie! You show em next time!");
    }
    
}