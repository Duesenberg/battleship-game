import { Player, chooseRandomNo } from "./player";

it('The player object contains its own game board', () => {
  const player = Player();

  expect(player.gameBoard).not.toBeUndefined();
});

it('Player 1 can attack Player 2s gameboard', () => {
  const player1 = Player();
  const player2 = Player();
  player2.gameBoard.insertShipRight(0, 0, 'cruiser');

  player1.attack(0, 0, player2);

  expect(player2.gameBoard.board[0][0].hit).toBe(true);
})

it('Player 1 attacks a random square on Player 2s gameboard', () => {
  const player1 = Player();
  const player2 = Player();
  player2.gameBoard.insertShipRight(0, 0, 'cruiser');

  player1.randomAttack(player2);

  //go through player 2's board and check if a hit is registered
  let aHit = 0;
  player2.gameBoard.board.forEach(row => {
    row.forEach(square => {
      square.hit !== null ? aHit += 1 : aHit += 0;
    })
  })

  expect(aHit).toBe(1);
})