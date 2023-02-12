import { Ship } from "./ship";

const Gameboard = () => {
  //generate a 10x10 matrix, each cell with an object that contains
  //info about whether a square is hit & the ship it contains
  const generateBoard = function () {
    let board = [];

    for (let i = 0; i < 10; i++) {
      board.push([]);

      for (let j = 0; j < 10; j++) {
        board[i].push({hit: null, ship: null});
      }
    }
  
    return board;
  }

  //clear the board
  const clearBoard = function () {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = {hit: null, ship: null};
      }
    }
  }

  //insert ship to the right starting at specified row & column.
  //accepts ship type as well
  //only insert if square is empty and if ship type has not been entered before
  const insertShipRight = function (row, column, shipType) {
    //insert ship object to right by number of length units(depending on type)
    if (this.board[row][column + (Ship(shipType).length -1)] !== undefined
    && this.ships[`${shipType}`].placed === false) {
      for (let i = 0; i < Ship(shipType).length; i++) {
        this.board[row][column + i].ship = shipType;
      }
      this.ships[`${this.board[row][column].ship}`].placed = true;
    }
  };

  const insertShipDown = function (row, column, shipType) {
    if (this.board[row + (Ship(shipType).length -1)][column] !== undefined
    && this.ships[`${shipType}`].placed === false) {
      for (let i = 0; i < Ship(shipType).length; i++) {
        this.board[row + i][column].ship = shipType;
      }
      this.ships[`${this.board[row][column].ship}`].placed = true;
    }
  };

  const insertShipLeft = function (row, column, shipType) {
    if (this.board[row][column - (Ship(shipType).length -1)] !== undefined
    && this.ships[`${shipType}`].placed === false) {
      for (let i = 0; i < Ship(shipType).length; i++) {
        this.board[row][column - i].ship = shipType;
      }
      this.ships[`${this.board[row][column].ship}`].placed = true;
    }
  };

  const insertShipUp = function (row, column, shipType) {
    if (this.board[row - (Ship(shipType).length -1)][column] !== undefined
    && this.ships[`${shipType}`].placed === false) {
      for (let i = 0; i < Ship(shipType).length; i++) {
        this.board[row - i][column].ship = shipType;
      }
      this.ships[`${this.board[row][column].ship}`].placed = true;
    }
  };

  //places a ship of the selected type & in the selected direction
  const placeSelectedShip = function (row, column, shipType, shipDirection) {
    if (shipDirection === 'right') this.insertShipRight(row, column, shipType);
    else if (shipDirection === 'down') this.insertShipDown(row, column, shipType);
    else if (shipDirection === 'left') this.insertShipLeft(row, column, shipType);
    else if (shipDirection === 'up') this.insertShipUp(row, column, shipType);
  }

  //register a hit or miss on board square. if ship is hit, add a hit to it.
  //if a ship is hit, check if it is sunk
  const receiveAttack = function (row, column) {
    if (this.board[row][column].ship !== null && this.board[row][column].hit !== true) {
      this.board[row][column].hit = true;
      this.ships[`${this.board[row][column].ship}`].hit();
      this.ships[`${this.board[row][column].ship}`].isSunk();
    } 
    else if (this.board[row][column].ship === null) 
      this.board[row][column].hit = false;
  };

  //check if all ships are placed on game board
  const shipsAreReady = function () {
    const ships = this.ships;
  
    if (ships.carrier.placed === true && ships.battleship.placed === true &&
      ships.cruiser.placed === true && ships.submarine.placed === true &&
      ships.destroyer.placed === true) 
        return true;
    else return false;
  }

  //check if all ships on game board are sunk (yes-true/no-false)
  const allShipsSunk = function () {
    let sunkShips = 0;

    for(const ship in this.ships) {
      if(this.ships[ship].sunk === true) sunkShips += 1;
    }

    if (sunkShips === 5) return true;
    else return false;
  }

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
    clearBoard
  }
};

export { Gameboard };