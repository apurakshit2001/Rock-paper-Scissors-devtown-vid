const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const messageBox = document.querySelector(".message");

let userScore = 0;
let computerScore = 0;

const userBoard = document.querySelector(".user");
const computerBoard = document.querySelector(".computer");

// Available choices
const choices = ["rock", "paper", "scissors"];

// Game functions
const generateComputerResponse = () => {
    const index = (Math.random() * 10).toFixed(0) % 3;
    return choices[index];
};

const result = (winner, userResponse, computerResponse) => {
    switch (winner) {
        case "user":
            // display message
            messageBox.innerHTML = `You won! ${userResponse} beats ${computerResponse}`;
            document.querySelector(`#${userResponse}`).classList.toggle("won");
            setTimeout(() => document.querySelector(`#${userResponse}`).classList.remove("won"), 2000);
            // update scoreboard
            userBoard.innerHTML = ++userScore;
            break;
        case "computer":
            // 
            messageBox.innerHTML = `You lost! ${computerResponse} beats ${userResponse}`;
            computerBoard.innerHTML = ++computerScore;
            break;
        default:
            console.error("Something went wrong");
    }
};

const playGame = (userResponse) => {
    const computerResponse = generateComputerResponse();
    if (userResponse === computerResponse) return console.log('Tie!!');
    console.log("gametime");

    switch (userResponse) {
        case "rock":
            switch (computerResponse) {
                case "paper":
                    return result("computer", userResponse, computerResponse);

                case "scissors":
                    return result("user", userResponse, computerResponse);
            }
            break;

        case "paper":
            switch (computerResponse) {
                case "scissors":
                    return result("computer", userResponse, computerResponse);

                case "rock":
                    return result("user", userResponse, computerResponse);
            }
            break;

        case "scissors":
            switch (computerResponse) {
                case "rock":
                    return result("computer", userResponse, computerResponse);

                case "paper":
                    return result("user", userResponse, computerResponse);
                default:
                    console.error("Invalid response");
            }
            break;
    }
};

// Add event listeners outside the playGame function
rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));

