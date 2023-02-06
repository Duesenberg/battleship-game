import { Player, chooseRandomNo } from "./player";
import { Gameboard } from "./gameBoard";

//create an object with two players
const CreatePlayers = () => {
  const player1 = Player();
  const player2 = Player();

  return {
    player1,
    player2
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

//increase round number. roundNumber should be a variable available 
//in entire game loop.
const updateRound = (roundNumber) => roundNumber += 1;

const createScoresArray = () => {
  return [0, 0];
}
//update score. playerScores should be object available in entire game loop.
//in player one wins, roundWinner is 1. else roundWinner is 2
const updateScore = (roundWinner, pScores) => {
  for (let i = 0; i < pScores.length; i++) {
    if (roundWinner === 1 && i === 0) pScores[i] += 1;
    else if (roundWinner === 2 && i === 1) pScores[i] += 1;
  }

  return pScores;
}

//check whether all ships of either player are sunk (return true) or not (false)
const roundOver = (playerOneBoard, playerTwoBoard) => {
  if(playerOneBoard.allShipsSunk() === true ||
  playerTwoBoard.allShipsSunk() === true)
    return true;
  else return false;
}

//returns 1 or 2 depending on which player won
const determineRoundWinner = (playerOneBoard, playerTwoBoard) => {
  let roundWinner;

  if(playerOneBoard.allShipsSunk() === true) roundWinner = 2;
  else if(playerTwoBoard.allShipsSunk() === true) roundWinner = 1;

  return roundWinner;
}

//returns true after 5 rounds
const gameOver = (roundNumber) => {
  if (roundNumber > 5) return true;
  else return false;
}

//returns 1 or 2 depending on which player's score is higher
const determineGameWinner = (playerScores) => {
  let winner;

  playerScores[0] > playerScores[1] ? winner = 1 : winner = 2;

  return winner;
}

export { CreatePlayers, clearObject, updateRound, updateScore, 
  createScoresArray, roundOver, determineRoundWinner, gameOver,
  determineGameWinner,
};