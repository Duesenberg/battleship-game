import {  Gameboard } from "./gameBoard";
import { Ship } from "./ship";

it('Generates empty 10x10 matrix', () => {
  const matrix = {
   board: [
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []]
  ],
  }

  expect(Gameboard()).toMatchObject(matrix);
});

it('Ship insertion-right: Ship object present in cells once inserted at [0][0]', () => {
  const hit = expect.any(Function);
  const isSunk = expect.any(Function);  

  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 0, 'cruiser');
  const ship = {
    shipType: 'cruiser',
    length: 3,
    hits: 0,
    sunk: false,
    hit,
    isSunk
  };
  const matrix = {
    board: [
     [ ship, ship, ship, [], [], [], [], [], [], []],
     [[], [], [], [], [], [], [], [], [], []],
     [[], [], [], [], [], [], [], [], [], []],
     [[], [], [], [], [], [], [], [], [], []],
     [[], [], [], [], [], [], [], [], [], []],
     [[], [], [], [], [], [], [], [], [], []],
     [[], [], [], [], [], [], [], [], [], []],
     [[], [], [], [], [], [], [], [], [], []],
     [[], [], [], [], [], [], [], [], [], []],
     [[], [], [], [], [], [], [], [], [], []]
   ],
   };
  
   //cells with ship
   expect(gameBoard.board[0][0]).toMatchObject(matrix.board[0][0]);
   expect(gameBoard.board[0][1]).toMatchObject(matrix.board[0][1]);
   expect(gameBoard.board[0][2]).toMatchObject(matrix.board[0][2]);
   
   //cells without ship
   expect(gameBoard.board[0][3]).toMatchObject(matrix.board[0][3]);
   expect(gameBoard.board[1][0]).toMatchObject(matrix.board[1][0]);
});

it('Ship insertion-right: Dont populate board if ship goes out of board bounds', () => {
  const gameBoard = Gameboard();
  gameBoard.insertShipRight(0, 8, 'cruiser');

  expect(gameBoard.board[0][8]).toStrictEqual([]);  
  expect(gameBoard.board[0][9]).toStrictEqual([]);  
})