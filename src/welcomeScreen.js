import {insertDOMel, removeAllChildNodes} 
  from "./auxFnsDOM";
import { generatePlaceShipsScreen } from "./placeShipsScreen";

//generate the welcome screen content
const welcomeScreenContent = () => {
  const container = document.querySelector('#container');

  removeAllChildNodes(container);//clear #container of all children

  const welcomeScreen = insertDOMel('div', container, 'welcome-screen');
  const gameTitle = insertDOMel('h1', welcomeScreen, 'game-title', 'BATTLESHIP');
  const startGameButton = insertDOMel('button', welcomeScreen, 'start-game', 'Start');
  const soundButton = insertDOMel('button', welcomeScreen, 'sound-button');
}

//add event listener after gen. screen content as well
const generateWelcomeScreen = () => {
  welcomeScreenContent();

  const startGameButton = document.querySelector('.start-game');

  startGameButton.addEventListener('click', () => {
    generatePlaceShipsScreen();//generate next screen, for placing ships
  });
}

export { welcomeScreenContent, generateWelcomeScreen };