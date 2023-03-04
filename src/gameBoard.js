import Ship from './ship';
import { hitOrMissSound } from './gameSound';

const Gameboard = () => {
  // generate a 10x10 matrix, each cell with an object that contains
  // info about whether a square is hit & the ship it contains
  const generateBoard = function generateBoard() {
    const board = [];

    for (let i = 0; i < 10; i++) {
      board.push([]);

      for (let j = 0; j < 10; j++) {
        board[i].push({ hit: null, ship: null });
      }
    }

    return board;
  };

  // clear the board
  const clearBoard = function clearBoard() {
    // erase the ships from the board
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = { hit: null, ship: null };
      }
    }

    // mark each ship as not placed
    this.ships.carrier.placed = false;
    this.ships.battleship.placed = false;
    this.ships.cruiser.placed = false;
    this.ships.submarine.placed = false;
    this.ships.destroyer.placed = false;
  };

  // insert ship to the right starting at specified row & column.
  // accepts ship type as well
  // only insert if square is empty and if ship type has not been entered before
  const insertShipRight = function insertShipRight(row, column, shipType) {
    // if ship type is placed, or if ship would go out of bounds do nothing
    if (this.ships[`${shipType}`].placed === true
    || this.board[row][column + (Ship(shipType).length - 1)] === undefined) {} else {
      // check if there would be overlap
      let overlap = 0;
      for (let o = 0; o < Ship(shipType).length; o++) {
        if (this.board[row][column + o].ship !== null) overlap += 1;
      }
      // if no overlap place ship
      if (overlap === 0) {
        for (let i = 0; i < Ship(shipType).length; i++) {
          this.board[row][column + i].ship = shipType;
        }
        this.ships[`${this.board[row][column].ship}`].placed = true;
      }
    }
  };

  const insertShipDown = function insertShipDown(row, column, shipType) {
    if (this.ships[`${shipType}`].placed === true
    || this.board[row + (Ship(shipType).length - 1)] === undefined) {} else {
      let overlap = 0;
      for (let o = 0; o < Ship(shipType).length; o++) {
        if (this.board[row + o][column].ship !== null) overlap += 1;
      }

      if (overlap === 0) {
        for (let i = 0; i < Ship(shipType).length; i++) {
          this.board[row + i][column].ship = shipType;
        }
        this.ships[`${this.board[row][column].ship}`].placed = true;
      }
    }
  };

  const insertShipLeft = function insertShipLeft(row, column, shipType) {
    if (this.ships[`${shipType}`].placed === true
    || this.board[row][column - (Ship(shipType).length - 1)] === undefined) {} else {
      let overlap = 0;
      for (let o = 0; o < Ship(shipType).length; o++) {
        if (this.board[row][column - o].ship !== null) overlap += 1;
      }

      if (overlap === 0) {
        for (let i = 0; i < Ship(shipType).length; i++) {
          this.board[row][column - i].ship = shipType;
        }
        this.ships[`${this.board[row][column].ship}`].placed = true;
      }
    }
  };

  const insertShipUp = function insertShipUp(row, column, shipType) {
    if (this.ships[`${shipType}`].placed === true
    || this.board[row - (Ship(shipType).length - 1)] === undefined) {} else {
      let overlap = 0;
      for (let o = 0; o < Ship(shipType).length; o++) {
        if (this.board[row - o][column].ship !== null) overlap += 1;
      }

      if (overlap === 0) {
        for (let i = 0; i < Ship(shipType).length; i++) {
          this.board[row - i][column].ship = shipType;
        }
        this.ships[`${this.board[row][column].ship}`].placed = true;
      }
    }
  };

  // places a ship of the selected type & in the selected direction
  const placeSelectedShip = function placeSelectedShip(row, column, shipType, shipDirection) {
    if (shipDirection === 'right') this.insertShipRight(row, column, shipType);
    else if (shipDirection === 'down') this.insertShipDown(row, column, shipType);
    else if (shipDirection === 'left') this.insertShipLeft(row, column, shipType);
    else if (shipDirection === 'up') this.insertShipUp(row, column, shipType);
  };

  // register a hit or miss on board square. if ship is hit, add a hit to it.
  // if a ship is hit, check if it is sunk
  const receiveAttack = function receiveAttack(row, column) {
    if (this.board[row][column].ship !== null && this.board[row][column].hit !== true) {
      this.board[row][column].hit = true;
      this.ships[`${this.board[row][column].ship}`].hit();
      this.ships[`${this.board[row][column].ship}`].isSunk();
      hitOrMissSound(row, column, this);
    } else if (this.board[row][column].ship === null) {
      this.board[row][column].hit = false;
      hitOrMissSound(row, column, this);
    }
  };

  // check if all ships are placed on game board
  const shipsAreReady = function shipsAreReady() {
    const { ships } = this;

    if (ships.carrier.placed === true && ships.battleship.placed === true
      && ships.cruiser.placed === true && ships.submarine.placed === true
      && ships.destroyer.placed === true) return true;
    return false;
  };

  // check if all ships on game board are sunk (yes-true/no-false)
  const allShipsSunk = function allShipsSunk() {
    let sunkShips = 0;

    this.ships.forEach((ship) => {
      if (this.ships[ship].sunk === true) sunkShips += 1;
    });

    if (sunkShips === 5) return true;
    return false;
  };

  return {
    board: generateBoard(),
    ships: {
      carrier: Ship('carrier'),
      battleship: Ship('battleship'),
      cruiser: Ship('cruiser'),
      submarine: Ship('submarine'),
      destroyer: Ship('destroyer'),
    },
    insertShipRight,
    insertShipDown,
    insertShipLeft,
    insertShipUp,
    receiveAttack,
    shipsAreReady,
    allShipsSunk,
    placeSelectedShip,
    clearBoard,
  };
};

export default { Gameboard };
