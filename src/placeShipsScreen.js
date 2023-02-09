import {selectDOMel, selectDOMelAll, insertDOMel, removeAllChildNodes} from "./auxFnsDOM";

const placeShipsScreen = () => {
  const container = selectDOMel('#container');

  removeAllChildNodes(container);//clear the welcome screen

  const screen = insertDOMel('div', container, 'screen');
  //append four main divs on screen
  const header = insertDOMel('div', screen, 'header');
  const ships = insertDOMel('div', screen, 'ships');
  const controls = insertDOMel('div', screen, 'controls');
  const board = insertDOMel('div', screen, 'board');

  //header content
  const title = insertDOMel('h1', header, 'title', 'Place your Ships');
  //ships div content
  const shipsHeader = insertDOMel('p', ships, 'ships-header', 'Ships:');
  const carrier = insertDOMel('button', ships, 'carrier-button', 'Carrier');
  const battleship = insertDOMel('button', ships, 'battleship-button', 'Battleship');
  const cruiser = insertDOMel('button', ships, 'cruiser-button', 'Cruiser');
  const submarine = insertDOMel('button', ships, 'submarine-button', 'Submarine');
  const destroyer = insertDOMel('button', ships, 'destroyer-button', 'Destroyer');
  //controls content
  const controlsHeader = insertDOMel('p', controls, 'controls-header', 'Placement direction:');
  const arrowsContainer = insertDOMel('div', controls, 'arrows-container');
  const upArrow = insertDOMel('button', arrowsContainer, 'arrow-up');
  const downArrow = insertDOMel('button', arrowsContainer, 'arrow-down');
  const leftArrow = insertDOMel('button', arrowsContainer, 'arrow-left');
  const rightArrow = insertDOMel('button', arrowsContainer, 'arrow-right');
  const finishPlacement =insertDOMel('button', controls, 'finish-button', 'Finish');
  //board content
  for (let i = 0; i < 100; i++) {
    const boardSquare = insertDOMel('div', board, 'board-square');
  }
}

export {placeShipsScreen};