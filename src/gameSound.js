
const toggleSound = (gameData) => {
  if (gameData.muted === false) return gameData.muted = true;
  else return gameData.muted = false;
}

//add sound when clicking any button
const clickSoundEventListeners = () => {
  //define element
  const clickSound = new Audio('https://cdn.pixabay.com/audio/2022/03/25/audio_7a32f97753.mp3');
  const buttons = document.querySelectorAll('button');
  
  //add listener to each element in node list
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (gameData.muted === false) {
        clickSound.currentTime = 0;
        clickSound.play();
      } 
    });
  });
}

const hitOrMissSound = (row, column, gameBoard) => {
  const hitSound = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_29c5ff27b9.mp3');
  const missSound = new Audio('https://cdn.pixabay.com/audio/2022/03/10/audio_01444a651b.mp3');

  //play hitsound/misssound depending on situation
  if (gameBoard.board[row][column].hit === true) {
    if (gameData.muted === false) {
      hitSound.currentTime = 0;
      hitSound.play();
    }  
  } else if (gameBoard.board[row][column].hit === false) {
    if (gameData.muted === false) {
      missSound.currentTime = 0;
      missSound.play();
    }  
  }
}

const placeShipsSound = () => {
  const clickSound = new Audio('https://cdn.pixabay.com/audio/2022/03/25/audio_7a32f97753.mp3');
  const gameBoard = document.querySelectorAll('.board-square');

  gameBoard.forEach(square => {
    square.addEventListener('click', () => {
      if (gameData.muted === false) {
        clickSound.currentTime = 0;
        clickSound.play();
      } 
    });
  });
}

export { toggleSound, clickSoundEventListeners, hitOrMissSound, placeShipsSound };