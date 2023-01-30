import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { ModalTexts } from '../components/modal/ModalTexts'

const Modal = ({ setIntro }) => {
  const { functions } = useContext(AppContext)

  const { reset } = functions

  const backToIntro = () => {
    setIntro(true)
    reset()
  }

  return (
    <section className='w-full h-screen absolute top-0 bottom-0 right-0 left-0 z-10 grid place-content-center'>
      <article className='h-56 w-screen bg-semiDark flex flex-col justify-center items-center gap-6 z-30'>
        <ModalTexts />
        <div className=' flex gap-4'>
          <button
            onClick={backToIntro}
            className=' h-14 w-20 bg-silver hover:bg-silverHover text-xl rounded-bt shadow-shadowReset pb-1'
          >
            QUIT
          </button>
          <button
            onClick={reset}
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
