import { insertDOMel, removeAllChildNodes }
  from './auxFnsDOM';
import { generatePlaceShipsScreen } from './placeShipsScreen';
import {
  toggleSound, clickSoundEventListeners, playAudio,
  stopAudio,
} from './gameSound';

// generate the welcome screen content
const welcomeScreenContent = () => {
  const container = document.querySelector('#container');

  removeAllChildNodes(container);// clear #container of all children

  const welcomeScreen = insertDOMel('div', container, 'welcome-screen');
  const gameTitle = insertDOMel('h1', welcomeScreen, 'game-title', 'BATTLESHIP');
  const startGameButton = insertDOMel('button', welcomeScreen, 'start-game');
  const soundButton = insertDOMel('button', welcomeScreen, 'sound-button');
  soundButton.classList.add('muted');
};

// event listeners
const welcomeScreenEventListeners = () => {
  // sound button
  const soundButton = document.querySelector('.sound-button');
  soundButton.addEventListener('click', () => {
    gameData.muted = toggleSound(gameData);// toggle muted property
    // add/remove muted class & stop/play the welcome song
    if (gameData.muted === true) {
      soundButton.classList.add('muted');
      stopAudio(welcomeSong);
    } else {
      soundButton.classList.remove('muted');
      playAudio(welcomeSong);
    }
  });
  // start button
  const startGameButton = document.querySelector('.start-game');
  startGameButton.addEventListener('click', () => {
    stopAudio(welcomeSong);// stop the welcome screen song
    generatePlaceShipsScreen();// generate next screen, for placing ships
  });

  clickSoundEventListeners();
};

// add event listener after gen. screen content as well
const generateWelcomeScreen = () => {
  welcomeScreenContent();
  welcomeScreenEventListeners();
};

export {
  welcomeScreenContent, generateWelcomeScreen,
  welcomeScreenEventListeners,
};
