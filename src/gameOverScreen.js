import {selectDOMel, selectDOMelAll, insertDOMel, removeAllChildNodes} 
  from "./auxFnsDOM";

const gameOverScreen = () => {
  const container = selectDOMel('#container');

  removeAllChildNodes(container);//clear the previous screen

  const screen = insertDOMel('div', container, 'screen');

  //main screen containers
  const playerOneAvatar = insertDOMel('div', screen, 'avatar-one');
  const middleDiv = insertDOMel('div', screen, 'middle-div');
  const playerTwoAvatar = insertDOMel('div', screen, 'avatar-two');

  const pOneImage = insertDOMel('img', playerOneAvatar, 'image');
  const pTwoImage = insertDOMel('img', playerTwoAvatar, 'image');
  const midDivText = insertDOMel('p', middleDiv, 'text', 'Game Over!');
  const winnerText = insertDOMel('p', middleDiv, 'winner');
}

export {gameOverScreen};