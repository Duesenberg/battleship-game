import { insertDOMel, removeAllChildNodes } from './auxFnsDOM';
import { restartGame } from './game';
import { clickSoundEventListeners, stopAudio } from './gameSound';

const gameOverScreenContent = () => {
  const container = document.querySelector('#container');

  removeAllChildNodes(container);// clear the previous screen

  const screen = insertDOMel('div', container, 'game-over-screen');

  // main screen containers
  const middleDiv = insertDOMel('div', screen, 'middle-div');

  const winnerText = insertDOMel('p', middleDiv, 'winner');
  const restartButton = insertDOMel('button', middleDiv, 'restart-game', 'Play Again');
};

// display message on who is the winner
const displayWinner = (gameData) => {
  const winnerText = document.querySelector('.winner');

  if (gameData.gameWinner === 1) winnerText.textContent = 'Player 1 Wins!';
  else winnerText.textContent = 'Player 2 Wins!';
};

const gameOverScreenEventListeners = () => {
  const restartButton = document.querySelector('.restart-game');

  restartButton.addEventListener('click', () => {
    restartGame(gameData);
    stopAudio(gameOverSong);
  });
};

const generateGameOverScreen = () => {
  gameOverScreenContent();
  displayWinner(gameData);
  gameOverScreenEventListeners();
  clickSoundEventListeners();
};

export {
  gameOverScreenContent, displayWinner, gameOverScreenEventListeners,
  generateGameOverScreen,
};
