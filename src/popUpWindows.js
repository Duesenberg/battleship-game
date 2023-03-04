import { restartGame } from "./game";

//pop up window for restarting the game
const restartGamePopUp = () => {
  //remove pop up window if one is present
  const popUp = document.querySelector('.pop-up');
  if (popUp !== null) {
    if (popUp.parentNode) {
      popUp.parentNode.removeChild(popUp);
    }
  }

  //generate the pop up window
  const screen = document.querySelector('.game-screen');
  
  const popUpWindow = insertDOMel('div', screen, 'pop-up');
  const popUpMessage = insertDOMel('p', popUpWindow, 'message', 'Restart Game?');
  const yesButton = insertDOMel('button', popUpWindow, 'yes-button', 'Yes');
  const noButton = insertDOMel('button', popUpWindow, 'no-button', 'No');

  //add sound to buttons
  const clickSound = new Audio('https://cdn.pixabay.com/audio/2022/03/25/audio_7a32f97753.mp3');
  yesButton.addEventListener('click', () => {
    if (gameData.muted === false) {
      clickSound.currentTime = 0;
      clickSound.play();
    } 
  });
  noButton.addEventListener('click', () => {
    if (gameData.muted === false) {
      clickSound.currentTime = 0;
      clickSound.play();
    } 
  });

  //get info for container
  const container = document.querySelector('#container');
  const containerData = container.getBoundingClientRect();

  //place pop-up window relative to the player board
  popUpWindow.style.position = 'absolute';
  popUpWindow.style.top = `${(containerData.height) / 2 - 100}px`;
  popUpWindow.style.left = `${(containerData.width) / 2 - 200}px`;


  //event listeners
  yesButton.addEventListener('click', () => {
    restartGame(gameData);
  });
  noButton.addEventListener('click', () => {
    if (popUpWindow.parentNode) {
      popUpWindow.parentNode.removeChild(popUpWindow);
    }
  });
}

//pop up for visiting git page
const gitPagePopup = () => {
  const popUp = document.querySelector('.pop-up');
  if (popUp !== null) {
    if (popUp.parentNode) {
      popUp.parentNode.removeChild(popUp);
    }
  }

  const screen = document.querySelector('.game-screen');

  const popUpWindow = insertDOMel('div', screen, 'pop-up');
  const popUpMessage = insertDOMel('p', popUpWindow, 'message', 'Visit GitHub page?');
  const yesButton = insertDOMel('button', popUpWindow, 'yes-button', 'Yes');
  const noButton = insertDOMel('button', popUpWindow, 'no-button', 'No');

  //add sound to buttons
  const clickSound = new Audio('https://cdn.pixabay.com/audio/2022/03/25/audio_7a32f97753.mp3');
  yesButton.addEventListener('click', () => {
    if (gameData.muted === false) {
      clickSound.currentTime = 0;
      clickSound.play();
    } 
  });
  noButton.addEventListener('click', () => {
    if (gameData.muted === false) {
      clickSound.currentTime = 0;
      clickSound.play();
    } 
  });

  //get info for container
  const container = document.querySelector('#container');
  const containerData = container.getBoundingClientRect();

  //place pop-up window relative to the player board
  popUpWindow.style.position = 'absolute';
  popUpWindow.style.top = `${(containerData.height) / 2 - 100}px`;
  popUpWindow.style.left = `${(containerData.width) / 2 - 200}px`;
  
  yesButton.addEventListener('click', () => {
    window.open('https://github.com/Duesenberg');

    if (popUpWindow.parentNode) {
      popUpWindow.parentNode.removeChild(popUpWindow);
    }
  });
  noButton.addEventListener('click', () => {
    if (popUpWindow.parentNode) {
      popUpWindow.parentNode.removeChild(popUpWindow);
    }
  });
}

export { restartGamePopUp, gitPagePopup };