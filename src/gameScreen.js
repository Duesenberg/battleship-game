import {selectDOMel, selectDOMelAll, insertDOMel, removeAllChildNodes} 
  from "./auxFnsDOM";
import {placeShipsScreenContent, generatePlaceShipsScreen, placeShipsScreenEventListeners,
  markBoardSquares, eraseShipsFromBoard, togglePressedClass}
  from "./placeShipsScreen";

const gameScreenContent = () => {
  const container = document.querySelector('#container');

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
  const pOneHits = insertDOMel('div', pOneStats, 'playerone-hits');
  const pOneCarrier = insertDOMel('p', pOneHits, 'carrier', 'Carrier:');
  const pOneCarrierHits = insertDOMel('div', pOneHits, 'carrier-hits');
  const pOneBattleship = insertDOMel('p', pOneHits, 'battleship', 'Battleship:');
  const pOneBattleshipHits = insertDOMel('div', pOneHits, 'battleship-hits');
  const pOneCruiser = insertDOMel('p', pOneHits, 'cruiser', 'Cruiser:');
  const pOneCruiserHits = insertDOMel('div', pOneHits, 'cruiser-hits');
  const pOneSubmarine = insertDOMel('p', pOneHits, 'submarine', 'Submarine:');
  const pOneSubmarineHits = insertDOMel('div', pOneHits, 'submarine-hits');
  const pOneDestroyer = insertDOMel('p', pOneHits, 'destroyer', 'Destroyer:');
  const pOneDestroyerHits = insertDOMel('div', pOneHits, 'destroyer-hits');
  //plater two info
  const pTwoTitle = insertDOMel('p', playerTwoInfo, 'title', 'Player 2');
  const pTwoStats = insertDOMel('div', playerTwoInfo, 'stats');
  const pTwoHitsTitle = insertDOMel('p', pTwoStats, 'hits-title', 'Hits received:');
  const pTwoHits = insertDOMel('div', pTwoStats, 'playertwo-hits');
  const pTwoCarrier = insertDOMel('p', pTwoHits, 'carrier', 'Carrier:');
  const pTwoCarrierHits = insertDOMel('div', pTwoHits, 'carrier-hits');
  const pTwoBattleship = insertDOMel('p', pTwoHits, 'battleship', 'Battleship:');
  const pTwoBattleshipHits = insertDOMel('div', pTwoHits, 'battleship-hits');
  const pTwoCruiser = insertDOMel('p', pTwoHits, 'cruiser', 'Cruiser:');
  const pTwoCruiserHits = insertDOMel('div', pTwoHits, 'cruiser-hits');
  const pTwoSubmarine = insertDOMel('p', pTwoHits, 'submarine', 'Submarine:');
  const pTwoSubmarineHits = insertDOMel('div', pTwoHits, 'submarine-hits');
  const pTwoDestroyer = insertDOMel('p', pTwoHits, 'destroyer', 'Destroyer:');
  const pTwoDestroyerHits = insertDOMel('div', pTwoHits, 'destroyer-hits');
  //player one board
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const pOneSquare = insertDOMel('div', playerOneBoard, 'board-square');
      pOneSquare.setAttribute('data-row', i);
      pOneSquare.setAttribute('data-column', j);
    }
  }
  //player two board
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const pTwoSquare = insertDOMel('div', playerTwoBoard, 'board-square');
      pTwoSquare.setAttribute('data-row', i);
      pTwoSquare.setAttribute('data-column', j);
    }
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

//display the no. of hits for each ship for both players
const hitDisplays = () => {
  const pOneCarrierHits = document.querySelector('.playerone-hits.carrier-hits');
  const pOneBattleshipHits = document.querySelector('.playerone-hits.battleship-hits');
  const pOneCruiserHits = document.querySelector('.playerone-hits.cruiser-hits');
  const pOneDestroyerHits = document.querySelector('.playerone-hits.destroyer-hits');
  const pOneSubmarineHits = document.querySelector('.playerone-hits.submarine-hits');

  const pTwoCarrierHits = document.querySelector('.playertwo-hits.carrier-hits');
  const pTwoBattleshipHits = document.querySelector('.playertwo-hits.battleship-hits');
  const pTwoCruiserHits = document.querySelector('.playertwo-hits.cruiser-hits');
  const pTwoDestroyerHits = document.querySelector('.playertwo-hits.destroyer-hits');
  const pTwoSubmarineHits = document.querySelector('.playertwo-hits.submarine-hits');

  pOneCarrierHits.textContent = gameData.player1.gameBoard.ships.carrier.hits;
  pOneBattleshipHits.textContent = gameData.player1.gameBoard.ships.battleship.hits;
  pOneCruiserHits.textContent = gameData.player1.gameBoard.ships.cruiser.hits;
  pOneDestroyerHits.textContent = gameData.player1.gameBoard.ships.destroyer.hits;
  pOneSubmarineHits.textContent = gameData.player1.gameBoard.ships.submarine.hits;

  pTwoCarrierHits.textContent = gameData.player2.gameBoard.ships.carrier.hits;
  pTwoBattleshipHits.textContent = gameData.player2.gameBoard.ships.battleship.hits;
  pTwoCruiserHits.textContent = gameData.player2.gameBoard.ships.cruiser.hits;
  pTwoDestroyerHits.textContent = gameData.player2.gameBoard.ships.destroyer.hits;
  pTwoSubmarineHits.textContent = gameData.player2.gameBoard.ships.submarine.hits;
}

//display round
const roundDisplay = () => {
  const roundNo = document.querySelector('.round-number');
  roundNo.textContent = gameData.round;
}

//display score
const scoreDisplay = () => {
  const score = document.querySelector('.score');
  score.textContent = `${gameData.score[0]} : ${gameData.score[1]}`;
}

//add occupied class to the ships on player 1 board
const markPlayerOneShips = () => {
  const playerOneBoardSquares = document.querySelectorAll('.pone-board .board-square');

  boardSquares.forEach(square => {
    let row = parseInt(square.getAttribute('data-row'));
    let column = parseInt(square.getAttribute('data-column'));

    if (gameData.player1.gameBoard.board[row][column].ship !== null) {
      square.classList.add('occupied');
    }
  });
}

//add class of hit or miss when a square is attacked for both players
const markHits = () => {
  const playerOneBoardSquares = document.querySelectorAll('.pone-board .board-square');

  playerOneBoardSquares.forEach(square => {
    let row = parseInt(square.getAttribute('data-row'));
    let column = parseInt(square.getAttribute('data-column'));

    if (gameData.player1.gameBoard.board[row][column].hit === true) {
      square.classList.add('hit');
    } else if (gameData.player1.gameBoard.board[row][column].hit === false) {
      square.classList.add('miss');
    }
  });

  const playerTwoBoardSquares = document.querySelectorAll('.ptwo-board .board-square');

  playerTwoBoardSquares.forEach(square => {
    let row = parseInt(square.getAttribute('data-row'));
    let column = parseInt(square.getAttribute('data-column'));

    if (gameData.player2.gameBoard.board[row][column].hit === true) {
      square.classList.add('hit');
    } else if (gameData.player2.gameBoard.board[row][column].hit === false) {
      square.classList.add('miss');
    }
  });
}

const generateGameScreen = () => {
  gameScreenContent();
  hitDisplays();
  roundDisplay();
}

export {gameScreenContent, hitDisplays, generateGameScreen, roundDisplay,
  markPlayerOneShips, scoreDisplay, markHits};