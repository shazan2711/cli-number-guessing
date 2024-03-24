#! /usr/bin/env node
import inquirer from "inquirer";
// 1 computer will generate a random number
// 2 user input for guessing number
// 3 compare user input with computer generated number and show results

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number guessing game");

{
  const answers = await inquirer.prompt([
    {
      name: "userGuessedNumber",
      type: "number",
      message: "Please guess a number between 1-10",
    },
  ]);

  console.log(answers);
  if (answers.userGuessedNumber === randomNumber) {
    console.log("Congrats you guessed the right number");
  } else {
    console.log("You guessed wrong number");
  }
}
