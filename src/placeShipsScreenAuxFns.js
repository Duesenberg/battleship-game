import { setShipType, setShipDirection } from './game';

// add class of occupied to all filled board squares
const markBoardSquares = () => {
  const boardSquares = document.querySelectorAll('.board-square');

  boardSquares.forEach((square) => {
    const row = parseInt(square.getAttribute('data-row'), 10);
    const column = parseInt(square.getAttribute('data-column'), 10);

    if (gameData.player1.gameBoard.board[row][column].ship !== null) { square.classList.add('occupied'); }
  });
};

// remove the occupied class from the board squares
const eraseShipsFromBoard = () => {
  const boardSquares = document.querySelectorAll('.board-square');

  boardSquares.forEach((square) => {
    square.classList.remove('occupied');
  });
};

// toggles pressed class. adds it to first parameter, removes it from rest
const togglePressedClass = (pressedButton, ...otherButtons) => {
  pressedButton.classList.add('pressed');
  otherButtons.forEach((button) => {
    button.classList.remove('pressed');
  });
};

// ev.listeners for ship btns
const shipBtnsEvListeners = () => {
  // declaring el
  const carrier = document.querySelector('.carrier-button');
  const battleship = document.querySelector('.battleship-button');
  const cruiser = document.querySelector('.cruiser-button');
  const submarine = document.querySelector('.submarine-button');
  const destroyer = document.querySelector('.destroyer-button');

  // add pressed class to button, remove it from others. also call setShipType
  carrier.addEventListener('click', () => {
    gameData.shipPlacement[0] = setShipType(carrier.value);
    togglePressedClass(carrier, battleship, cruiser, submarine, destroyer);
  });
  battleship.addEventListener('click', () => {
    gameData.shipPlacement[0] = setShipType(battleship.value);
    togglePressedClass(battleship, carrier, cruiser, submarine, destroyer);
  });
  cruiser.addEventListener('click', () => {
    gameData.shipPlacement[0] = setShipType(cruiser.value);
    togglePressedClass(cruiser, battleship, carrier, submarine, destroyer);
  });
  submarine.addEventListener('click', () => {
    gameData.shipPlacement[0] = setShipType(submarine.value);
    togglePressedClass(submarine, cruiser, battleship, carrier, destroyer);
  });
  destroyer.addEventListener('click', () => {
    gameData.shipPlacement[0] = setShipType(destroyer.value);
    togglePressedClass(destroyer, submarine, cruiser, battleship, carrier);
  });
};

// ev.lrs for arrow bts
const arrowBtsEvListeners = () => {
  // declarations
  const upArrow = document.querySelector('.arrow-up');
  const downArrow = document.querySelector('.arrow-down');
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');

  // listeners for placement direction
  upArrow.addEventListener('click', () => {
    gameData.shipPlacement[1] = setShipDirection(upArrow.value);
    togglePressedClass(upArrow, downArrow, leftArrow, rightArrow);
  });
  downArrow.addEventListener('click', () => {
    gameData.shipPlacement[1] = setShipDirection(downArrow.value);
    togglePressedClass(downArrow, upArrow, leftArrow, rightArrow);
  });
  leftArrow.addEventListener('click', () => {
    gameData.shipPlacement[1] = setShipDirection(leftArrow.value);
    togglePressedClass(leftArrow, downArrow, upArrow, rightArrow);
  });
  rightArrow.addEventListener('click', () => {
    gameData.shipPlacement[1] = setShipDirection(rightArrow.value);
    togglePressedClass(rightArrow, leftArrow, downArrow, upArrow);
  });
};

// ev.lrs for board sqares
const brdSqrsEvListeners = () => {
  const boardSquares = document.querySelectorAll('.board-square');

  boardSquares.forEach((square) => {
    square.addEventListener('click', () => {
      const row = parseInt(square.getAttribute('data-row'), 10);
      const column = parseInt(square.getAttribute('data-column'), 10);
      const shipType = gameData.shipPlacement[0];
      const shipDirection = gameData.shipPlacement[1];

      gameData.player1.gameBoard.placeSelectedShip(row, column, shipType, shipDirection);
      markBoardSquares();
    });
  });
};

export {
  markBoardSquares, eraseShipsFromBoard, togglePressedClass,
  shipBtnsEvListeners, arrowBtsEvListeners, brdSqrsEvListeners,
};
