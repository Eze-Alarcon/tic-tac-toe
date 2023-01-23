const BOARD = Array(9).fill(null)

const TURNS = {
  X: 'X',
  O: 'O'
}

const CONDITION_WIN = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const someoneWin = (board) => {
  for (const condition of CONDITION_WIN) {
    const positionA = board.at(condition[0])
    const positionB = board.at(condition[1])
    const positionC = board.at(condition[2])
    if (
      positionA !== null &&
      positionA === positionB &&
      positionA === positionC
    ) {
      return true
    }
  } return false
}

export { BOARD, TURNS, CONDITION_WIN, someoneWin }
