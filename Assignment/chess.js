const board = document.getElementById('chessboard');

// Chess pieces in Unicode
const pieces = {
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟', // Black pieces
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'  // White pieces
};

// Chessboard starting position (FEN notation-like)
const initialPosition = [
    'rnbqkbnr',
    'pppppppp',
    '        ',
    '        ',
    '        ',
    '        ',
    'PPPPPPPP',
    'RNBQKBNR'
];

// Create the chessboard
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Alternating colors
        if ((row + col) % 2 === 0) {
            square.classList.add('white');
        } else {
            square.classList.add('black');
        }

        // Place pieces based on initial position
        const piece = initialPosition[row][col];
        if (piece !== ' ') {
            const pieceElem = document.createElement('span');
            pieceElem.classList.add('piece');
            pieceElem.textContent = pieces[piece];
            square.appendChild(pieceElem);
        }

        board.appendChild(square);
    }
}
