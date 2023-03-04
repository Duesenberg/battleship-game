// import js files
import { GenerateGameData }
  from './game';
import { generateWelcomeScreen } from './welcomeScreen';

// import styles
import './welcomeScreen.css';
import './placeShipsScreen.css';
import './gameScreen.css';
import './gameOverScreen.css';

window.welcomeSong = new Audio('https://cdn.pixabay.com/audio/2022/03/09/audio_04f3a56a20.mp3');
window.gameOverSong = new Audio('https://cdn.pixabay.com/audio/2022/03/14/audio_213c38f164.mp3');
window.gameData = GenerateGameData();

generateWelcomeScreen();
