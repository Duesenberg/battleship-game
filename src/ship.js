// returns a ship object.
// accepts 5 types of value: carrier, battleship, cruiser, submarine, destroyer
const Ship = (shipType) => {
  // logic for setting length depending on shipType
  let length;

  switch (shipType) {
    case 'carrier':
      length = 5;
      break;
    case 'battleship':
      length = 4;
      break;
    case 'cruiser':
      length = 3;
      break;
    case 'submarine':
      length = 3;
      break;
    case 'destroyer':
      length = 2;
      break;
    default:
      break;
  }

  // methods
  const hit = function hit() {
    this.hits < this.length ? this.hits += 1 : null;
  };

  const isSunk = function isSunk() {
    this.hits === this.length ? this.sunk = true : null;
  };

  return {
    shipType,
    length,
    hits: 0,
    sunk: false,
    placed: false,
    hit,
    isSunk,
  };
};

export default Ship;
