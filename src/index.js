//import js files
import { GenerateGameData } 
  from "./game.js";
import { generateWelcomeScreen } from "./welcomeScreen.js";

//import styles
import "./welcomeScreen.css";
import "./placeShipsScreen.css";
import "./gameScreen.css";

window.gameData = GenerateGameData();

generateWelcomeScreen();