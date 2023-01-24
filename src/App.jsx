import React, { useState } from 'react'
import { BOARD, TURNS, someoneWin, checkEndGame } from './constant'
import { Board } from './layout/Board'
// import { Intro } from './layout/Intro'

const App = () => {
  const [board, setBoard] = useState(BOARD)
  const [winner, setWinner] = useState(null)
  const [turn, setTurn] = useState(TURNS.X)
  const [score, setScore] = useState({ X: 0, TIES: 0, O: 0 })

  const reset = () => {
    setWinner(null)
    setBoard(BOARD)
    setTurn(TURNS.X)
  }

  const updateScore = (tie = false) => {
    if (tie) {
      const tiesScore = score.TIES + 1
      return setScore({ ...score, TIES: tiesScore })
    }
    const newScore = score[turn] + 1
    if (turn === TURNS.X) {
      setScore({ ...score, X: newScore })
    } else {
      setScore({ ...score, O: newScore })
    }
  }

  const updateBoard = (index) => {
    if (board.at(index) !== null || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    const newWinner = someoneWin(newBoard)
    if (!newWinner) setTurn(newTurn)
    if (newWinner) {
      setWinner(newWinner)
      updateScore()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
      updateScore(true)
    }
    setBoard(() => newBoard)
  }

  return (
    <main className='w-full h-screen flex flex-col justify-center items-center gap-5 px-6'>
      <Board
        reset={reset}
        winner={winner}
        turn={turn}
        TURNS={TURNS}
        board={board}
        updateBoard={updateBoard}
        score={score}
      />
      {/* <Intro /> */}
    </main>
  )
}

export default App
