import React from 'react'
import './Modal.css'

export default function Modal({ isOpen, setOpenModal, children }) {
  if (isOpen) {
    return (
      <div id='modal' onClick={() => { setOpenModal() }}>
        <div onClick={e => e.stopPropagation()}>
          {children}
          <button onClick={() => { setOpenModal() }}>Fechar</button>
        </div>
      </div>
    )
  }
}
