const playerButtons = document.querySelectorAll('.player-choices button'); // Selects all buttons inside the player-choices class
console.log(playerButtons);
const result = document.querySelector('#result'); // Selects the result element
console.log(result);
const cpuChoice = document.querySelector('#cpu-choice'); // Selects the CPU choice element
console.log(cpuChoice);

let playerChoice; //
let computerChoice; //

const playerScoreDisplay = document.querySelector('#player-score'); // Selects the player score element
console.log(playerScoreDisplay);
const cpuChoiceScoreDisplay = document.querySelector('#cpu-score'); // Selects the CPU score element
console.log(cpuChoiceScoreDisplay);

let playerScore = 0; // Initialize player score
let CPUScore = 0; // Initialize CPU score

const choices = ['rock', 'paper', 'scissor', 'lizard', 'spock']; // Array of choices
console.log(choices);

const wins = {
  rock: ['scissor', 'lizard'], // Rock beats Scissor and Lizard
  paper: ['rock', 'spock'], // Paper beats Rock and Spock
  scissor: ['paper', 'lizard'], // Scissor beats Paper and Lizard
  lizard: ['spock', 'paper'], // Lizard beats Spock and Paper
  spock: ['scissor', 'rock'], // Spock beats Scissor and Rock
};

function generateCpuChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length); // Generates a random number based on the length of the choices array
  computerChoice = choices[randomNumber]; // Randomly selects a choice from the choices array
  console.log('Computer choice', computerChoice);
}

for (let i = 0; i < playerButtons.length; i++) {
  playerButtons[i].addEventListener('click', function (e) {
    playerChoice = e.target.id; // Gets the ID of the clicked button
    console.log('Player Choice: ', playerChoice);
    generateCpuChoice(); // Calls the function to generate CPU choice
  });
}
