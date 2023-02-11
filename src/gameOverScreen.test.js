import { gameScreen } from "./gameScreen";
import { placeShipsScreen } from "./placeShipsScreen";
import { welcomeScreen } from "./welcomeScreen";
import { gameOverScreen } from "./gameOverScreen";

describe('game over screen', () => {
  document.body.innerHTML = 
    `<div id="container">` +
    `</div>`;

  it('generates game over screen', () => {
    welcomeScreen();
    placeShipsScreen();
    gameScreen();
    gameOverScreen();

    expect(document.body.innerHTML).toBe(
      '<div id="container">' +
        '<div class="screen">' +
          '<div class="avatar-one">' +
            '<img class="image">' +
          '</div>' +
          '<div class="middle-div">' +
            '<p class="text">Game Over!</p>' +
            '<p class="winner"></p>' +
          '</div>' +
          '<div class="avatar-two">' +
            '<img class="image">' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  })
});
