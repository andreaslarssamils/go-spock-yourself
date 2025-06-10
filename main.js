const playerButtons = document.querySelectorAll('.player-choices button'); // Selects all buttons inside the player-choices class
console.log(playerButtons);
const result = document.querySelector('#result'); // Selects the result element
console.log(result);
const CPUChoice = document.querySelector('#cpu-choice'); // Selects the CPU choice element
console.log(CPUChoice);

const playerScoreDisplay = document.querySelector('#player-score'); // Selects the player score element
console.log(playerScoreDisplay);
const CPUChoiceScoreDisplay = document.querySelector('#cpu-score'); // Selects the CPU score element
console.log(CPUChoiceScoreDisplay);

let playerScore = 0; // Initialize player score
let CPUScore = 0; // Initialize CPU score

const choices = ['rock', 'paper', 'scissor', 'lizard', 'spock']; // Array of choices
console.log(choices);
