import { placeShipsScreenContent, generatePlaceShipsScreen, placeShipsScreenEventListeners,
  markBoardSquares, eraseShipsFromBoard } from "./placeShipsScreen";
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

describe('test event listeners', () => {
  document.body.innerHTML = `<div id="container"></div>`;
  placeShipsScreenContent();
  placeShipsScreenEventListeners();

  //dummy fns and methods that are called with the event listeners
  const setShipType = () => {};
  const setShipDirection = () => {};
  const gameData = {
    shipPlacement: [0, 0],
    player1: {
      gameboard: {
        placeSelectedShip: (row, column, shipType, shipDirection) => {},
        clearBoard: () => {},
        shipsAreReady: () => {}
      }
    }
  }
  const generateGameScreen = () => {
    console.log('no hill for a stepper');
  }

  it('changes ship button classes as expected when ships buttons pressed', () => {
    const carrier = document.querySelector('.carrier-button');
    const battleship = document.querySelector('.battleship-button');
    const cruiser = document.querySelector('.cruiser-button');
    const submarine = document.querySelector('.submarine-button');
    const destroyer = document.querySelector('.destroyer-button');

    carrier.click();
    battleship.click();
    cruiser.click();
    submarine.click();
    destroyer.click();

    expect(carrier.className).toBe("carrier-button");
    expect(destroyer.className).toBe("destroyer-button pressed");
  });

  it('calls the setShipType fn when ship buttons clicked', () => {

  });

  it('changes direction classes as expected when they are clicked', () => {

  });

  it('calls the setShipDirection fn when directions button clicked', () => {

  });

  it('calls the placeSelectedShip method when a board square is clicked', () => {

  });

  it('calls the markBoardSquares function when a board square is clicked', () => {

  });

  it('adds class of occupied for the squares that contain a ship when a board square is clicked', () => {

  });

  it('calls the clearBoard method when clear button is clicked', () => {

  });

  it('removes class of occupied from all board squares when clear button clicked', () => {

  });

  it('calls the shipsAreReady method once finish button is clicked', () => {

  });

  it('calls generateGameScreen when finish button is clicked', () => {

  });
});