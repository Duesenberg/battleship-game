import {insertDOMel, removeAllChildNodes} 
  from "./auxFnsDOM";
import { restartGame } from "./game";

const gameOverScreenContent = () => {
  const container = document.querySelector('#container');

  removeAllChildNodes(container);//clear the previous screen

  const screen = insertDOMel('div', container, 'game-over-screen');

  //main screen containers
  const middleDiv = insertDOMel('div', screen, 'middle-div');

  const winnerText = insertDOMel('p', middleDiv, 'winner');
  const restartButton = insertDOMel('button', middleDiv, 'restart-game', 'Play Again');
}

//display message on who is the winner
const displayWinner = (gameData) => {
  const winnerText = document.querySelector('.winner');

  if (gameData.gameWinner === 1) winnerText.textContent = "PLayer 1 Wins!";
  else winnerText.textContent = "Player 2 Wins!";
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