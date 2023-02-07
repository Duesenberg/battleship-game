import { selectDOMelAll, insertDOMel, selectDOMel, welcomeScreen } 
  from "./welcomeScreen";

describe('welcomeScr', () => {
  document.body.innerHTML = `<div id="container"></div>`;

  it('should generate welcome screen parent, title and two buttons', () => {
    welcomeScreen();
    
    expect(document.body.innerHTML).toBe(`<div id="container"><div class="welcome-screen"><h1 class="game-title">BATTLESHIP</h1><button class="start-game">Start</button><button class="sound-button"></button></div></div>`);
  });
});