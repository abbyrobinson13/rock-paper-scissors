import rl from "readline-sync";

function compare(player1Choice, player2Choice) {
  if (player1Choice == "rock") {
    if (player2Choice == "rock") {
      return "draw";
    } else if (player2Choice == "paper") {
      return "player2";
    } else {
      return "player1";
    }
  } else if (player1Choice == "paper") {
    if (player2Choice == "rock") {
      return "player1";
    } else if (player2Choice == "paper") {
      return "draw";
    } else {
      return "player2";
    }
  } else {
    if (player2Choice == "scissors") {
      return "player2";
    } else if (player2Choice == "paper") {
      return "player1";
    } else {
      return "draw";
    }
  }
}

console.log("Welcome to Rock, Paper, Scissors!");
console.log("Tell us who is playing today.");
let player1Name = rl.question("What is player 1's name?: ");
let player2Name = rl.question("What is player 2's name?: ");

let player1Score = 0;
let player2Score = 0;

while (true) {
  let player1Choice = rl.question(
    "What does player one pick? Rock, paper, or scissors: "
  );
  let player2Choice = rl.question(
    "What does player two pick? Rock, paper, or scissors: "
  );

  //compare choices
  let winner = compare(player1Choice, player2Choice); //TODO: create "compare" function()
  let winnerName;
  if (winner == "player1") {
    player1Score += 1;
    winnerName = player1Name;
  } else if (winner == "player2") {
    player2Score += 1;
    winnerName = player2Name;
  } else {
    console.log("It's a draw, please play again");
    continue;
  }

  console.log(`The winner is ${winnerName}.`);
  console.log(`Player 1's score: ${player1Score}`);
  console.log(`Player 2's score: ${player2Score}`);
}
