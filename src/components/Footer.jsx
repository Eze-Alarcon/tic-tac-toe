import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
  const { states } = useContext(AppContext)

  const { score } = states
  return (
    <article className='grid grid-cols-3 grid-rows-1 gap-5'>
      <div className='h-16 w-24 rounded-bt flex flex-col justify-center items-center bg-blue'>
        <p className='font-medium text-base'>X (YOU)</p>
        <p className='font-bold text-xl'>{score.X}</p>
      </div>
      <div className='h-16 w-24 rounded-bt flex flex-col justify-center items-center bg-silver'>
        <p className='font-medium text-base'>TIES</p>
        <p className='font-bold text-xl'>{score.TIES}</p>
      </div>
      <div className='h-16 w-24 rounded-bt flex flex-col justify-center items-center bg-yellow'>
        <p className='font-medium text-base'>O (CPU)</p>
        <p className='font-bold text-xl'>{score.O}</p>
      </div>
    </article>
  )
}

export { Footer }
