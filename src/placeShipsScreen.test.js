import { placeShipsScreenContent, generatePlaceShipsScreen, placeShipsScreenEventListeners,
  markBoardSquares, eraseShipsFromBoard, togglePressedClass } from "./placeShipsScreen";
import { welcomeScreenContent } from "./welcomeScreen";

describe('place ships screen', () => {
  document.body.innerHTML = `<div id="container"></div>`;

  let boardSquaresString = '';

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      boardSquaresString += `<div class="board-square" data-row="${i}" data-column="${j}"></div>`;
    }
  }

  it('should generate DOM elements for ship placement screen', () => {
    welcomeScreenContent();
    placeShipsScreenContent();

    expect(document.body.innerHTML).toBe(
      '<div id="container">' +
        '<div class="screen">' +
          '<div class="header">' +
            '<h1 class="title">Place your Ships</h1>' +
          '</div>' +
          '<div class="ships">' +
            '<p class="ships-header">Ships:</p>' +
            '<button class="carrier-button pressed" value="carrier">Carrier</button>' +
            '<button class="battleship-button" value="battleship">Battleship</button>' +
            '<button class="cruiser-button" value="cruiser">Cruiser</button>' +
            '<button class="submarine-button" value="submarine">Submarine</button>' +
            '<button class="destroyer-button" value="destroyer">Destroyer</button>' +
          '</div>' +
          '<div class="controls">' +
            '<p class="controls-header">Placement direction:</p>' +
            '<div class="arrows-container">' +
              '<button class="arrow-up" value="up"></button>' +
              '<button class="arrow-down" value="down"></button>' +
              '<button class="arrow-left" value="left"></button>' +
              '<button class="arrow-right pressed" value="right"></button>' +
            '</div>' +
            '<button class="finish-button">Finish</button>' +
            '<button class="clear-ships">Clear</button>' +
          '</div>' +
          '<div class="board">' +
          boardSquaresString +
          '</div>' +
        '</div>' +
      '</div>')
  });
});

//i mocked the event listeners here, because there were issues recognizing some
//of the DOM functions
describe('test event listeners', () => {
  document.body.innerHTML = `<div id="container"></div>`;
  placeShipsScreenContent();

  //selecting needed DOM elements
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
  const eraseShips = document.querySelector('.clear-ships');
  const finishPlacement = document.querySelector('.finish-button');

  //dummy fns and methods that are called with the event listeners
  const setShipType = jest.fn();
  const setShipDirection = jest.fn();
  const placeSelectedShip = jest.fn();
  const gameData = {
    shipPlacement: ['carrier', 'right'],
  }
  const generateGameScreen = jest.fn();

  it('changes ship button classes as expected when ships buttons pressed', () => {
    carrier.addEventListener('click', () => {
      togglePressedClass(carrier, battleship, cruiser, submarine, destroyer);
    });
    destroyer.addEventListener('click', () => {
      togglePressedClass(destroyer, battleship, cruiser, submarine, carrier);
    });

    carrier.click();
    destroyer.click();
    expect(carrier.className).toBe("carrier-button");
    expect(destroyer.className).toBe("destroyer-button pressed");
  });

  it('calls the setShipType fn when ship buttons clicked with expected arg', () => {
    carrier.addEventListener('click', () => {
      setShipType(carrier.value);
      togglePressedClass(carrier, battleship, cruiser, submarine, destroyer);
    })

    carrier.click();
    expect(setShipType).toHaveBeenCalledWith('carrier');
  });

  it('changes direction classes as expected when they are clicked', () => {
    upArrow.addEventListener('click', () => {
      togglePressedClass(upArrow, rightArrow, downArrow, leftArrow);
    });
    downArrow.addEventListener('click', () => {
      togglePressedClass(downArrow, upArrow, rightArrow, leftArrow);
    });

    upArrow.click();
    expect(upArrow.className).toBe('arrow-up pressed');
    
    downArrow.click();
    expect(upArrow.className).toBe('arrow-up');
    expect(downArrow.className).toBe('arrow-down pressed');
  });

  it('calls the setShipDirection fn when directions button clicked', () => {
    upArrow.addEventListener('click', () => {
      setShipDirection(upArrow.value);
      togglePressedClass(upArrow, rightArrow, downArrow, leftArrow);
    });

    upArrow.click();
    expect(setShipDirection).toHaveBeenCalledWith('up');
  });

  it('calls the placeSelectedShip method when a board square is clicked', () => {
    boardSquares.forEach(square => {
      square.addEventListener('click', () => {
        let row = parseInt(square.getAttribute('data-row'));
        let column = parseInt(square.getAttribute('data-column'));
        let shipType = gameData.shipPlacement[0];
        let shipDirection = gameData.shipPlacement[1];
  
        placeSelectedShip(row, column, shipType, shipDirection);
      });
    });

    for (let i = 0; i < 100;) {
      boardSquares.forEach(square => {
        ++i;
        if (i === 11) square.click();
      })
    }

    expect(placeSelectedShip)
      .toHaveBeenCalledWith(1, 0, 'carrier', 'right');
  });

  it('calls the markBoardSquares function when a board square is clicked', () => {
    const markBoardSquaresMock = jest.fn();

    boardSquares.forEach(square => {
      square.addEventListener('click', () => {
        markBoardSquaresMock();
      });
    });

    for (let i = 0; i < 100;) {
      boardSquares.forEach(square => {
        ++i;
        if (i === 11) square.click();
      })
    }

    expect(markBoardSquaresMock).toHaveBeenCalled();
  });

  it('calls the clearBoard method when clear button is clicked', () => {
    const eraseShipsFromBoard = jest.fn();

    eraseShips.addEventListener('click', () => {
      eraseShipsFromBoard();
    })

    eraseShips.click();
    expect(eraseShipsFromBoard).toHaveBeenCalled();
  });

  it('calls generateGameScreen when finish button is clicked', () => {
    let shipsArePlaced = true;

    finishPlacement.addEventListener('click', () => {
      if (shipsArePlaced === true) generateGameScreen();
    });

    finishPlacement.click();
    expect(generateGameScreen).toHaveBeenCalled();
  });
});