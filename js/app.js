/*-------------------------------- Constants --------------------------------*/
// winningCombos hold the eight possible winning combinations in a nested array
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
// board - represent the state of the squares on the board
// turn - tracks whose turn it is
// winner - represent if anyone has won, or if its a tie
let board, turn, winner;


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector('.board');
const messageEl = document.getElementById('message');


/*----------------------------- Event Listeners -----------------------------*/
squareEls.addEventListener('click', handleClick)


/*-------------------------------- Functions --------------------------------*/
init();
function init() {
  board = new Array(9).fill(null);
  turn = 1;
  winner = null;
  render();
}

function render() {
  board.forEach((square, i) => {
    if (square === 1) squareEls[i].textContent = 'X';
    if (square === -1) squareEls[i].textContent = 'O';
  })
  if (winner === null) {
    turn *= -1;
    messageEl.textContent = `Player ${turn === -1 ? 'Two' : 'One'}'s turn`;
  }
  else if (winner === 'Tie') messageEl.textContent = 'Looks like a tie';

}

function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.replace('sq', ''));

}
console.log(squareEls)
console.log(board)
console.log(messageEl)