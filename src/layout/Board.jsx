import React, { useContext } from 'react'
import { Header } from '../components/Header'
import { Pad } from '../components/Pad'
import { Footer } from '../components/Footer'
import { createPortal } from 'react-dom'
import { AppContext } from '../context/AppContext'
import { ModalRestart } from '../components/modal/ModalRestart'
import { Modal } from './Modal'

const Board = ({ setIntro }) => {
  const { states } = useContext(AppContext)

  const { openModal, resetModal } = states

  return (
    <>
      <Header />
      <section>
        <Pad />
        <Footer />
      </section>
      {openModal && createPortal(<Modal setIntro={setIntro} />, document.body)}
      {resetModal && createPortal(<ModalRestart />, document.body)}
    </>
  )
}

export { Board }
