import React from 'react'
import { Header } from '../components/Header'
import { Pad } from '../components/Pad'
import { Footer } from '../components/Footer'

const Board = ({ winner, turn, TURNS, reset, board, updateBoard, score }) => {
  return (
    <>
      <Header winner={winner} TURNS={TURNS} turn={turn} reset={reset} />
      <section className=''>
        <Pad board={board} TURNS={TURNS} updateBoard={updateBoard} />
        <Footer score={score} />
      </section>
    </>
  )
}

export { Board }
