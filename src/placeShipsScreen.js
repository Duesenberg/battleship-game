import {selectDOMel, selectDOMelAll, insertDOMel, removeAllChildNodes} from "./auxFnsDOM";
import { clearObject, updateRound, updateScore, 
  roundOver, determineRoundWinner, gameOver,
  determineGameWinner, GenerateGameData, setShipType, setShipDirection  }
  from "./gameLoopAuxFns";

//create the content of the screen
const placeShipsScreenContent = () => {
  const container = selectDOMel('#container');

  removeAllChildNodes(container);//clear the welcome screen

  const screen = insertDOMel('div', container, 'screen');
  //append four main divs on screen
  const header = insertDOMel('div', screen, 'header');
  const ships = insertDOMel('div', screen, 'ships');
  const controls = insertDOMel('div', screen, 'controls');
  const board = insertDOMel('div', screen, 'board');

  //header content
  const title = insertDOMel('h1', header, 'title', 'Place your Ships');
  //ships div content
  const shipsHeader = insertDOMel('p', ships, 'ships-header', 'Ships:');
  const carrier = insertDOMel('button', ships, 'carrier-button', 'Carrier');
  carrier.setAttribute('value', 'carrier');
  carrier.classList.add('pressed');
  const battleship = insertDOMel('button', ships, 'battleship-button', 'Battleship');
  battleship.setAttribute('value', 'battleship');
  const cruiser = insertDOMel('button', ships, 'cruiser-button', 'Cruiser');
  cruiser.setAttribute('value', 'cruiser');
  const submarine = insertDOMel('button', ships, 'submarine-button', 'Submarine');
  submarine.setAttribute('value', 'submarine');
  const destroyer = insertDOMel('button', ships, 'destroyer-button', 'Destroyer');
  destroyer.setAttribute('value', 'destroyer');
  //controls content
  const controlsHeader = insertDOMel('p', controls, 'controls-header', 'Placement direction:');
  const arrowsContainer = insertDOMel('div', controls, 'arrows-container');
  const upArrow = insertDOMel('button', arrowsContainer, 'arrow-up');
  upArrow.setAttribute('value', 'up');
  const downArrow = insertDOMel('button', arrowsContainer, 'arrow-down');
  downArrow.setAttribute('value', 'down');
  const leftArrow = insertDOMel('button', arrowsContainer, 'arrow-left');
  leftArrow.setAttribute('value', 'left');
  const rightArrow = insertDOMel('button', arrowsContainer, 'arrow-right');
  rightArrow.setAttribute('value', 'right');
  rightArrow.classList.add('pressed');
  const finishPlacement = insertDOMel('button', controls, 'finish-button', 'Finish');
  const eraseShips = insertDOMel('button', controls, 'clear-ships', 'Clear');
  //board content
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const boardSquare = insertDOMel('div', board, 'board-square');
      boardSquare.setAttribute('data-row', i);
      boardSquare.setAttribute('data-column', j);
    }
  }
}

//add class of occupied to all filled board squares
const markBoardSquares = () => {
  const boardSquares = document.querySelectorAll('.board-square');

  for (let square in boardSquares) {
    let row = parseInt(square.getAttribute('data-row'));
    let column = parseInt(square.getAttribute('data-column'));

    if (gameData.player1.gameBoard.board[row][column].ship !== null)
      square.classList.add('occupied');
  }
}

//remove the occupied class from the board squares & clear data from board
const eraseShipsFromBoard = () => {
  const boardSquares = document.querySelectorAll('.board-square');

  for (let square in boardSquares) {
    square.classList.remove('occupied');
  }

  gameData.player1.gameBoard.clearBoard();
}

//toggles pressed class. adds it to first parameter, removes it from rest
const togglePressedClass = (pressedButton, ...otherButtons) => {
  pressedButton.classList.add('pressed');
  otherButtons.forEach(button => {
    button.classList.remove('pressed');
  })
}

//add event listeners to buttons and board squares
const placeShipsScreenEventListeners = () => {
  //declaring elements
  const carrier = document.querySelector('.carrier-button');
  const battleship = document.querySelector('.battleship-button');
  const cruiser = document.querySelector('.cruiser-button');
  const submarine = document.querySelector('.submarine-button');
  const destroyer = document.querySelector('.destroyer-button');
  const upArrow = document.querySelector('.arrow-up');
  const downArrow = document.querySelector('.arrow-down');
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');
  const boardSquares = document.querySelectorAll('.board-square');

  //listeners for ship buttons
  //add pressed class to button, remove it from others. also call setShipType
  carrier.addEventListener('click', () => {
    setShipType(carrier.value);
    togglePressedClass(carrier, battleship, cruiser, submarine, destroyer);
  });
  battleship.addEventListener('click', () => {
    setShipType(battleship.value);
    togglePressedClass(battleship, carrier, cruiser, submarine, destroyer);
  });
  cruiser.addEventListener('click', () => {
    setShipType(cruiser.value);
    togglePressedClass(cruiser, battleship, carrier, submarine, destroyer);
  });
  submarine.addEventListener('click', () => {
    setShipType(submarine.value);
    togglePressedClass(submarine, cruiser, battleship, carrier, destroyer);
  });
  destroyer.addEventListener('click', () => {
    setShipType(destroyer.value);
    togglePressedClass(destroyer, submarine, cruiser, battleship, carrier);
  });
  //listeners for placement direction
  upArrow.addEventListener('click', () => {
    setShipDirection(upArrow.value);
    togglePressedClass(upArrow, downArrow, leftArrow, rightArrow);
  });
  downArrow.addEventListener('click', () => {
    setShipDirection(downArrow.value);
    togglePressedClass(downArrow, upArrow, leftArrow, rightArrow);
  });
  leftArrow.addEventListener('click', () => {
    setShipDirection(leftArrow.value);
    togglePressedClass(leftArrow, downArrow, upArrow, rightArrow);
  });
  rightArrow.addEventListener('click', () => {
    setShipDirection(rightArrow.value);
    togglePressedClass(rightArrow, leftArrow, downArrow, upArrow);
  });

  //listeners for board squares
  for (let square in boardSquares) {
    square.addEventListener('click', () => {
      let row = parseInt(square.getAttribute('data-row'));
      let column = parseInt(square.getAttribute('data-column'));
      let shipType = gameData.shipPlacement[0];
      let shipDirection = gameData.shipPlacement[1];

      gameData.player1.gameBoard.placeSelectedShip(row, column, shipType, shipDirection);

      markBoardSquares();
    });
  }

  //listener for clear button
  const eraseShips = document.querySelector('.clear-ships');
  eraseShips.addEventListener('click', () => {
    eraseShipsFromBoard();
  })

  //listener for finish button
  const finishPlacement = document.querySelector('.finish-button');
  finishPlacement.addEventListener('click', () => {
    let shipsArePlaced;

    shipsArePlaced = gameData.player1.gameBoard.shipsAreReady();

    if (shipsArePlaced === true) generateGameScreen();
  });
}

//---------------------dummy function while i'm working on gameScreen
const generateGameScreen = () => {
  console.log('no hill for a stepper');
}
//------------------------------------------------------

const generatePlaceShipsScreen = () => {
  placeShipsScreenContent();
  placeShipsScreenEventListeners();
}

export {placeShipsScreenContent, generatePlaceShipsScreen, placeShipsScreenEventListeners,
  markBoardSquares, eraseShipsFromBoard, togglePressedClass};