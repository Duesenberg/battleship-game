import { Gameboard } from "./gameBoard";

const Player = () => {
  //attack an enemy square
  const attack = function (row, column, enemyPlayer) {
    enemyPlayer.gameBoard.receiveAttack(row, column);
  }

  //make an attack on a random enemy square that has not been hit
  const randomAttack = function (enemyPlayer) {
    let row = chooseRandomNo();
    let column = chooseRandomNo();

    //loop until a square that has not been hit before is found
    while (enemyPlayer.gameBoard.board[row][column].hit !== null) {
      row = chooseRandomNo();
      column = chooseRandomNo();
    };

    enemyPlayer.gameBoard.receiveAttack(row, column);
  }

  return {
    gameBoard: Gameboard(),
    attack,
    randomAttack
  }
}

//return random number from 0 to 9
const chooseRandomNo = () => {
  let num = parseInt(Math.round((Math.random() * 10).toPrecision(1)));
  while (num > 9) num = parseInt(Math.round((Math.random() * 10).toPrecision(1)));
  return num;
}

export {Player, chooseRandomNo};