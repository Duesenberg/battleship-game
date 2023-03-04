import { insertDOMel, removeAllChildNodes } from './auxFnsDOM';
import { clickSoundEventListeners } from './gameSound';
import {
  hitDisplays, markPlayerOneShips, gameBoardListeners,
} from './gameScreenAuxFns';
import { restartGamePopUp, gitPagePopup } from './popUpWindows';

const gameScreenContent = () => {
  const container = document.querySelector('#container');

  removeAllChildNodes(container);// clear the previous screen

  const screen = insertDOMel('div', container, 'game-screen');

  // main screen containers
  const header = insertDOMel('div', screen, 'header');
  const playerOneInfo = insertDOMel('div', screen, 'pone-stats');
  const playerTwoInfo = insertDOMel('div', screen, 'ptwo-stats');
  const playerOneBoard = insertDOMel('div', screen, 'pone-board');
  const playerTwoBoard = insertDOMel('div', screen, 'ptwo-board');
  const gameOptions = insertDOMel('div', screen, 'options');

  // header
  const title = insertDOMel('h1', header, 'title', 'Battleship');
  // player one info
  const pOneTitle = insertDOMel('p', playerOneInfo, 'title', 'Player 1');
  const pOneStats = insertDOMel('div', playerOneInfo, 'stats');
  const pOneHitsTitle = insertDOMel('p', pOneStats, 'hits-title', 'Hits received:');
  const pOneHits = insertDOMel('div', pOneStats, 'playerone-hits');
  const pOneCarrier = insertDOMel('p', pOneHits, 'carrier', 'Carrier:');
  const pOneCarrierHits = insertDOMel('div', pOneHits, 'carrier-hits');
  const pOneBattleship = insertDOMel('p', pOneHits, 'battleship', 'Battleship:');
  const pOneBattleshipHits = insertDOMel('div', pOneHits, 'battleship-hits');
  const pOneCruiser = insertDOMel('p', pOneHits, 'cruiser', 'Cruiser:');
  const pOneCruiserHits = insertDOMel('div', pOneHits, 'cruiser-hits');
  const pOneSubmarine = insertDOMel('p', pOneHits, 'submarine', 'Submarine:');
  const pOneSubmarineHits = insertDOMel('div', pOneHits, 'submarine-hits');
  const pOneDestroyer = insertDOMel('p', pOneHits, 'destroyer', 'Destroyer:');
  const pOneDestroyerHits = insertDOMel('div', pOneHits, 'destroyer-hits');
  // plater two info
  const pTwoTitle = insertDOMel('p', playerTwoInfo, 'title', 'Player 2');
  const pTwoStats = insertDOMel('div', playerTwoInfo, 'stats');
  const pTwoHitsTitle = insertDOMel('p', pTwoStats, 'hits-title', 'Hits received:');
  const pTwoHits = insertDOMel('div', pTwoStats, 'playertwo-hits');
  const pTwoCarrier = insertDOMel('p', pTwoHits, 'carrier', 'Carrier:');
  const pTwoCarrierHits = insertDOMel('div', pTwoHits, 'carrier-hits');
  const pTwoBattleship = insertDOMel('p', pTwoHits, 'battleship', 'Battleship:');
  const pTwoBattleshipHits = insertDOMel('div', pTwoHits, 'battleship-hits');
  const pTwoCruiser = insertDOMel('p', pTwoHits, 'cruiser', 'Cruiser:');
  const pTwoCruiserHits = insertDOMel('div', pTwoHits, 'cruiser-hits');
  const pTwoSubmarine = insertDOMel('p', pTwoHits, 'submarine', 'Submarine:');
  const pTwoSubmarineHits = insertDOMel('div', pTwoHits, 'submarine-hits');
  const pTwoDestroyer = insertDOMel('p', pTwoHits, 'destroyer', 'Destroyer:');
  const pTwoDestroyerHits = insertDOMel('div', pTwoHits, 'destroyer-hits');
  // player one board
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const pOneSquare = insertDOMel('div', playerOneBoard, 'board-square');
      pOneSquare.setAttribute('data-row', i);
      pOneSquare.setAttribute('data-column', j);
    }
  }
  // player two board
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const pTwoSquare = insertDOMel('div', playerTwoBoard, 'board-square');
      pTwoSquare.setAttribute('data-row', i);
      pTwoSquare.setAttribute('data-column', j);
    }
  }
  // game options
  const logo = insertDOMel('button', gameOptions, 'logo');
  const restartButton = insertDOMel('button', gameOptions, 'restart-game-button');
};

// add event listeners
const gameScreenEventListeners = () => {
  // restart button
  const restartButton = document.querySelector('.restart-game-button');
  restartButton.addEventListener('click', () => {
    restartGamePopUp();
  });
  // git hub page visit button
  const logoButton = document.querySelector('.logo');
  logoButton.addEventListener('click', () => {
    gitPagePopup();
  });

  // ev.lr for the player2 board
  gameBoardListeners();
};

const generateGameScreen = () => {
  gameScreenContent();
  markPlayerOneShips();
  hitDisplays();
  gameScreenEventListeners();
  clickSoundEventListeners();
};

export { gameScreenContent, generateGameScreen, gameScreenEventListeners };
