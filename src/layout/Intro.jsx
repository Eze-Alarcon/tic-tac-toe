import { IconLogo, IconOutlineO, IconOutlineX } from '../assets/Icons'
import { TURNS } from '../constant'

const Intro = ({ setIntro, reset, setOpenModal, setPlayer, setTurn, turn }) => {
  const handleClick = (option) => {
    if (option === TURNS.X) setTurn(TURNS.X)
    else if (option === TURNS.O) setTurn(TURNS.O)
  }

  const startGame = () => {
    reset()
    setOpenModal(false)
    setIntro(false)
  }

  const cpuGame = () => {
    setPlayer(false)
    startGame()
  }

  const playerGame = () => {
    setPlayer(true)
    startGame()
  }

  return (
    <section className='h-75 w-full max-w-[330px] flex flex-col items-center gap-8 justify-center'>
      <div className='w-full flex justify-center'>
        <IconLogo />
      </div>
      <section className='w-full h-52 rounded-introSection shadow-shadowBT px-6 flex flex-col items-center gap-4 justify-center bg-semiDark'>
        <p className='text-silverHover text-xl'>PICK PLAYER 1'S MARK</p>
        <div className='bg-dark w-full h-20 rounded-bt flex justify-around  p-3'>
          <button
            onClick={() => handleClick(TURNS.X)}
            type='button'
            className={`h-full w-1/2 rounded-bt grid place-content-center ${
              turn === TURNS.X ? 'bg-silver' : 'bg-dark'
            }`}
          >
            <IconOutlineX active={turn} />
          </button>
          <button
            onClick={() => handleClick(TURNS.O)}
            type='button'
            className={`h-full focus:bg-silver w-1/2 rounded-bt grid place-content-center ${
              turn === TURNS.O ? 'bg-silver' : 'bg-dark'
            }`}
          >
            <IconOutlineO active={turn} />
          </button>
        </div>
        <p className='text-silver text-base opacity-70'>
          REMEMBER: X GOES FIRST
        </p>
      </section>
      <section className='w-full flex flex-col gap-4'>
        <button
          onClick={() => cpuGame()}
          type='button'
          className='w-full h-14 bg-yellow rounded-introSection shadow-shadowCPU pb-2 font-medium text-xl hover:bg-yellowHover'
        >
          NEW GAME (VS CPU)
        </button>
        <button
          onClick={() => playerGame()}
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
