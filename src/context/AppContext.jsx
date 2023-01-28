import React, { useState, useEffect, createContext } from 'react'
import {
  BOARD,
  TURNS,
  OPPONENTS,
  INITIAL_COUNTER,
  TEXT_RESPONSES,
  someoneWin,
  checkEndGame,
  getRandomIndex,
} from '../constant'

const AppContext = createContext(true)

const AppContextProvider = ({ children }) => {
  const [board, setBoard] = useState(BOARD)
  const [winner, setWinner] = useState(null)
  const [userSelection, setUserSelection] = useState(TURNS.X)
  const [turn, setTurn] = useState(TURNS.X)
  const [score, setScore] = useState(INITIAL_COUNTER)
  const [openModal, setOpenModal] = useState(false)
  const [resetModal, setResetModal] = useState(false)
  const [player, setPlayer] = useState(null)

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
      turn !== userSelection &&
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
    setTimeout(() => {
      updateBoard(index)
    }, 50)
  }

  const reset = () => {
    openModal && setOpenModal(false)
    resetModal && setResetModal(false)
    setWinner(null)
    setBoard(BOARD)
    setTurn(TURNS.X)
  }

  // Header functions

  const openResetModal = () => {
    setResetModal(true)
  }

  const closeResetModal = () => {
    setResetModal(false)
  }

  // Intro functions
  const changeOption = (option) => {
    if (option === TURNS.X) {
      setUserSelection(TURNS.X)
    } else if (option === TURNS.O) {
      setUserSelection(TURNS.O)
    }
  }

  const closeModal = (opponent) => {
    opponent === OPPONENTS.CPU ? setPlayer(false) : setPlayer(true)
    reset()
  }

  // Modal functions

  const quitGame = () => {
    setPlayer(null)
    reset()
  }

  // useEffects
  useEffect(() => {
    if (player !== null && !player && turn !== userSelection) {
      fightCPU()
    }
  })

  const states = {
    board,
    winner,
    userSelection,
    turn,
    score,
    openModal,
    resetModal,
    player,
  }

  const stateUpdates = {
    setBoard,
    setWinner,
    setUserSelection,
    setTurn,
    setScore,
    setOpenModal,
    setPlayer,
  }

  const functions = {
    reset,
    updateBoard,
    changeOption,
    closeModal,
    quitGame,
    openResetModal,
    closeResetModal,
  }

  const constants = {
    TURNS,
    TEXT_RESPONSES,
    OPPONENTS,
  }

  return (
    <AppContext.Provider value={{ states, stateUpdates, functions, constants }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
