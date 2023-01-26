import React from 'react'
import { IconModalO, IconModalX } from '../assets/Icons'
import { TURNS, TEXT_RESPONSES } from '../constant'

const Modal = ({ turn, setOpenModal, setIntro, reset, winner, player }) => {
  const nextRound = () => {
    setOpenModal(false)
    reset()
  }

  const quitGame = () => {
    setIntro(true)
    setOpenModal(false)
  }

  return (
    <section className='w-full h-screen absolute top-0 bottom-0 right-0 left-0 z-10 grid place-content-center'>
      <article className='h-56 w-screen bg-semiDark flex flex-col justify-center items-center gap-6 z-30'>
        {!player && winner && (
          <p className=' text-silver text-base font-bold'>
            {turn === TURNS.X
              ? TEXT_RESPONSES.playerWin
              : TEXT_RESPONSES.playerLoss}
          </p>
        )}
        {player && winner && (
          <p className=' text-silver text-base font-bold'>
            {turn === TURNS.X
              ? TEXT_RESPONSES.player1Win
              : TEXT_RESPONSES.player1Loss}
          </p>
        )}
        {winner === false && (
          <p className=' text-silver text-2xl font-bold'>ROUND TIED</p>
        )}
        {winner && (
          <div className=' h-8 flex gap-4 items-center justify-center'>
            {turn === TURNS.X ? <IconModalX /> : <IconModalO />}
            <p
              className={`text-2xl font-bold ${
                turn === TURNS.X ? 'text-blue' : 'text-yellow'
              }`}
            >
              TAKES THE ROUND
            </p>
          </div>
        )}
        <div className=' flex gap-4'>
          <button
            onClick={quitGame}
            className=' h-14 w-20 bg-silver hover:bg-silverHover text-xl rounded-bt shadow-shadowReset pb-1'
          >
            QUIT
          </button>
          <button
            onClick={nextRound}
            className='h-14 w-40 text-xl rounded-bt shadow-ModalNext pb-1 bg-yellow hover:bg-yellowHover'
          >
            NEXT ROUND
          </button>
        </div>
      </article>
    </section>
  )
}

export { Modal }
