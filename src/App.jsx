import React, { useState } from 'react'
import { Board } from './layout/Board'
import { Intro } from './layout/Intro'
import { AppContextProvider } from './context/AppContext'

const App = () => {
  const [intro, setIntro] = useState(true)

  return (
    <AppContextProvider>
      <main className='w-full h-screen flex flex-col justify-center items-center gap-5 px-6'>
        {intro && <Intro setIntro={setIntro} />}
        {!intro && <Board setIntro={setIntro} />}
      </main>
    </AppContextProvider>
  )
}

export default App
