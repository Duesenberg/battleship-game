import { endGame, changeTurn, computerPlay } from './game';

// display the no. of hits for each ship for both players
const hitDisplays = () => {
  const pOneCarrierHits = document.querySelector('.playerone-hits .carrier-hits');
  const pOneBattleshipHits = document.querySelector('.playerone-hits .battleship-hits');
  const pOneCruiserHits = document.querySelector('.playerone-hits .cruiser-hits');
  const pOneSubmarineHits = document.querySelector('.playerone-hits .submarine-hits');
  const pOneDestroyerHits = document.querySelector('.playerone-hits .destroyer-hits');

  const pTwoCarrierHits = document.querySelector('.playertwo-hits .carrier-hits');
  const pTwoBattleshipHits = document.querySelector('.playertwo-hits .battleship-hits');
  const pTwoCruiserHits = document.querySelector('.playertwo-hits .cruiser-hits');
  const pTwoSubmarineHits = document.querySelector('.playertwo-hits .submarine-hits');
  const pTwoDestroyerHits = document.querySelector('.playertwo-hits .destroyer-hits');

  pOneCarrierHits.textContent = `${gameData.player1.gameBoard.ships.carrier.hits}/5`;
  pOneBattleshipHits.textContent = `${gameData.player1.gameBoard.ships.battleship.hits}/4`;
  pOneCruiserHits.textContent = `${gameData.player1.gameBoard.ships.cruiser.hits}/3`;
  pOneDestroyerHits.textContent = `${gameData.player1.gameBoard.ships.destroyer.hits}/2`;
  pOneSubmarineHits.textContent = `${gameData.player1.gameBoard.ships.submarine.hits}/3`;

  pTwoCarrierHits.textContent = `${gameData.player2.gameBoard.ships.carrier.hits}/5`;
  pTwoBattleshipHits.textContent = `${gameData.player2.gameBoard.ships.battleship.hits}/4`;
  pTwoCruiserHits.textContent = `${gameData.player2.gameBoard.ships.cruiser.hits}/3`;
  pTwoDestroyerHits.textContent = `${gameData.player2.gameBoard.ships.destroyer.hits}/2`;
  pTwoSubmarineHits.textContent = `${gameData.player2.gameBoard.ships.submarine.hits}/3`;
};

// add occupied class to the ships on player 1 board
const markPlayerOneShips = () => {
  const playerOneBoardSquares = document.querySelectorAll('.pone-board .board-square');

  playerOneBoardSquares.forEach((square) => {
    const row = parseInt(square.getAttribute('data-row'), 10);
    const column = parseInt(square.getAttribute('data-column'), 10);

    if (gameData.player1.gameBoard.board[row][column].ship !== null) {
      square.classList.add('occupied');
    }
  });
};

// add class of hit or miss when a square is attacked for both players
const markHits = () => {
  const playerOneBoardSquares = document.querySelectorAll('.pone-board .board-square');
  const playerTwoBoardSquares = document.querySelectorAll('.ptwo-board .board-square');

  playerOneBoardSquares.forEach((square) => {
    const row = parseInt(square.getAttribute('data-row'), 10);
    const column = parseInt(square.getAttribute('data-column'), 10);

    if (gameData.player1.gameBoard.board[row][column].hit === true) {
      square.classList.add('hit');
    } else if (gameData.player1.gameBoard.board[row][column].hit === false) {
      square.classList.add('miss');
    }
  });

  playerTwoBoardSquares.forEach((square) => {
    const row = parseInt(square.getAttribute('data-row'), 10);
    const column = parseInt(square.getAttribute('data-column'), 10);

    if (gameData.player2.gameBoard.board[row][column].hit === true) {
      square.classList.add('hit');
    } else if (gameData.player2.gameBoard.board[row][column].hit === false) {
      square.classList.add('miss');
    }
  });
};

// ev.lrs for the player 2 board
const gameBoardListeners = () => {
  const playerTwoBoardSquares = document.querySelectorAll('.ptwo-board .board-square');
  playerTwoBoardSquares.forEach((square) => {
    square.addEventListener('click', () => {
      if (gameData.playerTurn === 1) {
        const row = parseInt(square.getAttribute('data-row'), 10);
        const column = parseInt(square.getAttribute('data-column'), 10);

        // change turn if square is unoccupied.
        // prevents computer from playing if click is on already hit square
        if (gameData.player2.gameBoard.board[row][column].hit === null) {
          gameData.playerTurn = changeTurn(gameData.playerTurn);
        }

        gameData.player1.attack(row, column, gameData.player2);
        markHits();
        hitDisplays();
        endGame(gameData);

        // computer makes a move if turn has been changed
        if (gameData.playerTurn === 2 && gameData.gameWinner === null) { computerPlay(); }
      }
    });
  });
};

export {
  hitDisplays, markPlayerOneShips, markHits, gameBoardListeners,
};
