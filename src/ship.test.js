import { Ship } from "./ship";

it("Factory function 'Ship' returns expected object", () => {
  const hit = expect.any(Function);
  const isSunk = expect.any(Function);  
  const expected = {
    shipType: 'cruiser',
    length: 3,
    hits: 0,
    sunk: false,
    placed: false,
    hit,
    isSunk
  };

  expect(Ship('cruiser')).toMatchObject(expected);
  expect(Ship('carrier').length).toBe(5);
  expect(Ship('battleship').length).toBe(4);
  expect(Ship('submarine').length).toBe(3);
  expect(Ship('destroyer').length).toBe(2);
});

it("Ship: Hit function increases the value of the hit property by 1 when called", () => {
  const ship = Ship('cruiser');
  ship.hit();
  expect(ship.hits).toBe(1);
});

it("Ship: Do not increase No. of hits more than ship length", () => {
  const ship = Ship('cruiser');
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(3);
});

it("Ship: sunk property turns true when No. of hits equals length", () => {
  const ship = Ship('cruiser');
  ship.hit();
  ship.hit();
  ship.hit();
  ship.isSunk();
  expect(ship.sunk).toBe(true);
});

it("Ship: make sure isSunk doesn't turn sunk to true everytime", () => {
  const ship = Ship('cruiser');
  ship.isSunk();
  expect(ship.sunk).toBe(false);
});

