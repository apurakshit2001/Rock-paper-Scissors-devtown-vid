// const rock = document.querySelector(".options img:nth-child(1)")
// console.log(rock)


const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let userScore = 0;
let computerScore = 0;

const userBoard = document.querySelector(".user")
const computerBoard = document.querySelector(".computer")

// Available choices
const choices = ["rock", "paper", "scissors"];

// Game functions
const generateComputerResponse = () => {
    const index = ((Math.random() * 10).toFixed(0)) % 3
    return choices[index];
}

const result = (winner, userResponse, computerResponse) => {
    switch (winner) {
        case "user":
            userBoard.innerHTML = ++userScore
            break
        case "computer":
            computerBoard.innerHTML = ++computerScore
            break
        default:
            window.alert("something went wrong")
    }
}


const playGame = (userResponse) => {
    const computerResponse = generateComputerResponse()
    console.log(userResponse === computerResponse)
    if (userResponse === computerResponse) return console.log('Tie!!')
    console.log("gametime")

    switch (userResponse) {
        case "rock":
            switch (computerResponse) {
                case "paper":
                    return result("computer", userResponse, computerResponse)


                case "scissors":
                    return result("user", userResponse, computerResponse)
            }

        case "paper":
            switch (computerResponse) {
                case "scissors":
                    return result("computer", userResponse, computerResponse)

                case "rock":
                    return result("user", userResponse, computerResponse)
            }

        case "scissors":
            switch (computerResponse) {
                case "rock":
                    return result("computer", userResponse, computerResponse)

                case "paper":
                    return result("user", userResponse, computerResponse)
                default:
                    window.alert("Invalid response")
            }

    }


    // add event listners
    rock.addEventListener("click", (event) => playGame(event.target.id));
    paper.addEventListener("click", (event) => playGame(event.target.id));
    scissors.addEventListener("click", (event) => playGame(event.target.id));


}

