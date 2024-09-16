// create the gameBoard as an array, each value equals one of the nine squares
const gameBoard = {
  board: [0, 1, 2,
          3, 4, 5, 
          6, 7, 8]
}
// create the player object, containing name prompt, the selection and an array where the push it: 
// the goal is to empty the original gameBoard and check if the new array contains one of the victory combos
const player = {
  // name: prompt("Enter your name"),
  selection: parseInt(prompt("Choose which square to pick")),
  container: [],
  choice: function() {
    let x = gameBoard.board.splice(player.selection, 1);
    x = parseInt(x.toString());
    player.container.push(x);
    return player.container
  }
}

const computer = {
  selection: Math.floor(Math.random() * gameBoard.board.length - 1),
  choice: function() {
    return gameBoard.board.splice(computer.selection, 1)
  }
}

// console.log(player.container) array starts empty
console.log(player.choice());
console.log(player.container); // then gets filled with player choices
console.log(computer.choice());
console.log(gameBoard.board)