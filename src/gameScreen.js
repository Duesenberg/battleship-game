import {selectDOMel, selectDOMelAll, insertDOMel, removeAllChildNodes} 
  from "./auxFnsDOM";

const gameScreen = () => {
  const container = selectDOMel('#container');

  removeAllChildNodes(container);//clear the previous screen

  const screen = insertDOMel('div', container, 'screen');

  //main screen containers
  const header = insertDOMel('div', screen, 'header');
  const playerOneInfo = insertDOMel('div', screen, 'pone-stats');
  const playerTwoInfo = insertDOMel('div', screen, 'ptwo-stats');
  const playerOneBoard = insertDOMel('div', screen, 'pone-board');
  const playerTwoBoard = insertDOMel('div', screen, 'ptwo-board');
  const roundStats = insertDOMel('div', screen, 'round-stats');

  //header
  const title = insertDOMel('h1', header, 'title', 'Battleship');
  //player one info
  const pOneTitle = insertDOMel('p', playerOneInfo, 'title', 'Player 1');
  const pOneStats = insertDOMel('div', playerOneInfo, 'stats');
  const pOneHitsTitle = insertDOMel('p', pOneStats, 'hits-title', 'Hits received:');
  const pOneHits = insertDOMel('div', pOneStats, 'hits');
  const pOneCarrier = insertDOMel('p', pOneHits, 'carrier', 'Carrier:');
  const pOneCarrierHits = insertDOMel('div', pOneHits, 'carrier-hits');
  const pOneBattleship = insertDOMel('p', pOneHits, 'battleship', 'Battleship:');
  const pOneBattleshipHits = insertDOMel('div', pOneHits, 'battleship-hits');
  const pOneCruiser = insertDOMel('p', pOneHits, 'cruiser', 'Cruiser:');
  const pOneCruiserHits = insertDOMel('div', pOneHits, 'cruiser-hits');
  const pOneSubmarine = insertDOMel('p', pOneHits, 'submarine', 'Submarine:');
  const pOneSubmarineHits = insertDOMel('div', pOneHits, 'submarine-hits');
  const pOneDestriyer = insertDOMel('p', pOneHits, 'destroyer', 'Destroyer:');
  const pOneDestroyerHits = insertDOMel('div', pOneHits, 'destroyer-hits');
  //plater two info
  const pTwoTitle = insertDOMel('p', playerTwoInfo, 'title', 'Player 2');
  const pTwoStats = insertDOMel('div', playerTwoInfo, 'stats');
  const pTwoHitsTitle = insertDOMel('p', pTwoStats, 'hits-title', 'Hits received:');
  const pTwoHits = insertDOMel('div', pTwoStats, 'hits');
  const pTwoCarrier = insertDOMel('p', pTwoHits, 'carrier', 'Carrier:');
  const pTwoCarrierHits = insertDOMel('div', pTwoHits, 'carrier-hits');
  const pTwoBattleship = insertDOMel('p', pTwoHits, 'battleship', 'Battleship:');
  const pTwoBattleshipHits = insertDOMel('div', pTwoHits, 'battleship-hits');
  const pTwoCruiser = insertDOMel('p', pTwoHits, 'cruiser', 'Cruiser:');
  const pTwoCruiserHits = insertDOMel('div', pTwoHits, 'cruiser-hits');
  const pTwoSubmarine = insertDOMel('p', pTwoHits, 'submarine', 'Submarine:');
  const pTwoSubmarineHits = insertDOMel('div', pTwoHits, 'submarine-hits');
  const pTwoDestriyer = insertDOMel('p', pTwoHits, 'destroyer', 'Destroyer:');
  const pTwoDestroyerHits = insertDOMel('div', pTwoHits, 'destroyer-hits');
  //player one board
  for (let i = 0; i < 100; i++) {
    const pOneSquare = insertDOMel('div', playerOneBoard, 'square');
  } 
  //player two board
  for (let j = 0; j < 100; j++) {
    const pTwoSquare = insertDOMel('div', playerTwoBoard, 'square');
  }
  //round stats
  const roundNoContainer = insertDOMel('div', roundStats, 'round-number-container');
  const roundNoText = insertDOMel('p', roundNoContainer, 'text', 'Round');
  const roundNo = insertDOMel('div', roundNoContainer, 'round-number');
  const scoreContainer = insertDOMel('div', roundStats, 'score-container');
  const scoreText = insertDOMel('p', scoreContainer, 'text', 'Score');
  const score = insertDOMel('div', scoreContainer, 'score');
  const restartButton = insertDOMel('button', roundStats, 'restart-game-button', 'Restart');
  const toggleSound = insertDOMel('button', roundStats, 'toggle-sound');
  const logo = insertDOMel('button', roundStats, 'logo');
}

export {gameScreen};