import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { IconModalO, IconModalX } from '../../assets/Icons'

const ModalTexts = () => {
  const { states, constants } = useContext(AppContext)

  const { turn, userSelection, winner, player } = states
  const { TURNS, TEXT_RESPONSES } = constants
  return (
    <>
      {!player && winner && (
        <p className=' text-silver text-base font-bold'>
          {userSelection === turn
            ? TEXT_RESPONSES.playerWin
            : TEXT_RESPONSES.playerLoss}
        </p>
      )}
      {player && winner && (
        <p className=' text-silver text-base font-bold'>
          {userSelection === turn
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
    </>
  )
}

export { ModalTexts }
