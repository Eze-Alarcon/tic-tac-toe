import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const BlankTile = ({ index, item }) => {
  const { functions } = useContext(AppContext)
  const { updateBoard } = functions

  const NORMAL_SQUARE =
    'w-24 h-24 bg-semiDark rounded-bt shadow-shadowBT hover:cursor-pointer hover:bg-dark grid place-content-center pb-2 md:h-36 md:w-36'
  return (
    <div
      onClick={() => updateBoard(index)}
      key={index}
      className={NORMAL_SQUARE}
    >
      {item}
    </div>
  )
}

export { BlankTile }
