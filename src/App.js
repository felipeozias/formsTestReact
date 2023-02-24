import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Modal from './components/Modal';

export default function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <main>
        <Form setOpenModal={() => setOpenModal(!openModal)} />
        <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}>
          <h2>Formulario enviado com sucesso!</h2>
        </Modal>
      </main>
    </div>
  );
}
