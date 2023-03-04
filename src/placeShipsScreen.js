import { insertDOMel, removeAllChildNodes } from './auxFnsDOM';
import { clickSoundEventListeners, placeShipsSound } from './gameSound';
import { generateGameScreen } from './gameScreen';
import { loadShipLayout, layoutArray }
  from './computerShipLayouts';
import {
  eraseShipsFromBoard, shipBtnsEvListeners, brdSqrsEvListeners,
  arrowBtsEvListeners,
}
  from './placeShipsScreenAuxFns';

// create the content of the screen
const placeShipsScreenContent = () => {
  const container = document.querySelector('#container');
  removeAllChildNodes(container);// clear the welcome screen
  const screen = insertDOMel('div', container, 'place-ships-screen');

  // append four main divs on screen
  const header = insertDOMel('div', screen, 'header');
  const ships = insertDOMel('div', screen, 'ships');
  const controls = insertDOMel('div', screen, 'controls');
  const board = insertDOMel('div', screen, 'board');

  // header content
  const title = insertDOMel('h1', header, 'title', 'Place your Ships');

  // ships div content
  const shipsHeader = insertDOMel('p', ships, 'ships-header', 'Ship:');

  const carrier = insertDOMel('button', ships, 'carrier-button', 'Carrier');
  carrier.setAttribute('value', 'carrier');
  carrier.classList.add('pressed');// make this button pressed by default

  const battleship = insertDOMel('button', ships, 'battleship-button', 'Battleship');
  battleship.setAttribute('value', 'battleship');

  const cruiser = insertDOMel('button', ships, 'cruiser-button', 'Cruiser');
  cruiser.setAttribute('value', 'cruiser');

  const submarine = insertDOMel('button', ships, 'submarine-button', 'Submarine');
  submarine.setAttribute('value', 'submarine');

  const destroyer = insertDOMel('button', ships, 'destroyer-button', 'Destroyer');
  destroyer.setAttribute('value', 'destroyer');

  // controls content
  const controlsHeader = insertDOMel('p', controls, 'controls-header', 'Direction:');
  const arrowsContainer = insertDOMel('div', controls, 'arrows-container');

  const upArrow = insertDOMel('button', arrowsContainer, 'arrow-up');
  upArrow.setAttribute('value', 'up');

  const downArrow = insertDOMel('button', arrowsContainer, 'arrow-down');
  downArrow.setAttribute('value', 'down');

  const leftArrow = insertDOMel('button', arrowsContainer, 'arrow-left');
  leftArrow.setAttribute('value', 'left');

  const rightArrow = insertDOMel('button', arrowsContainer, 'arrow-right');
  rightArrow.setAttribute('value', 'right');
  rightArrow.classList.add('pressed');// make this button pressed by default

  const finishPlacement = insertDOMel('button', controls, 'finish-button', 'Finish');
  const eraseShips = insertDOMel('button', controls, 'clear-ships', 'Clear');
  const finishPlacementAlert = insertDOMel('p', controls, 'finish-alert', 'Please place all ships.');

  // board content
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const boardSquare = insertDOMel('div', board, 'board-square');
      boardSquare.setAttribute('data-row', i);
      boardSquare.setAttribute('data-column', j);
    }
  }
};

// add event listeners to buttons and board squares
const placeShipsScreenEventListeners = () => {
  shipBtnsEvListeners();
  arrowBtsEvListeners();
  brdSqrsEvListeners();

  // listener for clear button. erases ships from board & data object
  const eraseShips = document.querySelector('.clear-ships');
  eraseShips.addEventListener('click', () => {
    eraseShipsFromBoard();
    gameData.player1.gameBoard.clearBoard();
  });

  // listener for finish button
  const finishPlacement = document.querySelector('.finish-button');
  finishPlacement.addEventListener('click', () => {
    let shipsArePlaced;

    shipsArePlaced = gameData.player1.gameBoard.shipsAreReady();

    if (shipsArePlaced === true) {
      generateGameScreen();
      loadShipLayout(gameData, layoutArray);
    } else {
      const finishPlacementAlert = document.querySelector('.finish-alert');
      finishPlacementAlert.classList.add('visible');
    }
  });
};

const generatePlaceShipsScreen = () => {
  placeShipsScreenContent();
  placeShipsScreenEventListeners();
  clickSoundEventListeners();
  placeShipsSound();
};

export { placeShipsScreenContent, generatePlaceShipsScreen, placeShipsScreenEventListeners };
