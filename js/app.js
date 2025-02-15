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
  [2, 4, 6],
]

/*---------------------------- Variables (state) ----------------------------*/
// board - represent the state of the squares on the board
// turn - tracks whose turn it is
// winner - represent if anyone has won, or if its a tie
let board, turn, winner;


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('div');
const messageEl = document.getElementById('message');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start-game');

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(square => {
  square.addEventListener('click', handleClick)
})
resetButton.addEventListener('click', init);
startButton.addEventListener('click', revealAll);

/*-------------------------------- Functions --------------------------------*/
init();
hideAll();
function init() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
  resetButton.setAttribute('hidden', true);
}

function render() {
  board.forEach((square, i) => {
    if (square === 1) squareEls[i].textContent = 'X';
    else if (square === -1) squareEls[i].textContent = 'O';
    else squareEls[i].textContent = '';

  })
  if (winner === null) {
    messageEl.textContent = `Player ${turn === 1 ? 'One' : 'Two'}'s turn`;
  }
  else if (winner === -1) messageEl.textContent = `Player One wins!`;
  else if (winner === 1) messageEl.textContent = `Player Two wins!`;
  else {
    messageEl.textContent = 'Looks like a tie';
  }
}

function handleClick(evt) {
  resetButton.removeAttribute('hidden');
  const sqIdx = parseInt(evt.target.id.replace('sq', ''));
  if (board[sqIdx] || winner !== null) return;
  board[sqIdx] = turn;
  turn *= -1;
  winner = getWinner();
  render();
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    let total = 0;
    for (let j = 0; j < winningCombos[i].length; j++) {
      total += board[winningCombos[i][j]];
      if (Math.abs(total) === 3) return turn;
    }
  }
  if (!board.includes(null)) return winner = 'Tie';
  return null;
}

function hideAll() {
  messageEl.setAttribute('hidden', true);
  squareEls.forEach(square => {
    square.setAttribute('hidden', true);
  })
}

function revealAll() {
  startButton.setAttribute('hidden', true);
  messageEl.removeAttribute('hidden');
  squareEls.forEach(square => {
    square.removeAttribute('hidden');
  })
}