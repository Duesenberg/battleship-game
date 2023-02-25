import { insertDOMel, removeAllChildNodes } 
  from "./auxFnsDOM";
import { endGame, restartGame, changeTurn, computerPlay } from "./game";

const gameScreenContent = () => {
  const container = document.querySelector('#container');

  removeAllChildNodes(container);//clear the previous screen

  const screen = insertDOMel('div', container, 'game-screen');

  //main screen containers
  const header = insertDOMel('div', screen, 'header');
  const playerOneInfo = insertDOMel('div', screen, 'pone-stats');
  const playerTwoInfo = insertDOMel('div', screen, 'ptwo-stats');
  const playerOneBoard = insertDOMel('div', screen, 'pone-board');
  const playerTwoBoard = insertDOMel('div', screen, 'ptwo-board');
  const gameOptions = insertDOMel('div', screen, 'options');

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
  //game options
  const logo = insertDOMel('button', gameOptions, 'logo');
  const restartButton = insertDOMel('button', gameOptions, 'restart-game-button', 'Restart');
  const toggleSound = insertDOMel('button', gameOptions, 'toggle-sound');
}

//display the no. of hits for each ship for both players
const hitDisplays = () => {
  const pOneCarrierHits = document.querySelector('.playerone-hits .carrier-hits');
  const pOneBattleshipHits = document.querySelector('.playerone-hits .battleship-hits');
  const pOneCruiserHits = document.querySelector('.playerone-hits .cruiser-hits');
  const pOneDestroyerHits = document.querySelector('.playerone-hits .destroyer-hits');
  const pOneSubmarineHits = document.querySelector('.playerone-hits .submarine-hits');

  const pTwoCarrierHits = document.querySelector('.playertwo-hits .carrier-hits');
  const pTwoBattleshipHits = document.querySelector('.playertwo-hits .battleship-hits');
  const pTwoCruiserHits = document.querySelector('.playertwo-hits .cruiser-hits');
  const pTwoDestroyerHits = document.querySelector('.playertwo-hits .destroyer-hits');
  const pTwoSubmarineHits = document.querySelector('.playertwo-hits .submarine-hits');

  pOneCarrierHits.textContent = `${gameData.player1.gameBoard.ships.carrier.hits}/5`;
  pOneBattleshipHits.textContent = `${gameData.player1.gameBoard.ships.battleship.hits}/4`;
  pOneCruiserHits.textContent = `${gameData.player1.gameBoard.ships.cruiser.hits}/3`;
  pOneDestroyerHits.textContent = `${gameData.player1.gameBoard.ships.submarine.hits}/3`;
  pOneSubmarineHits.textContent = `${gameData.player1.gameBoard.ships.destroyer.hits}/2`;

  pTwoCarrierHits.textContent = `${gameData.player2.gameBoard.ships.carrier.hits}/5`;
  pTwoBattleshipHits.textContent = `${gameData.player2.gameBoard.ships.battleship.hits}/4`;
  pTwoCruiserHits.textContent = `${gameData.player2.gameBoard.ships.cruiser.hits}/3`;
  pTwoDestroyerHits.textContent = `${gameData.player2.gameBoard.ships.submarine.hits}/3`;
  pTwoSubmarineHits.textContent = `${gameData.player2.gameBoard.ships.destroyer.hits}/2`;
}

//add occupied class to the ships on player 1 board
const markPlayerOneShips = () => {
  const playerOneBoardSquares = document.querySelectorAll('.pone-board .board-square');

  playerOneBoardSquares.forEach(square => {
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

//add event listeners
const gameScreenEventListeners = () => {
  //restart button
  const restartButton = document.querySelector('.restart-game-button');
  restartButton.addEventListener('click', () => {
    restartGamePopUp();
  });
  //player 2 board
  const playerTwoBoardSquares = document.querySelectorAll('.ptwo-board .board-square');
  playerTwoBoardSquares.forEach(square => {
    square.addEventListener('click', () => {
      if (gameData.playerTurn === 1) {
        let row = parseInt(square.getAttribute('data-row'));
        let column = parseInt(square.getAttribute('data-column'));
  
        //change turn if square is unoccupied.
        //prevents computer from playing if click is on already hit square
        if (gameData.player2.gameBoard.board[row][column].hit === null)
          gameData.playerTurn = changeTurn(gameData.playerTurn);
  
        gameData.player1.attack(row, column, gameData.player2);
        markHits();
        hitDisplays();
        endGame(gameData);
  
        //computer makes a move if turn has been changed
        if (gameData.playerTurn === 2 && gameData.gameWinner === null)
          computerPlay();
      }
    });
  });
}

//pop up window for restarting the game
const restartGamePopUp = () => {
  const screen = document.querySelector('.game-screen');

  const popUpWindow = insertDOMel('div', screen, 'pop-up');
  const popUpMessage = insertDOMel('p', popUpWindow, 'message', 'Restart Game?');
  const yesButton = insertDOMel('button', popUpWindow, 'yes-button', 'Yes');
  const noButton = insertDOMel('button', popUpWindow, 'no-button', 'No');

  yesButton.addEventListener('click', () => {
    restartGame(gameData);
  });
  noButton.addEventListener('click', () => {
    if (popUpWindow.parentNode) {
      popUpWindow.parentNode.removeChild(popUpWindow);
    }
  });
}

const generateGameScreen = () => {
  gameScreenContent();
  markPlayerOneShips();
  hitDisplays();
  gameScreenEventListeners();
}

export {gameScreenContent, hitDisplays, generateGameScreen,
  markPlayerOneShips, markHits, gameScreenEventListeners};