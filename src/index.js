//import js files
import { insertDOMel, removeAllChildNodes } from "./auxFnsDOM.js";
import { Ship } from "./ship.js";
import { Player } from "./player.js";
import { Gameboard } from "./gameBoard.js";
import { clearObject, updateRound, updateScore, 
  roundOver, determineRoundWinner, gameOver,
  determineGameWinner, GenerateGameData, setShipType, setShipDirection } 
  from "./gameLoopAuxFns.js";
import { gameOverScreen } from "./gameOverScreen.js";
import { gameScreen } from "./gameScreen.js";
import { placeShipsScreenContent, generatePlaceShipsScreen, 
  placeShipsScreenEventListeners, markBoardSquares, eraseShipsFromBoard, 
  togglePressedClass } from "./placeShipsScreen.js";
import { welcomeScreenContent, generateWelcomeScreen } from "./welcomeScreen.js";

//import styles
import "./welcomeScreen.css";
import "./placeShipsScreen.css";

window.gameData = GenerateGameData();

generateWelcomeScreen();