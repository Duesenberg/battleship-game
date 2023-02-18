import { clearObject, updateRound, updateScore, 
  roundOver, determineRoundWinner, gameOver,
  determineGameWinner, GenerateGameData, setShipType, setShipDirection } from "./gameLoopAuxFns";
import { gameScreenContent, hitDisplays, generateGameScreen } from "./gameScreen";
import { placeShipsScreenContent } from "./placeShipsScreen";
import { welcomeScreenContent } from "./welcomeScreen";

describe('game screen', () => {
  document.body.innerHTML = 
    `<div id="container">` +
    `</div>`;

  let boardSquaresString = '';

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      boardSquaresString += `<div class="board-square" data-row="${i}" data-column="${j}"></div>`;
    }
  }

  it('generates game screen', () => {
    welcomeScreenContent();
    placeShipsScreenContent();
    gameScreenContent();

    expect(document.body.innerHTML).toBe(
    `<div id="container">` +
      `<div class="screen">` +
        `<div class="header">` +
          `<h1 class="title">Battleship</h1>` +
        `</div>` +
        `<div class="pone-stats">` +
          `<p class="title">Player 1</p>` +
          `<div class="stats">` +
            `<p class="hits-title">Hits received:</p>` +
            `<div class="playerone-hits">` +
              `<p class="carrier">Carrier:</p>` +
              `<div class="carrier-hits"></div>` +
              `<p class="battleship">Battleship:</p>` +
              `<div class="battleship-hits"></div>` +
              `<p class="cruiser">Cruiser:</p>` +
              `<div class="cruiser-hits"></div>` +
              `<p class="submarine">Submarine:</p>` +
              `<div class="submarine-hits"></div>` +
              `<p class="destroyer">Destroyer:</p>` +
              `<div class="destroyer-hits"></div>` +
            `</div>` +
          `</div>` +
        `</div>` +
        `<div class="ptwo-stats">` +
          `<p class="title">Player 2</p>` +
          `<div class="stats">` +
            `<p class="hits-title">Hits received:</p>` +
            `<div class="playertwo-hits">` +
              `<p class="carrier">Carrier:</p>` +
              `<div class="carrier-hits"></div>` +
              `<p class="battleship">Battleship:</p>` +
              `<div class="battleship-hits"></div>` +
              `<p class="cruiser">Cruiser:</p>` +
              `<div class="cruiser-hits"></div>` +
              `<p class="submarine">Submarine:</p>` +
              `<div class="submarine-hits"></div>` +
              `<p class="destroyer">Destroyer:</p>` +
              `<div class="destroyer-hits"></div>` +
            `</div>` +
          `</div>` +
        `</div>` +
        `<div class="pone-board">` +
          boardSquaresString +
        `</div>` +
        `<div class="ptwo-board">` +
          boardSquaresString +
        `</div>` +
        `<div class="round-stats">` +
          `<div class="round-number-container">` +
            `<p class="text">Round</p>` +
            `<div class="round-number"></div>` +
          `</div>` +
          `<div class="score-container">` +
            `<p class="text">Score</p>` +
            `<div class="score"></div>` +
          `</div>` +
          `<button class="restart-game-button">Restart</button>` +
          `<button class="toggle-sound"></button>` +
          `<button class="logo"></button>` +
        `</div>` +
      `</div>` +
    `</div>`);
  });

  it('displays ship hits of both players', () => {
    let gameData = GenerateGameData();

    gameScreenContent();

    gameData.player1.gameBoard.placeSelectedShip(0, 0, 'carrier', 'right');
    gameData.player2.gameBoard.placeSelectedShip(0, 0, 'carrier', 'right');

    const pOneCarrierHits = document.querySelector('.playerone-hits .carrier-hits');
      const pTwoCarrierHits = document.querySelector('.playertwo-hits .carrier-hits');

    pOneCarrierHits.textContent = gameData.player1.gameBoard.ships.carrier.hits;
      pTwoCarrierHits.textContent = gameData.player2.gameBoard.ships.carrier.hits;
    
  
    expect(pOneCarrierHits.textContent).toBe('0');
    expect(pTwoCarrierHits.textContent).toBe('0');
    
    gameData.player1.attack(0, 0, gameData.player2);
    gameData.player1.attack(0, 1, gameData.player2);
    gameData.player2.attack(0, 0, gameData.player1);

    //need to re-assign textContent value. should add this to the eventListener
    pOneCarrierHits.textContent = gameData.player1.gameBoard.ships.carrier.hits;
    pTwoCarrierHits.textContent = gameData.player2.gameBoard.ships.carrier.hits;

    expect(pOneCarrierHits.textContent).toBe('1');
    expect(pTwoCarrierHits.textContent).toBe('2');
  });

  it('displays round number', () => {

  });

  it('displays score', () => {

  });

  it('brings confirmation window when restart is clicked', () => {

  });

  it('restarts game when yes is clicked on the confirmation menu', () => {

  });

  it('adds occupied class on squares with ships', () => {

  });

  it('adds class of hit on board squares which have been clicked on or hit by computer', () => {

  });
});