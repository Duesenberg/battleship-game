import { Player } from "./player";
import { generateWelcomeScreen } from "./welcomeScreen";
import { markHits, hitDisplays } from "./gameScreen";

//generate object containing game data
const GenerateGameData = () => {
  return {
    player1: Player(),
    player2: Player(),
    playerTurn: 1,
    gameWinner: null,
    shipPlacement: ['carrier', 'right']
  }
}

//clear object of all its properties
const clearObject = (object) => {
  for (var variableKey in object){
    if (object.hasOwnProperty(variableKey)){
        delete object[variableKey];
    }
  }
}

//returns true when either player's ships are sunk
const gameOver = (gameData) => {
  let pOneshipsSunk = gameData.player1.gameBoard.allShipsSunk();
  let pTwoshipsSunk = gameData.player2.gameBoard.allShipsSunk();

  if (pOneshipsSunk === true || pTwoshipsSunk === true) return true;
  else return false;
}

//change the player turn (can be 1 or 2)
const changeTurn = (playerTurn) => {
  if (playerTurn === 1) playerTurn = 2;
  else playerTurn = 1;

  return playerTurn;
}

//set ship type for placement
const setShipType = (ship) => ship;

//set ship direction for placement
const setShipDirection = (direction) => direction;

//restart the game
const restartGame = (gameData) => {
  generateWelcomeScreen();
  clearObject(gameData);
  gameData = GenerateGameData();
}

//computer makes a move
const computerPlay = () => {
  gameData.player2.randomAttack(gameData.player1);
  markHits();
  hitDisplays();
  gameData.playerTurn = changeTurn();
  endGame();
}

//return 1 if player 1 wins, else 2.
const gameWinner = (gameData) => {
  if (gameData.player2.gameBoard.allShipsSunk() === true) return 1;
  else return 2;
}

//goes to the game screen if the game is over
const endGame = (gameData) => {
  if (gameOver(gameData) === true) {
    gameData.gameWinner = gameWinner(gameData);
    //gameOverScreen(gameData);
  }
}

export { clearObject, GenerateGameData, setShipType, setShipDirection,
  gameOver, changeTurn, restartGame, computerPlay, endGame };