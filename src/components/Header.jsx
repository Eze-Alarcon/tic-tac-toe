import React, { useContext } from 'react'
import { IconLogo, IconRestart } from '../assets/Icons'
import { AppContext } from '../context/AppContext'
import { HeaderTexts } from './header/HeaderTexts'

const Header = () => {
  const { functions } = useContext(AppContext)

  const { openResetModal } = functions

  return (
    <header className='grid grid-cols-3 grid-rows-1 gap-5'>
      <div className='w-24 h-10 place-self-start '>
        <IconLogo />
      </div>
      <div className='w-24 h-10 bg-semiDark rounded-btSmall grid place-content-center shadow-shadowTurn'>
        <HeaderTexts />
      </div>
      <div className='w-24 h-10 flex justify-end'>
        <button
          type='button'
          onClick={openResetModal}
          className=' w-10 h-10 bg-silver rounded-bt grid place-content-center shadow-shadowReset hover:bg-silverHover'
        >
          <IconRestart />
        </button>
      </div>
    </header>
  )
}

export { Header }
