/* eslint-disable jsx-a11y/heading-has-content */
import "./styles.scss";

function RockPaperScissors() {
  const computerChoiceDisplay = document.getElementById("computer-choice");
  const userChoiceDisplay = document.getElementById("user-choice");
  const resultDisplay = document.getElementById("result");
  const possibleChoices = document.querySelectorAll("button");
  let userChoice;
  let computerChoice;
  let result;

  possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (e) => {
      userChoice = e.target.id;
      userChoiceDisplay.innerHTML = userChoice;
      generateComputerChoice();
      getResult();
    })
  );

  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length

    if (randomNumber === 1) {
      computerChoice = "rock";
    }
    if (randomNumber === 2) {
      computerChoice = "scissors";
    }
    if (randomNumber === 3) {
      computerChoice = "paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
  }

  function getResult() {
    if ((computerChoice && userChoice) === null) {
      result = "";
    }
    if (computerChoice === userChoice) {
      result = "Its a draw!!!🙅‍♂️";
    }
    if (computerChoice === "rock" && userChoice === "paper") {
      result = "You Won!!! 🏆";
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
      result = "You Lost!!! ☠️";
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
      result = "You Won!!! 🏆";
    }
    if (computerChoice === "paper" && userChoice === "rock") {
      result = "You Lost!!! ☠️";
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
      result = "You Won!!! 🏆";
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
      result = "You Lost!!! ☠️";
    }
    resultDisplay.innerHTML = result;
  }

  return (
    <main className="RockPaperScissors">
      <p>
        Challenge an game against the "deep blue" of the rock papeer scissors!!
      </p>

      <h3>
        Computer Choice:
        <span id="computer-choice" className="RockPaperScissors__move"></span>
      </h3>
      <h3>
        Your Choice:
        <span id="user-choice" className="RockPaperScissors__move"></span>
      </h3>
      <h2 id="result" className="RockPaperScissors__result"></h2>
      <div>
        <button id="rock" className="RockPaperScissors__btn">
          rock
        </button>
        <button id="paper" className="RockPaperScissors__btn">
          paper
        </button>
        <button id="scissors" className="RockPaperScissors__btn">
          scissors
        </button>
      </div>
    </main>
  );
}

export default RockPaperScissors;
