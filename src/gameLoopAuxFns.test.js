import { CreatePlayers, clearObject, updateRound, updateScore, 
  createScoresArray, roundOver, determineRoundWinner, gameOver,
  determineGameWinner,
}
  from "./gameLoopAuxFns";
import { Player } from "./player";

it('Can remove players with clearObject fn', () => {
  let players = CreatePlayers();
  clearObject(players);
  
  expect(players).toMatchObject({});
});

it('Can add players again after removing them once', () => {
  let players = CreatePlayers();
  clearObject(players);
  players = CreatePlayers();

  expect(players.player1).not.toBe(undefined);
  expect(players.player2).not.toBe(undefined);
});

it('Increase round number', () => {
  let roundNumber = 1;
  roundNumber = updateRound(roundNumber);
  roundNumber = updateRound(roundNumber);

  expect(roundNumber).toBe(3);
});

it('Increase player score depending on who is the winner', () => {
  let playerScores = [0, 0];
  let roundWinner = 1;
  updateScore(roundWinner, playerScores);
  expect(playerScores[0]).toBe(1);
  expect(playerScores[1]).toBe(0);
  roundWinner = 2;
  updateScore(roundWinner, playerScores);
  expect(playerScores[0]).toBe(1);
  expect(playerScores[1]).toBe(1);
});

it('Round is over when all ships of either player are sunk', () => {
  let player1 = Player();
  let player2 = Player();
  player1.gameBoard.insertShipRight(0, 0, 'cruiser');
  player1.gameBoard.insertShipRight(1, 0, 'battleship');
  player1.gameBoard.insertShipRight(2, 0, 'destroyer');
  player1.gameBoard.insertShipRight(3, 0, 'carrier');
  player1.gameBoard.insertShipRight(4, 0, 'submarine');
  let roundIsOver;

  roundIsOver = roundOver(player1.gameBoard, player2.gameBoard);
  
  expect(roundIsOver).toBe(false);
  
  player2.attack(0, 0, player1);
  player2.attack(0, 1, player1);
  player2.attack(0, 2, player1);
  player2.attack(1, 0, player1);
  player2.attack(1, 1, player1);
  player2.attack(1, 2, player1);
  player2.attack(1, 3, player1);
  player2.attack(2, 0, player1);
  player2.attack(2, 1, player1);
  player2.attack(3, 0, player1);
  player2.attack(3, 1, player1);
  player2.attack(3, 2, player1);
  player2.attack(3, 3, player1);
  player2.attack(3, 4, player1);
  player2.attack(4, 0, player1);
  player2.attack(4, 1, player1);
  player2.attack(4, 2, player1);
  roundIsOver = roundOver(player1.gameBoard, player2.gameBoard);

  expect(roundIsOver).toBe(true);
});

it('Determine the winner after round is over', () => {
  let player1 = Player();
  let player2 = Player();
  let roundIsOver;
  let roundWinner;

  player1.gameBoard.insertShipRight(0, 0, 'cruiser');
  player1.gameBoard.insertShipRight(1, 0, 'battleship');
  player1.gameBoard.insertShipRight(2, 0, 'destroyer');
  player1.gameBoard.insertShipRight(3, 0, 'carrier');
  player1.gameBoard.insertShipRight(4, 0, 'submarine');
  player2.attack(0, 0, player1);
  player2.attack(0, 1, player1);
  player2.attack(0, 2, player1);
  player2.attack(1, 0, player1);
  player2.attack(1, 1, player1);
  player2.attack(1, 2, player1);
  player2.attack(1, 3, player1);
  player2.attack(2, 0, player1);
  player2.attack(2, 1, player1);
  player2.attack(3, 0, player1);
  player2.attack(3, 1, player1);
  player2.attack(3, 2, player1);
  player2.attack(3, 3, player1);
  player2.attack(3, 4, player1);
  player2.attack(4, 0, player1);
  player2.attack(4, 1, player1);
  player2.attack(4, 2, player1);
  roundIsOver = roundOver(player1.gameBoard, player2.gameBoard);

  roundWinner = determineRoundWinner(player1.gameBoard, player2.gameBoard);
  expect(roundWinner).toBe(2);
});

it('Game is over after fifth round', () => {
  let roundNumber = 5;
  let isGameOver;
  
  isGameOver = gameOver(roundNumber);
  expect(isGameOver).toBe(false);

  roundNumber = updateRound(roundNumber);

  isGameOver = gameOver(roundNumber);
  expect(isGameOver).toBe(true);
});

it('Determine winner after game is over', () => {
  let gameWinner;
  let playerScores = [2, 3];

  gameWinner = determineGameWinner(playerScores);
  expect(gameWinner).toBe(2);
})