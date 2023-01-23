import React, { useState } from 'react'
import { IconLogo, IconRestart } from './assets/Icons'
import { BOARD, TURNS, someoneWin } from './constant'

const App = () => {
  const [board, setBoard] = useState(BOARD)
  const [winner, setWinner] = useState(false)
  const [turn, setTurn] = useState(TURNS.X)
  const [score, setScore] = useState({ X: 0, TIES: 0, O: 0 })

  const reset = () => {
    setWinner(false)
    setBoard(BOARD)
    setTurn(TURNS.X)
  }

  const checkEndGame = (board) => board.every((item) => item !== null)

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
      setWinner(() => newWinner)
      updateScore()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
      updateScore(true)
    }
    setBoard(() => newBoard)
  }

  return (
    <main className='w-full h-screen flex flex-col justify-center items-center gap-5 px-6'>
      <header className='grid grid-cols-3 grid-rows-1 gap-5'>
        <div className='w-24 h-10 place-self-start '>
          <IconLogo />
        </div>
        <div className='w-24 h-10 bg-semiDark rounded-btSmall grid place-content-center shadow-shadowTurn'>
          {!winner && (
            <p className=' font-bold text-base text-silver'>{turn} TURN</p>
          )}
          {turn === TURNS.X && winner && (
            <p className=' font-bold text-base text-silver'>{turn} WIN</p>
          )}
          {turn === TURNS.O && winner && (
            <p className=' font-bold text-base text-silver'>{turn} WIN</p>
          )}
        </div>
        <div className='w-24 h-10 flex justify-end'>
          <button
            type='button'
            onClick={reset}
            className=' w-10 h-10 bg-silver rounded-bt grid place-content-center shadow-shadowReset hover:bg-silverHover'
          >
            <IconRestart />
          </button>
        </div>
      </header>
      <section className=''>
        <article className='grid grid-cols-3 grid-rows-3 gap-5 mb-5'>
          {board.map((item, index) => {
            return (
              <div
                onClick={() => updateBoard(index)}
                key={index}
                className='w-24 h-24 bg-semiDark rounded-bt shadow-shadowBT hover:cursor-pointer hover:bg-dark'
              >
                {item}
              </div>
            )
          })}
        </article>
        <article className='grid grid-cols-3 grid-rows-1 gap-5'>
          <div className='h-16 w-24 rounded-bt flex flex-col justify-center items-center bg-blue'>
            <p className='font-medium text-base'>X (YOU)</p>
            <p className='font-bold text-xl'>{score.X}</p>
          </div>
          <div className='h-16 w-24 rounded-bt flex flex-col justify-center items-center bg-silver'>
            <p className='font-medium text-base'>TIES</p>
            <p className='font-bold text-xl'>{score.TIES}</p>
          </div>
          <div className='h-16 w-24 rounded-bt flex flex-col justify-center items-center bg-yellow'>
            <p className='font-medium text-base'>O (CPU)</p>
            <p className='font-bold text-xl'>{score.O}</p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
