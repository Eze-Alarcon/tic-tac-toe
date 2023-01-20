import React from 'react'
import { IconLogo, IconRestart } from './assets/Icons'

const BOARD = Array(9).fill(null)

const App = () => {
  return (
    <main className='w-full h-screen flex flex-col justify-center items-center gap-5 px-6'>
      <header className='grid grid-cols-3 grid-rows-1 gap-5'>
        <div className='w-24 h-10 place-self-start '>
          <IconLogo />
        </div>
        <div className='w-24 h-10 bg-semiDark rounded-btSmall grid place-content-center shadow-shadowTurn'>
          <p className=' font-bold text-base text-silver'>X TURN</p>
        </div>
        <div className='w-24 h-10 flex justify-end'>
          <button
            type='button'
            className=' w-10 h-10 bg-silver rounded-bt grid place-content-center shadow-shadowReset hover:bg-silverHover'
          >
            <IconRestart />
          </button>
        </div>
      </header>
      <section className=''>
        <article className='grid grid-cols-3 grid-rows-3 gap-5 mb-5'>
          {BOARD.map((item, index) => {
            return (
              <div
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
            <p className='font-bold text-xl'>14</p>
          </div>
          <div className='h-16 w-24 rounded-bt flex flex-col justify-center items-center bg-silver'>
            <p className='font-medium text-base'>TIES</p>
            <p className='font-bold text-xl'>32</p>
          </div>
          <div className='h-16 w-24 rounded-bt flex flex-col justify-center items-center bg-yellow'>
            <p className='font-medium text-base'>O (CPU)</p>
            <p className='font-bold text-xl'>11</p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
