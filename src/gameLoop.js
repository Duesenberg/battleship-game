import { Player } from "./player";
import { chooseRandomNo } from "./player";
import { welcomeScreen } from "./welcomeScreen";
import {selectDOMel, selectDOMelAll, insertDOMel} from "./auxFnsDOM";

const gameLoop = () => {
  let roundNumber = 1;
  let playerScores = [0, 0];
  let playerTurn = 1;

  welcomeScreen();
}