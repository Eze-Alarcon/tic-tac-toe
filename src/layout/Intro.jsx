import React, { useState } from 'react'
import { IconLogo, IconOutlineO, IconOutlineX } from '../assets/Icons'
import { TURNS } from '../constant'

const Intro = () => {
  const [active, setActive] = useState(TURNS.X)

  const handleClick = (option) => {
    if (option === TURNS.X && active !== TURNS.X) setActive(TURNS.X)
    else if (option === TURNS.O && active !== TURNS.O) setActive(TURNS.O)
  }

  return (
    <section className='h-75 w-full max-w-[330px] flex flex-col items-center gap-8 justify-center'>
      <div className='w-full flex justify-center'>
        <IconLogo />
      </div>
      <section className='w-full h-52 rounded-introSection shadow-shadowBT px-6 flex flex-col items-center gap-4 justify-center bg-semiDark'>
        <p className='text-silverHover text-xl'>PICK PLAYER 1'S MARK</p>
        <div className='bg-dark w-full h-20 rounded-bt flex justify-around  p-3'>
          <button
            onClick={() => handleClick(TURNS.X)}
            type='button'
            className={`h-full w-1/2 rounded-bt grid place-content-center ${
              active === TURNS.X ? 'bg-silver' : 'bg-dark'
            }`}
          >
            <IconOutlineX active={active} />
          </button>
          <button
            onClick={() => handleClick(TURNS.O)}
            type='button'
            className={`h-full focus:bg-silver w-1/2 rounded-bt grid place-content-center ${
              active === TURNS.O ? 'bg-silver' : 'bg-dark'
            }`}
          >
            <IconOutlineO active={active} />
          </button>
        </div>
        <p className='text-silver text-base opacity-70'>
          REMEMBER: X GOES FIRST
        </p>
      </section>
      <section className='w-full flex flex-col gap-4'>
        <button
          type='button'
          className='w-full h-14 bg-yellow rounded-introSection shadow-shadowCPU pb-2 font-medium text-xl hover:bg-yellowHover'
        >
          NEW GAME (VS CPU)
        </button>
        <button
          type='button'
          className='w-full h-14 bg-blue rounded-introSection shadow-shadowPlayer pb-2 font-medium text-xl hover:bg-blueHover'
        >
          NEW GAME (VS PLAYER)
        </button>
      </section>
    </section>
  )
}

export { Intro }