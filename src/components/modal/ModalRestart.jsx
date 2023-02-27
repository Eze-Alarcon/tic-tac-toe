import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const ModalRestart = () => {
  const { functions } = useContext(AppContext)

  const { reset, closeResetModal } = functions

  return (
    <section className='w-full h-screen absolute top-0 bottom-0 right-0 left-0 z-10 grid place-content-center'>
      <article className='h-56 w-screen bg-semiDark flex flex-col justify-center items-center gap-6 z-30'>
        <p className=' text-silver text-2xl font-bold'>RESTART GAME?</p>
        <div className=' flex gap-4'>
          <button
            onClick={closeResetModal}
            className=' h-14 w-40 bg-silver hover:bg-silverHover text-xl rounded-bt shadow-shadowReset pb-1'
          >
            NO, CANCEL
          </button>
          <button
            onClick={reset}
            className='h-14 w-40 text-xl rounded-bt shadow-ModalNext pb-1 bg-yellow hover:bg-yellowHover'
          >
            YES, RESTART
          </button>
        </div>
      </article>
    </section>
  )
}

export { ModalRestart }
