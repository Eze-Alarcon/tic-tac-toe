import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const HeaderTexts = () => {
  const { states, constants } = useContext(AppContext)
  const { winner, turn } = states
  const { TURNS } = constants

  const TEXT_STYLE = 'font-bold text-base text-silver md:text-2xl'
  return (
    <>
      {winner === null && <p className={TEXT_STYLE}>{turn} TURN</p>}
      {winner === false && <p className={TEXT_STYLE}>TIE</p>}
      {turn === TURNS.X && winner && <p className={TEXT_STYLE}>{turn} WIN</p>}
      {turn === TURNS.O && winner && <p className={TEXT_STYLE}>{turn} WIN</p>}
    </>
  )
}

export { HeaderTexts }
