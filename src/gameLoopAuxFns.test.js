import { CreatePlayers, clearObject, updateRound, updateScore, 
  createScoresArray,
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
  let roundIsOver = 0;

  roundIsOver = roundOver();

  expect(roundIsOver).toBe(false);

  player2.attack(0, 0);
  player2.attack(0, 1);
  player2.attack(0, 2);
  player2.attack(1, 0);
  player2.attack(1, 1);
  player2.attack(1, 2);
  player2.attack(1, 3);
  player2.attack(2, 0);
  player2.attack(2, 1);
  player2.attack(3, 0);
  player2.attack(3, 1);
  player2.attack(3, 2);
  player2.attack(3, 3);
  player2.attack(3, 4);
  player2.attack(4, 0);
  player2.attack(4, 1);
  player2.attack(4, 2);
  roundIsOver = roundOver()

  expect(roundIsOver).toBe(true);
});

it('Update score when round is over', () => {

});