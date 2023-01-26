import React from 'react'
import { Header } from '../components/Header'
import { Pad } from '../components/Pad'
import { Footer } from '../components/Footer'
import { Modal } from '../components/Modal'
import { createPortal } from 'react-dom'

const Board = ({
  winner,
  turn,
  TURNS,
  reset,
  board,
  updateBoard,
  score,
  openModal,
  setOpenModal,
  setIntro,
  player,
}) => {
  return (
    <>
      <Header winner={winner} TURNS={TURNS} turn={turn} reset={reset} />
      <section className=''>
        <Pad board={board} TURNS={TURNS} updateBoard={updateBoard} />
        <Footer score={score} />
      </section>
      {openModal &&
        createPortal(
          <Modal
            setOpenModal={setOpenModal}
            setIntro={setIntro}
            turn={turn}
            reset={reset}
            winner={winner}
            player={player}
          />,
          document.body
        )}
    </>
  )
}

export { Board }
