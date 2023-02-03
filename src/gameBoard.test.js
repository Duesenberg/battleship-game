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
it('Ship insertion-right: Ship object present in cells once inserted at [0][0]', () => {
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

it('Ship insertion-right: Dont populate board if ship goes out of board bounds', () => {
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 8, 'cruiser');

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      expect(gameBoard.board[i][j]).toMatchObject({hit: null, ship: null});
    }
  };  
})

it('Record a hit on board when a square with a ship is attacked', () => {
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 0, 'cruiser');
  gameBoard.receiveAttack(0, 0);

  expect(gameBoard.board[0][0].hit).toBe(true);
});

it('Record a miss on board when a square without a ship is attacked', () => {
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