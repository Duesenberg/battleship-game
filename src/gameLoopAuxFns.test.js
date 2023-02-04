import { CreatePlayers, clearObject } from "./gameLoopAuxFns";
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