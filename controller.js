// Controller

function playGame(playerChoice) {

    model.playerChoice = playerChoice;
    model.computerChoice = model.choices[Math.floor(Math.random() * 3)];
    model.result = "";

    if (model.playerChoice === model.computerChoice) {
        model.result = "It's a Tie!"
    } else {
        switch (model.playerChoice) {
            case "rock":
                model.result = (model.computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                model.result = (model.computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                model.result = (model.computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    };

    changeResultTextAndColor();
    updateView();
}

function changeResultTextAndColor() {
    model.whatColor = null;
    switch (model.result) {
        case "YOU WIN!":
            model.whatColor = "greenText";
            model.playerScore++;
            break;
        case "YOU LOSE!":
            model.whatColor = "redText";
            model.computerScore++;
            break;

    }
}