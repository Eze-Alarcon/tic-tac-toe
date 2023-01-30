import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
  const { states } = useContext(AppContext)

  const { score } = states
  return (
    <article className='grid grid-cols-3 grid-rows-1 gap-5'>
      <div className='h-16 w-24 rounded-bt flex flex-col justify-center items-center bg-blue md:w-36 md:h-20'>
        <p className='font-medium text-base md:text-xl'>X (YOU)</p>
        <p className='font-bold text-xl md:text-2xl'>{score.X}</p>
      </div>
      <div className='h-16 w-24 rounded-bt flex flex-col justify-center items-center bg-silver md:w-36 md:h-20'>
        <p className='font-medium text-base md:text-xl'>TIES</p>
        <p className='font-bold text-xl md:text-2xl'>{score.TIES}</p>
      </div>
      <div className='h-16 w-24 rounded-bt flex flex-col justify-center items-center bg-yellow md:w-36 md:h-20'>
        <p className='font-medium text-base md:text-xl'>O (CPU)</p>
        <p className='font-bold text-xl md:text-2xl'>{score.O}</p>
      </div>
    </article>
  )
}

export { Footer }
