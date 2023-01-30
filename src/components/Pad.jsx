import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { BlankTile } from './padTiles/BlankTile'
import { FillTile } from './padTiles/FillTile'
import { WinTile } from './padTiles/WinTile'

const Pad = () => {
  const { states, constants } = useContext(AppContext)

  const { board, winCombo } = states

  const { TURNS } = constants

  return (
    <article className='grid grid-cols-3 grid-rows-3 gap-5 mb-5'>
      {board.map((item, index) => {
        if (winCombo.some((el) => el === index)) {
          if (item === TURNS.X) return <WinTile key={index} type={item} />
          if (item === TURNS.O) return <WinTile key={index} type={item} />
        }
        if (item === TURNS.X) return <FillTile key={index} type={item} />
        if (item === TURNS.O) return <FillTile key={index} type={item} />
        return <BlankTile key={index} index={index} />
      })}
    </article>
  )
}

export { Pad }
