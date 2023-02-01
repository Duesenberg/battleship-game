import { Ship } from "./ship";

const Gameboard = () => {
  //generate an empty 10x10 matrix
  const generateBoard = function () {
    let board = [];

    for (let i = 0; i < 10; i++) {
      board.push([]);

      for (let j = 0; j < 10; j++) {
        board[i].push([]);
      }
    }
  
    return board;
  }

  //insert ship to the right starting at specified row & column.
  //accepts ship length as well
  const insertShipRight = function (row, column, shipType) {
    //insert ship object to right by number of length units(depending on type)
    if (this.board[row][column + (Ship(shipType).length -1)] !== undefined) {
      for (let i = 0; i < Ship(shipType).length; i++) {
        this.board[row][column + i] = Ship(shipType);
      }
    }
  }

  return {
    board: generateBoard(),
    insertShipRight
  }
};

export { Gameboard };