import {selectDOMel, selectDOMelAll, insertDOMel, 
  removeAllChildNodes} 
  from "./auxFnsDOM";
import { clearObject, updateRound, updateScore, 
  roundOver, determineRoundWinner, gameOver,
  determineGameWinner, GenerateGameData }
  from "./gameLoopAuxFns";
import { Gameboard } from "./gameBoard";
import { Player, chooseRandomNo } from "./player";
import { Ship } from "./ship";
import { welcomeScreenContent, generateWelcomeScreen } from "./welcomeScreen";
import {} from "./placeShipsScreen";

const gameLoop = () => {
  let gameData = GenerateGameData();
  
  generateWelcomeScreen();
}