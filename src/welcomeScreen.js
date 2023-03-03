import {insertDOMel, removeAllChildNodes} 
  from "./auxFnsDOM";
import { generatePlaceShipsScreen } from "./placeShipsScreen";
import { toggleSound, clickSoundEventListeners } from "./gameSound.js";

//generate the welcome screen content
const welcomeScreenContent = () => {
  const container = document.querySelector('#container');

  removeAllChildNodes(container);//clear #container of all children

  const welcomeScreen = insertDOMel('div', container, 'welcome-screen');
  const gameTitle = insertDOMel('h1', welcomeScreen, 'game-title', 'BATTLESHIP');
  const startGameButton = insertDOMel('button', welcomeScreen, 'start-game');
  const soundButton = insertDOMel('button', welcomeScreen, 'sound-button');
}

//add event listener after gen. screen content as well
const generateWelcomeScreen = () => {
  welcomeScreenContent();

  const soundButton = document.querySelector('.sound-button');
  soundButton.addEventListener('click', () => {
    gameData.muted = toggleSound(gameData);

    if (gameData.muted === true) soundButton.classList.add('muted');
    else soundButton.classList.remove('muted');
  });

  const startGameButton = document.querySelector('.start-game');
  startGameButton.addEventListener('click', () => {
    generatePlaceShipsScreen();//generate next screen, for placing ships
  });

  clickSoundEventListeners();
}

export { welcomeScreenContent, generateWelcomeScreen };