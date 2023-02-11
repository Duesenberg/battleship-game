import { clearObject, updateRound, updateScore, 
  roundOver, determineRoundWinner, gameOver,
  determineGameWinner, GenerateGameData, setShipType, setShipDirection 
}
  from "./gameLoopAuxFns";
import { Player } from "./player";

it('Can remove game data with clearObject fn', () => {
  let gameData = GenerateGameData();
  clearObject(gameData);
  
  expect(gameData).toMatchObject({});
});

it('Can add game data again after removing once', () => {
  let gameData = GenerateGameData();
  clearObject(gameData);
  gameData = GenerateGameData();

  expect(gameData.player1).not.toBe(undefined);
  expect(gameData.player2).not.toBe(undefined);
  expect(gameData.round).not.toBe(undefined);
  expect(gameData.score).not.toBe(undefined);
  expect(gameData.roundWinner).not.toBe(undefined);
  expect(gameData.roundIsOver).not.toBe(undefined);
  expect(gameData.gameIsOver).not.toBe(undefined);
  expect(gameData.gameWinner).not.toBe(undefined);
  expect(gameData.shipPlacement).not.toBe(undefined);
});

it('Increase round number', () => {
  let gameData = GenerateGameData();
  gameData.round = updateRound(gameData.round);
  gameData.round = updateRound(gameData.round);

  expect(gameData.round).toBe(3);
});

it('Increase player score depending on who is the winner', () => {
  let gameData = GenerateGameData();
  gameData.roundWinner = 1;
  updateScore(gameData.roundWinner, gameData.score);
  expect(gameData.score[0]).toBe(1);
  expect(gameData.score[1]).toBe(0);
  gameData.roundWinner = 2;
  updateScore(gameData.roundWinner, gameData.score);
  expect(gameData.score[0]).toBe(1);
  expect(gameData.score[1]).toBe(1);
});

it('Round is over when all ships of either player are sunk', () => {
  let gameData = GenerateGameData();
  gameData.player1.gameBoard.insertShipRight(0, 0, 'cruiser');
  gameData.player1.gameBoard.insertShipRight(1, 0, 'battleship');
  gameData.player1.gameBoard.insertShipRight(2, 0, 'destroyer');
  gameData.player1.gameBoard.insertShipRight(3, 0, 'carrier');
  gameData.player1.gameBoard.insertShipRight(4, 0, 'submarine');

  gameData.roundIsOver = roundOver(gameData.player1.gameBoard, gameData.player2.gameBoard);
  
  expect(gameData.roundIsOver).toBe(false);
  
  gameData.player2.attack(0, 0, gameData.player1);
  gameData.player2.attack(0, 1, gameData.player1);
  gameData.player2.attack(0, 2, gameData.player1);
  gameData.player2.attack(1, 0, gameData.player1);
  gameData.player2.attack(1, 1, gameData.player1);
  gameData.player2.attack(1, 2, gameData.player1);
  gameData.player2.attack(1, 3, gameData.player1);
  gameData.player2.attack(2, 0, gameData.player1);
  gameData.player2.attack(2, 1, gameData.player1);
  gameData.player2.attack(3, 0, gameData.player1);
  gameData.player2.attack(3, 1, gameData.player1);
  gameData.player2.attack(3, 2, gameData.player1);
  gameData.player2.attack(3, 3, gameData.player1);
  gameData.player2.attack(3, 4, gameData.player1);
  gameData.player2.attack(4, 0, gameData.player1);
  gameData.player2.attack(4, 1, gameData.player1);
  gameData.player2.attack(4, 2, gameData.player1);
  gameData.roundIsOver = roundOver(gameData.player1.gameBoard, gameData.player2.gameBoard);

  expect(gameData.roundIsOver).toBe(true);
});

it('Determine the winner after round is over', () => {
  let gameData = GenerateGameData();

  gameData.player1.gameBoard.insertShipRight(0, 0, 'cruiser');
  gameData.player1.gameBoard.insertShipRight(1, 0, 'battleship');
  gameData.player1.gameBoard.insertShipRight(2, 0, 'destroyer');
  gameData.player1.gameBoard.insertShipRight(3, 0, 'carrier');
  gameData.player1.gameBoard.insertShipRight(4, 0, 'submarine');
  gameData.player2.attack(0, 0, gameData.player1);
  gameData.player2.attack(0, 1, gameData.player1);
  gameData.player2.attack(0, 2, gameData.player1);
  gameData.player2.attack(1, 0, gameData.player1);
  gameData.player2.attack(1, 1, gameData.player1);
  gameData.player2.attack(1, 2, gameData.player1);
  gameData.player2.attack(1, 3, gameData.player1);
  gameData.player2.attack(2, 0, gameData.player1);
  gameData.player2.attack(2, 1, gameData.player1);
  gameData.player2.attack(3, 0, gameData.player1);
  gameData.player2.attack(3, 1, gameData.player1);
  gameData.player2.attack(3, 2, gameData.player1);
  gameData.player2.attack(3, 3, gameData.player1);
  gameData.player2.attack(3, 4, gameData.player1);
  gameData.player2.attack(4, 0, gameData.player1);
  gameData.player2.attack(4, 1, gameData.player1);
  gameData.player2.attack(4, 2, gameData.player1);
  gameData.roundIsOver = roundOver(gameData.player1.gameBoard, gameData.player2.gameBoard);

  gameData.roundWinner = determineRoundWinner(gameData.player1.gameBoard, gameData.player2.gameBoard);
  expect(gameData.roundWinner).toBe(2);
});

it('Game is over after fifth round', () => {
  let gameData = GenerateGameData();
  
  gameData.gameIsOver = gameOver(gameData.round);
  expect(gameData.gameIsOver).toBe(false);

  gameData.round = updateRound(gameData.round);
  gameData.round = updateRound(gameData.round);
  gameData.round = updateRound(gameData.round);
  gameData.round = updateRound(gameData.round);
  gameData.round = updateRound(gameData.round);

  gameData.gameIsOver = gameOver(gameData.round);
  expect(gameData.gameIsOver).toBe(true);
});

it('Determine winner after game is over', () => {
  let gameData = GenerateGameData();
  gameData.score = [2, 3];

  gameData.gameWinner = determineGameWinner(gameData.score);
  expect(gameData.gameWinner).toBe(2);
})

it('changes selected ship & placement direction successfully', () => {
  let gameData = GenerateGameData();

  gameData.shipPlacement[0] = setShipType('destroyer');
  gameData.shipPlacement[1] = setShipDirection('up');

  expect(gameData.shipPlacement).toStrictEqual(['destroyer', 'up']);
})