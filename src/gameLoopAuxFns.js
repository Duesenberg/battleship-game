import { Player } from "./player";
import { chooseRandomNo } from "./player";

const CreatePlayers = () => {
  const player1 = Player();
  const player2 = Player();

  return {
    player1,
    player2
  }
}

const clearObject = (object) => {
  for (var variableKey in object){
    if (object.hasOwnProperty(variableKey)){
        delete object[variableKey];
    }
}
}

export { CreatePlayers, clearObject };