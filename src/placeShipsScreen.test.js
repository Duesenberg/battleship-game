import { placeShipsScreenContent } from "./placeShipsScreen";
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