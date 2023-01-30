import React, { useContext } from 'react'
import { IconLogo, IconRestart } from '../assets/Icons'
import { AppContext } from '../context/AppContext'
import { HeaderTexts } from './header/HeaderTexts'

const Header = () => {
  const { functions } = useContext(AppContext)

  const { openResetModal } = functions

  return (
    <header className='w-[330px] grid grid-cols-3 grid-rows-1 gap-5 md:w-[470px]'>
      <div className='mr-auto'>
        <IconLogo />
      </div>
      <div className='w-24 h-10 bg-semiDark rounded-btSmall mx-auto grid place-content-center shadow-shadowTurn md:w-36 md:h-14 md:rounded-bt'>
        <HeaderTexts />
      </div>
      <div className='w-24 h-10 ml-auto flex justify-end'>
        <button
          type='button'
          onClick={openResetModal}
          className=' w-10 h-10 bg-silver rounded-bt grid place-content-center shadow-shadowReset hover:bg-silverHover md:w-14 md:h-14'
        >
          <IconRestart />
        </button>
      </div>
    </header>
  )
}

export { Header }
