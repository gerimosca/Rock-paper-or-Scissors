const userScoreElement = document.getElementById('userscore'); // Puntaje Usuario
const pcScoreElement = document.getElementById('pcscore'); // Puntaje PC

const titleNameElement = document.getElementById('titlegame'); // Titulo del juego a cambiar: YOU WIN, YOU LOSE

const buttonsIconElements = document.getElementById('game-icons'); // Botones Piedra, papel y tijera

const pickedByMeElement = document.getElementById('pickedme'); // Lo que he elegido
const pickedByPCElement = document.getElementById('pickedpc'); // Lo que la PC ha elegido

const numberOfPlay = ['paper', 'scissors', 'rock'];

const playRules = {
  rock: {
    scissors: true,
    paper: false,
  },

  paper: {
    rock: true,
    scissors: false,
  },

  scissors: {
    paper: true,
    rock: false,
  },
};

let userSelection = null;
let pcSelection = null;

let userScore = 0;
let pcScore = 0;

const updateScore = () => {
  userScoreElement.textContent = userScore;
  pcScoreElement.textContent = pcScore;
};

// Elección de la jugada del usuario
const setUserSelection = (item) => {
  userSelection = item;
};

const printPlay = () => {
  pickedByMeElement.textContent = `YOU PICKED: ${userSelection.toUpperCase()}`;
  pickedByPCElement.textContent = `PC PICKED: ${pcSelection.toUpperCase()}`;
};

// Elección de la jugada del pc
const setPcSelection = (item) => {
  const randomSelection = Math.floor(Math.random() * numberOfPlay.length);
  const pcPlay = numberOfPlay[randomSelection];
  pcSelection = pcPlay;
  printPlay();
};

const whoWins = () => {
  if (userSelection === pcSelection) {
    titleNameElement.textContent = "IT'S A TIE";
    return;
  }

  if (playRules[userSelection][pcSelection]) {
    titleNameElement.textContent = 'YOU WIN';
    userScore++;
  } else {
    titleNameElement.textContent = 'YOU LOSE';
    pcScore++;
  }

  updateScore();
};

// Programa de escucha de la jugada del usuario y la del pc
const playUser = (event) => {
  setUserSelection(event.target.dataset.button);
  setPcSelection();
  whoWins();
};

buttonsIconElements.addEventListener('click', playUser);
pickedByMeElement.addEventListener('click', printPlay);
pickedByPCElement.addEventListener('click', printPlay);
