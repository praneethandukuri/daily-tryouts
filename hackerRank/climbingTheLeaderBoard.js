function quickestWayUp(ladders, snakes) {
  let board = [];
  for (let i = 0; i <= 100; i++) {
    board[i] = i;
  }

  for (let i = 0; i < ladders.length; i++) {
    let start = ladders[i][0];
    let end = ladders[i][1];
    board[start] = end;
  }

  for (let i = 0; i < snakes.length; i++) {
    let start = snakes[i][0];
    let end = snakes[i][1];
    board[start] = end;
  }

  let visited = [];
  for (let i = 0; i <= 100; i++) {
    visited[i] = 0;
  }
  visited[1] = 1;

  let queue = [];
  queue.push(1);
  let rolls = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentSquare = queue.shift();

      if (currentSquare === 100) {
        return rolls;
      }

      for (let diceRoll = 1; diceRoll <= 6; diceRoll++) {
        let nextSquare = currentSquare + diceRoll;

        if (nextSquare <= 100 && visited[board[nextSquare]] === 0) {
          visited[board[nextSquare]] = 1;
          queue.push(board[nextSquare]);
        }
      }
    }

    rolls++;
  }

  return -1;
}