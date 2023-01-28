import React, { useContext } from 'react'
import { Header } from '../components/Header'
import { Pad } from '../components/Pad'
import { Footer } from '../components/Footer'
import { Modal } from '../components/Modal'
import { createPortal } from 'react-dom'
import { AppContext } from '../context/AppContext'
import { ModalRestart } from './ModalRestart'

const Board = ({ setIntro }) => {
  const { states } = useContext(AppContext)

  const { openModal, resetModal } = states

  return (
    <>
      <Header />
      <section className=''>
        <Pad />
        <Footer />
      </section>
      {openModal && createPortal(<Modal setIntro={setIntro} />, document.body)}
      {resetModal && createPortal(<ModalRestart />, document.body)}
    </>
  )
}

export { Board }
