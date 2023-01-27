import React, { useContext } from 'react'
import { IconLogo, IconRestart } from '../assets/Icons'
import { AppContext } from '../context/AppContext'

const Header = () => {
  const { states, functions, constants } = useContext(AppContext)

  const { winner, turn } = states

  const { reset } = functions

  const { TURNS } = constants
  return (
    <header className='grid grid-cols-3 grid-rows-1 gap-5'>
      <div className='w-24 h-10 place-self-start '>
        <IconLogo />
      </div>
      <div className='w-24 h-10 bg-semiDark rounded-btSmall grid place-content-center shadow-shadowTurn'>
        {winner === null && (
          <p className=' font-bold text-base text-silver'>{turn} TURN</p>
        )}
        {winner === false && (
          <p className=' font-bold text-base text-silver'>TIE</p>
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
  )
}

export { Header }
