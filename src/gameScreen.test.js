import { clearObject, gameOver,
  determineGameWinner, GenerateGameData, setShipType, setShipDirection } 
  from "./game";
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
      `<div class="game-screen">` +
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
        `<div class="options">` +
          `<button class="logo"></button>` +
          `<button class="restart-game-button">Restart</button>` +
          `<button class="toggle-sound"></button>` +
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

  it('brings confirmation window when restart is clicked', () => {

  });

  it('restarts game when yes is clicked on the confirmation menu', () => {

  });

  it('adds occupied class on squares with ships', () => {
    let gameData = GenerateGameData();

    gameScreenContent();

    const playerOneBoardSquares = document.querySelectorAll('.pone-board .board-square');
    
    playerOneBoardSquares.forEach(square => {
      let row = parseInt(square.getAttribute('data-row'));
      let column = parseInt(square.getAttribute('data-column'));
      
      if (gameData.player1.gameBoard.board[row][column].ship !== null) {
        square.classList.add('occupied');
      }
    });
    const square1 = document.querySelector('[data-row="0"][data-column="0"]');
    const square2 = document.querySelector('[data-row="0"][data-column="1"]');
    const square3 = document.querySelector('[data-row="0"][data-column="2"]');
    expect(square1.className).toBe('board-square');
    expect(square2.className).toBe('board-square');
    expect(square3.className).toBe('board-square');
    
    gameData.player1.gameBoard.placeSelectedShip(0, 0, 'cruiser', 'right');    
    playerOneBoardSquares.forEach(square => {
      let row = parseInt(square.getAttribute('data-row'));
      let column = parseInt(square.getAttribute('data-column'));
  
      if (gameData.player1.gameBoard.board[row][column].ship !== null) {
        square.classList.add('occupied');
      }
    });
    expect(square1.className).toBe('board-square occupied');
    expect(square2.className).toBe('board-square occupied');
    expect(square3.className).toBe('board-square occupied');
  });

  it('adds class of hit on board squares which have been clicked on or hit', () => {
    let gameData = GenerateGameData();

    gameScreenContent();

    gameData.player1.gameBoard.placeSelectedShip(0, 0, 'carrier', 'right');
    gameData.player2.gameBoard.placeSelectedShip(0, 0, 'carrier', 'right');

    gameData.player1.attack(0, 1, gameData.player2);
    gameData.player1.attack(1, 0, gameData.player2);
    gameData.player2.attack(0, 0, gameData.player1);

    const playerOneBoardSquares = document.querySelectorAll('.pone-board .board-square');
    const playerTwoBoardSquares = document.querySelectorAll('.ptwo-board .board-square');

    playerOneBoardSquares.forEach(square => {
      let row = parseInt(square.getAttribute('data-row'));
      let column = parseInt(square.getAttribute('data-column'));
  
      if (gameData.player1.gameBoard.board[row][column].hit === true) {
        square.classList.add('hit');
      } else if (gameData.player1.gameBoard.board[row][column].hit === false) {
        square.classList.add('miss');
      }
    });
    playerTwoBoardSquares.forEach(square => {
      let row = parseInt(square.getAttribute('data-row'));
      let column = parseInt(square.getAttribute('data-column'));
  
      if (gameData.player2.gameBoard.board[row][column].hit === true) {
        square.classList.add('hit');
      } else if (gameData.player2.gameBoard.board[row][column].hit === false) {
        square.classList.add('miss');
      }
    });

    const pOneSquareWithShip = document.querySelector('.pone-board [data-row="0"][data-column="0"]');
    const pTwoSquareNoShip = document.querySelector('.ptwo-board [data-row="1"][data-column="0"]');
    const pTwoSquareWithShip = document.querySelector('.ptwo-board [data-row="0"][data-column="1"]');

    expect(pOneSquareWithShip.className).toBe('board-square hit');
    expect(pTwoSquareNoShip.className).toBe('board-square miss');
    expect(pTwoSquareWithShip.className).toBe('board-square hit');
  });
});