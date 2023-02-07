import {selectDOMel, selectDOMelAll, insertDOMel} from "./auxFnsDOM";

//generate the welcome screen
const welcomeScreen = () => {
  const container = selectDOMel('#container');
  const welcomeScreen = insertDOMel('div', container);
  const gameTitle = insertDOMel('h1', welcomeScreen);
  const startGameButton = insertDOMel('button', welcomeScreen);
  const soundButton = insertDOMel('button', welcomeScreen);

  welcomeScreen.classList.add('welcome-screen');
  gameTitle.classList.add('game-title');
  startGameButton.classList.add('start-game');
  soundButton.classList.add('sound-button');

  gameTitle.textContent = 'BATTLESHIP';
  startGameButton.textContent = 'Start';

}

export {welcomeScreen};