import { Player } from "./player";
import { chooseRandomNo } from "./player";

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
const roundOver = () => {
  
}

export { CreatePlayers, clearObject, updateRound, updateScore, 
  createScoresArray
};