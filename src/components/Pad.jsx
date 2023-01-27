import React, { useContext } from 'react'
import { IconO, IconX } from '../assets/Icons'
import { AppContext } from '../context/AppContext'

const Pad = () => {
  const { states, functions, constants } = useContext(AppContext)

  const { board } = states

  const { updateBoard } = functions

  const { TURNS } = constants
  return (
    <article className='grid grid-cols-3 grid-rows-3 gap-5 mb-5'>
      {board.map((item, index) => {
        if (item === TURNS.X) {
          return (
            <div
              onClick={() => updateBoard(index)}
              key={index}
              className='w-24 h-24 bg-semiDark rounded-bt shadow-shadowBT hover:cursor-pointer hover:bg-dark grid place-content-center pb-2'
            >
              <IconX />
            </div>
          )
        }
        if (item === TURNS.O) {
          return (
            <div
              onClick={() => updateBoard(index)}
              key={index}
              className='w-24 h-24 bg-semiDark rounded-bt shadow-shadowBT hover:cursor-pointer hover:bg-dark grid place-content-center pb-2'
            >
              <IconO />
            </div>
          )
        }
        return (
          <div
            onClick={() => updateBoard(index)}
            key={index}
            className='w-24 h-24 bg-semiDark rounded-bt shadow-shadowBT hover:cursor-pointer hover:bg-dark grid place-content-center pb-2'
          >
            {item}
          </div>
        )
      })}
    </article>
  )
}

export { Pad }
