import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { IconOutlineBigO, IconOutlineBigX } from '../../assets/Icons'

const WinTile = ({ index, type }) => {
  const { functions, constants } = useContext(AppContext)
  const { updateBoard } = functions
  const { TURNS } = constants

  const WIN_SQUARE =
    'w-24 h-24 rounded-bt hover:cursor-pointer grid place-content-center pb-2'

  const WIN_SQUARE_O = 'bg-yellow shadow-shadowBTWinO'

  const WIN_SQUARE_X = 'bg-blue shadow-shadowBTWinX'

  if (type === TURNS.O) {
    return (
      <div
        onClick={() => updateBoard(index)}
        key={index}
        className={`${WIN_SQUARE} ${WIN_SQUARE_O}`}
      >
        <IconOutlineBigO />
      </div>
    )
  }
  return (
    <div
      onClick={() => updateBoard(index)}
      key={index}
      className={`${WIN_SQUARE} ${WIN_SQUARE_X}`}
    >
      <IconOutlineBigX />
    </div>
  )
}

export { WinTile }
