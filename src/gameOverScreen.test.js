import { gameScreenContent } from "./gameScreen";
import { placeShipsScreenContent } from "./placeShipsScreen";
import { welcomeScreenContent } from "./welcomeScreen";
import { gameOverScreen } from "./gameOverScreen";

describe('game over screen', () => {
  document.body.innerHTML = 
    `<div id="container">` +
    `</div>`;

  it('generates game over screen', () => {
    welcomeScreenContent();
    placeShipsScreenContent();
    gameScreenContent();
    gameOverScreen();

    expect(document.body.innerHTML).toBe(
      '<div id="container">' +
        '<div class="game-over-screen">' +
          '<div class="avatar-one">' +
            '<img class="image">' +
          '</div>' +
          '<div class="middle-div">' +
            '<p class="text">Game Over!</p>' +
            '<p class="winner"></p>' +
            '<button class="restart-game">Restart?</button>' +
          '</div>' +
          '<div class="avatar-two">' +
            '<img class="image">' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  })
});
