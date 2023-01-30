const BOARD = Array(9).fill(null)

const TURNS = {
  X: 'X',
  O: 'O'
}

const INITIAL_COUNTER = {
  X: 0,
  TIES: 0,
  O: 0
}

const OPPONENTS = {
  CPU: 'cpu',
  PLAYER: 'player'
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

const TEXT_RESPONSES = {
  playerWin: 'YOU WON',
  playerLoss: 'OH NO, YOU LOST..',
  player1Win: 'PLAYER 1 WINS!',
  player1Loss: 'PLAYER 2 WINS!'
}

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
      return {
        win: true,
        condition
      }
    }
  } return false
}

const checkEndGame = (board) => board.every((item) => item !== null)

const getRandomIndex = () => Math.floor(Math.random() * 9)

export { BOARD, TURNS, OPPONENTS, CONDITION_WIN, INITIAL_COUNTER, TEXT_RESPONSES, someoneWin, checkEndGame, getRandomIndex }
