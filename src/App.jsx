import React, { useState, useEffect } from 'react'

import {
  BOARD,
  TURNS,
  INITIAL_COUNTER,
  someoneWin,
  checkEndGame,
  getRandomIndex,
} from './constant'
import { Board } from './layout/Board'
import { Intro } from './layout/Intro'

const App = () => {
  const [board, setBoard] = useState(BOARD)
  const [winner, setWinner] = useState(null)
  const [turn, setTurn] = useState(TURNS.X)
  const [score, setScore] = useState(INITIAL_COUNTER)
  const [openModal, setOpenModal] = useState(false)
  const [intro, setIntro] = useState(true)
  const [player, setPlayer] = useState(false)

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
    if (
      !player &&
      turn === TURNS.O &&
      board.at(index) !== null &&
      winner === null
    ) {
      return fightCPU()
    }
    if (board.at(index) !== null || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    const newWinner = someoneWin(newBoard)
    if (!newWinner) setTurn(newTurn)
    if (newWinner) {
      setWinner(newWinner)
      updateScore()
      setOpenModal(true)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
      updateScore(true)
      setOpenModal(true)
    }
    setBoard(() => newBoard)
  }

  const fightCPU = () => {
    const index = getRandomIndex()
    updateBoard(index)
  }

  useEffect(() => {
    if (!player && turn === TURNS.O) {
      fightCPU()
    }
  })

  return (
    <main className='w-full h-screen flex flex-col justify-center items-center gap-5 px-6'>
      {intro && (
        <Intro
          player={player}
          setIntro={setIntro}
          reset={reset}
          setOpenModal={setOpenModal}
          setPlayer={setPlayer}
        />
      )}
      {!intro && (
        <Board
          winner={winner}
          turn={turn}
          TURNS={TURNS}
          board={board}
          score={score}
          openModal={openModal}
          player={player}
          updateBoard={updateBoard}
          reset={reset}
          setOpenModal={setOpenModal}
          setIntro={setIntro}
        />
      )}
    </main>
  )
}

export default App
