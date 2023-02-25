import {insertDOMel, removeAllChildNodes} 
  from "./auxFnsDOM";
import { restartGame } from "./game";

const gameOverScreenContent = () => {
  const container = document.querySelector('#container');

  removeAllChildNodes(container);//clear the previous screen

  const screen = insertDOMel('div', container, 'game-over-screen');

  //main screen containers
  const playerOneAvatar = insertDOMel('div', screen, 'avatar-one');
  const middleDiv = insertDOMel('div', screen, 'middle-div');
  const playerTwoAvatar = insertDOMel('div', screen, 'avatar-two');

  const pOneImage = insertDOMel('img', playerOneAvatar, 'image');
  const pTwoImage = insertDOMel('img', playerTwoAvatar, 'image');
  const midDivText = insertDOMel('p', middleDiv, 'text', 'Game Over!');
  const winnerText = insertDOMel('p', middleDiv, 'winner');
  const restartButton = insertDOMel('button', middleDiv, 'restart-game', 'Play Again');
}

//display message on who is the winner
const displayWinner = (gameData) => {
  const winnerText = document.querySelector('.winner');

  if (gameData.gameWinner === 1) winnerText.textContent = "You Win!";
  else winnerText.textContent = "You Lose!";
}

const gameOverScreenEventListeners = () => {
  const restartButton = document.querySelector('.restart-game');

  restartButton.addEventListener('click', () => {
    restartGame(gameData);
  })
}

const generateGameOverScreen = () => {
  gameOverScreenContent();
  displayWinner(gameData);
  gameOverScreenEventListeners();
}

export { gameOverScreenContent, displayWinner, gameOverScreenEventListeners,
  generateGameOverScreen };