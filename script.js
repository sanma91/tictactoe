// create the gameBoard as an array, each value equals one of the nine squares
const gameBoard = [0, 1, 2,
                   3, 4, 5, 
                   6, 7, 8];
// create the player object, containing name prompt, the selection and an array where the push it: 
// the goal is to empty the original gameBoard and check if the new array contains one of the victory
const player = {
  name: prompt("Enter your name"),
  selection: parseInt(prompt("Choose which square to pick")),
  choice: function() {
    return gameBoard.splice(player.selection, 1)
  }
}

const computer = {
  selection: Math.floor(Math.random() * gameBoard.length),
  choice: function() {
    return gameBoard.splice(computer.selection, 1)
  }
}

console.log(player.choice());
console.log(computer.choice())