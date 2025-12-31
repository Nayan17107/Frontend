const ROWS = 6;
const COLS = 7;
let currentPlayer = 'red';
let board = [];

const gameBoard = document.getElementById('game-board');
const statusText = document.getElementById('status');
const currentPlayerText = document.getElementById('current-player');
const resetBtn = document.getElementById('reset');

// Create grid
function createBoard() {
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    gameBoard.innerHTML = '';

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.addEventListener('click', () => handleMove(c));
            gameBoard.appendChild(cell);
        }
    }
}

// Handle player move
function handleMove(col) {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (!board[row][col]) {
            board[row][col] = currentPlayer;
            updateCell(row, col);
            if (checkWin(row, col)) {
                statusText.innerHTML = `🎉 Player <span style="color:${currentPlayer}">${capitalize(currentPlayer)}</span> Wins!`;
                disableBoard();
            } else if (isDraw()) {
                statusText.textContent = 'It\'s a Draw!';
            } else {
                currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
                currentPlayerText.textContent = capitalize(currentPlayer);
                currentPlayerText.style.color = currentPlayer;
            }
            break;
        }
    }
}

// Update UI cell
function updateCell(row, col) {
    const index = row * COLS + col;
    const cell = gameBoard.children[index];
    cell.classList.add(currentPlayer);
}

// Check for win
function checkWin(r, c) {
    return (
        checkDirection(r, c, 0, 1) + checkDirection(r, c, 0, -1) > 2 ||
        checkDirection(r, c, 1, 0) > 2 ||
        checkDirection(r, c, 1, 1) + checkDirection(r, c, -1, -1) > 2 ||
        checkDirection(r, c, 1, -1) + checkDirection(r, c, -1, 1) > 2
    );
}

// Count consecutive discs in one direction
function checkDirection(r, c, dr, dc) {
    let count = 0;
    let row = r + dr;
    let col = c + dc;
    while (
        row >= 0 &&
        row < ROWS &&
        col >= 0 &&
        col < COLS &&
        board[row][col] === currentPlayer
    ) {
        count++;
        row += dr;
        col += dc;
    }
    return count;
}

// Check for draw
function isDraw() {
    return board.every(row => row.every(cell => cell));
}

// Disable board clicks
function disableBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
}

// Capitalize player name
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reset game
resetBtn.addEventListener('click', () => {
    currentPlayer = 'red';
    currentPlayerText.textContent = 'Red';
    currentPlayerText.style.color = 'red';
    statusText.innerHTML = 'Player <span id="current-player">Red</span>\'s Turn';
    createBoard();
});

createBoard();