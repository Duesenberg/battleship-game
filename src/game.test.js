import { clearObject, updateRound, updateScore, 
  roundOver, determineRoundWinner, gameOver,
  determineGameWinner, GenerateGameData, setShipType, setShipDirection 
}
  from "./game.js";
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
  expect(gameData.playerTurn).not.toBe(undefined);
  expect(gameData.gameWinner).not.toBe(undefined);
  expect(gameData.shipPlacement).not.toBe(undefined);
});

it('changes selected ship & placement direction successfully', () => {
  let gameData = GenerateGameData();

  gameData.shipPlacement[0] = setShipType('destroyer');
  gameData.shipPlacement[1] = setShipDirection('up');

  expect(gameData.shipPlacement).toStrictEqual(['destroyer', 'up']);
})