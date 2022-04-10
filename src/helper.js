export function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i] // [a, b, c] = [0, 1, 2] | a = 0, b = 1, c = 2
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a] // If there's a winner, Return the Winner
        }
    }
    return null // No Winner? Return null
}