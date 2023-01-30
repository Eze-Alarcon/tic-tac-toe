import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { IconX, IconO } from '../../assets/Icons'

const FillTile = ({ index, type = null }) => {
  const { functions, constants } = useContext(AppContext)
  const { updateBoard } = functions
  const { TURNS } = constants

  const NORMAL_SQUARE =
    'w-24 h-24 bg-semiDark rounded-bt shadow-shadowBT hover:cursor-pointer hover:bg-dark grid place-content-center pb-2 md:h-36 md:w-36'

  if (type === TURNS.O) {
    return (
      <div
        onClick={() => updateBoard(index)}
        key={index}
        className={NORMAL_SQUARE}
      >
        <IconO />
      </div>
    )
  }
  if (type === TURNS.X) {
    return (
      <div
        onClick={() => updateBoard(index)}
        key={index}
        className={NORMAL_SQUARE}
      >
        <IconX />
      </div>
    )
  }
  return (
    <div
      onClick={() => updateBoard(index)}
      key={index}
      className={NORMAL_SQUARE}
    />
  )
}

export { FillTile }
