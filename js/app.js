/*-------------------------------- Constants --------------------------------*/
// winningCombos hold the eight possible winning combinations in a nested array
const winningCombos = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]],
]


/*---------------------------- Variables (state) ----------------------------*/
// board - represent the state of the squares on the board
// turn - tracks whose turn it is
// winner - represent if anyone has won, or if its a tie
let board, turn, winner;


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('div');
const messageEl = document.getElementById('message');


/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square => {
  square.addEventListener('click', handleClick);
})

/*-------------------------------- Functions --------------------------------*/
init();
function init() {
  board = new Array(9).fill(null);
  turn = 1;
  winner = null;
  render();
}

function render() {
  board.forEach(square => {
    squareEls.forEach(div => {
      square = div;
    })
  })
  if (winner === null) turn *= -1;
  else if (winner === 'T') {
    `It looks like a tie!`
    return;
  }
  else return `Congrats, you win.`;
}

function handleClick(evt) {
  console.log(evt.target);
}