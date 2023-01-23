import React from 'react'
import { IconO, IconX } from '../assets/Icons'

const Pad = ({ board, TURNS, updateBoard }) => {
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
