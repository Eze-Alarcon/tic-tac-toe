import { useContext } from 'react'
import { IconLogo, IconOutlineO, IconOutlineX } from '../assets/Icons'
import { AppContext } from '../context/AppContext'

const Intro = ({ setIntro }) => {
  const { states, functions, constants } = useContext(AppContext)

  const { userSelection } = states

  const { changeOption, closeModal } = functions

  const { TURNS, OPPONENTS } = constants

  function startGame (opponent) {
    setIntro(false)
    closeModal(opponent)
  }

  return (
    <section className='w-full max-w-[330px] flex flex-col items-center gap-8 justify-center md:max-w-[460px]'>
      <div className='w-full flex justify-center'>
        <IconLogo />
      </div>
      <section className='w-full h-52 rounded-introSection shadow-shadowBT px-6 flex flex-col items-center gap-4 justify-center bg-semiDark'>
        <p className='text-silverHover text-xl'>PICK PLAYER 1'S MARK</p>
        <div className='bg-dark w-full h-20 rounded-bt flex justify-around  p-3'>
          <button
            onClick={() => changeOption(TURNS.X)}
            type='button'
            className={`h-full w-1/2 rounded-bt grid place-content-center ${
              userSelection === TURNS.X ? 'bg-silver' : 'bg-dark'
            }`}
          >
            <IconOutlineX active={userSelection} />
          </button>
          <button
            onClick={() => changeOption(TURNS.O)}
            type='button'
            className={`h-full focus:bg-silver w-1/2 rounded-bt grid place-content-center ${
              userSelection === TURNS.O ? 'bg-silver' : 'bg-dark'
            }`}
          >
            <IconOutlineO active={userSelection} />
          </button>
        </div>
        <p className='text-silver text-base opacity-70'>
          REMEMBER: X GOES FIRST
        </p>
      </section>
      <section className='w-full flex flex-col gap-4'>
        <button
          onClick={() => startGame(OPPONENTS.CPU)}
          type='button'
          className='w-full h-14 bg-yellow rounded-introSection shadow-shadowCPU pb-2 font-medium text-xl hover:bg-yellowHover'
        >
          NEW GAME (VS CPU)
        </button>
        <button
          onClick={() => startGame(OPPONENTS.PLAYER)}
          type='button'
          className='w-full h-14 bg-blue rounded-introSection shadow-shadowPlayer pb-2 font-medium text-xl hover:bg-blueHover'
        >
          NEW GAME (VS PLAYER)
        </button>
      </section>
    </section>
  )
}

export { Intro }
