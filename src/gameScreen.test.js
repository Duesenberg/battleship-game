import { gameScreen } from "./gameScreen";
import { placeShipsScreenContent } from "./placeShipsScreen";
import { welcomeScreenContent } from "./welcomeScreen";

describe('game screen', () => {
  document.body.innerHTML = 
    `<div id="container">` +
    `</div>`;

  it('generates game screen', () => {
    welcomeScreenContent();
    placeShipsScreenContent();
    gameScreen();

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
            `<div class="hits">` +
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
            `<div class="hits">` +
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
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
        `</div>` +
        `<div class="ptwo-board">` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
          `<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>` +
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
});