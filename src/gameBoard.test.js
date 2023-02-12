import {  Gameboard } from "./gameBoard";

it('Generate 10x10 matrix with info if a square is hit & the ship it contains', () => {
  const gameBoard = Gameboard();

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      expect(gameBoard.board[i][j]).toMatchObject({hit: null, ship: null});
    }
  };

});

//same type of logic used when inserting down, left and up, should work the same
it('Ship insertion: Ship object present in cells once inserted at [0][0]', () => {
  const hit = expect.any(Function);
  const isSunk = expect.any(Function);  

  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 0, 'cruiser');
  const boardPiece = {
    hit: null,
    ship: 'cruiser'
  };
  
  expect(gameBoard.board[0][0]).toMatchObject(boardPiece);
  expect(gameBoard.board[0][1]).toMatchObject(boardPiece);
  expect(gameBoard.board[0][2]).toMatchObject(boardPiece);

  //rest of board
  for (let i = 3; i < 10; i++) {
    expect(gameBoard.board[0][i]).toMatchObject({hit: null, ship: null});
  };
  for (let j = 1; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      expect(gameBoard.board[j][k]).toMatchObject({hit: null, ship: null});
    }
  }
});

it('can clear the board of all placed ships', () => {
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 0, 'cruiser');
  const boardPiece = {
    hit: null,
    ship: 'cruiser'
  };
  
  expect(gameBoard.board[0][0]).toMatchObject(boardPiece);
  expect(gameBoard.board[0][1]).toMatchObject(boardPiece);
  expect(gameBoard.board[0][2]).toMatchObject(boardPiece);

  gameBoard.clearBoard();

  expect(gameBoard.board[0][0]).toMatchObject({hit: null, ship: null});
  expect(gameBoard.board[0][1]).toMatchObject({hit: null, ship: null});
  expect(gameBoard.board[0][2]).toMatchObject({hit: null, ship: null});
});

it('Ship insertion: Dont populate board if ship goes out of board bounds', () => {
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 8, 'cruiser');

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      expect(gameBoard.board[i][j]).toMatchObject({hit: null, ship: null});
    }
  };  
})

it('Record a hit on board when a square with a ship is receiveAttacked', () => {
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 0, 'cruiser');
  gameBoard.receiveAttack(0, 0);

  expect(gameBoard.board[0][0].hit).toBe(true);
});

it('Record a miss on board when a square without a ship is receiveAttacked', () => {
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 0, 'cruiser');
  gameBoard.receiveAttack(0, 3);

  expect(gameBoard.board[0][3].hit).toBe(false);
});

it('Track hits of shiptype', () => {
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 0, 'cruiser');
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(0, 2);
  
  expect(gameBoard.ships.cruiser.hits).toBe(2);
});

it('Cant hit same spot twice', () => {
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 0, 'cruiser');
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(0, 2);
  gameBoard.receiveAttack(0, 2);
  
  expect(gameBoard.ships.cruiser.hits).toBe(2);
});

it('Record ship as sunk after each of its squares are hit', () => {
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 0, 'cruiser');
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(0, 1);
  gameBoard.receiveAttack(0, 2);
  
  expect(gameBoard.ships.cruiser.sunk).toBe(true);
});

it('Check if all ships are placed by the player', () => {
  let shipsArePlaced = false;
  const gameBoard = Gameboard();
  shipsArePlaced = gameBoard.shipsAreReady();
  
  expect(shipsArePlaced).toBe(false);

  gameBoard.insertShipRight(0, 0, 'cruiser');
  gameBoard.insertShipRight(1, 0, 'battleship');
  gameBoard.insertShipRight(2, 0, 'carrier');
  gameBoard.insertShipRight(3, 0, 'submarine');
  gameBoard.insertShipRight(4, 0, 'destroyer');
  shipsArePlaced = gameBoard.shipsAreReady();

  expect(shipsArePlaced).toBe(true);
});

it('Cant insert same ship twice', () => {
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 0, 'cruiser');
  gameBoard.insertShipRight(1, 0, 'cruiser');

  expect(gameBoard.board[1][0]).toMatchObject({hit: null, ship: null});
});

it('Check if all ships on player game board are sunk', () => {
  let allShipsSunk;
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 0, 'cruiser');
  gameBoard.insertShipRight(1, 0, 'battleship');
  gameBoard.insertShipRight(2, 0, 'destroyer');
  gameBoard.insertShipRight(3, 0, 'carrier');
  gameBoard.insertShipRight(4, 0, 'submarine');

  allShipsSunk = gameBoard.allShipsSunk();
  expect(allShipsSunk).toBe(false);

  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(0, 1);
  gameBoard.receiveAttack(0, 2);
  gameBoard.receiveAttack(1, 0);
  gameBoard.receiveAttack(1, 1);
  gameBoard.receiveAttack(1, 2);
  gameBoard.receiveAttack(1, 3);
  gameBoard.receiveAttack(2, 0);
  gameBoard.receiveAttack(2, 1);
  gameBoard.receiveAttack(3, 0);
  gameBoard.receiveAttack(3, 1);
  gameBoard.receiveAttack(3, 2);
  gameBoard.receiveAttack(3, 3);
  gameBoard.receiveAttack(3, 4);
  gameBoard.receiveAttack(4, 0);
  gameBoard.receiveAttack(4, 1);
  gameBoard.receiveAttack(4, 2);

  allShipsSunk = gameBoard.allShipsSunk();
  expect(allShipsSunk).toBe(true);
});

it('places ship in the selected direction', () => {
  const gameBoard = Gameboard();
  const boardPiece = {
    hit: null,
    ship: 'cruiser'
  };
  gameBoard.placeSelectedShip(0, 0, 'cruiser', 'right');
  
  expect(gameBoard.board[0][0]).toMatchObject(boardPiece);
  expect(gameBoard.board[0][1]).toMatchObject(boardPiece);
  expect(gameBoard.board[0][2]).toMatchObject(boardPiece);
});

it('doesnt place ship if out of bounds', () => {
  const gameBoard = Gameboard();
  gameBoard.placeSelectedShip(0, 8, 'cruiser', 'right');

  expect(gameBoard.board[0][8]).toMatchObject({hit: null, ship: null});
  expect(gameBoard.board[0][9]).toMatchObject({hit: null, ship: null});
});

it('doesnt place ship if square is populated', () => {
  const gameBoard = Gameboard();
  gameBoard.placeSelectedShip(0, 0, 'cruiser', 'right');
  gameBoard.placeSelectedShip(0, 0, 'cruiser', 'down');
  const boardPiece = {
    hit: null,
    ship: 'cruiser'
  };

  expect(gameBoard.board[0][0]).toMatchObject(boardPiece);
  expect(gameBoard.board[1][0]).toMatchObject({hit: null, ship: null});
  expect(gameBoard.board[2][0]).toMatchObject({hit: null, ship: null});
});

