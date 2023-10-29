import './App.css';
import { useState } from 'react';
import Terminal from './Terminal'
import Modal from "./Modal";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Modal isOpen={isModalOpen} closeModal={closeModal} content={modalContent} />
      <Terminal openModal={openModal}/>
    </div>
  );
}

export default App;
