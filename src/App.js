import './App.css';
import { useState } from 'react';
import Terminal from './components/Terminal'
import Modal from "./components/About";
import Header from "./components/Header";


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
      <Header />
      <Terminal openModal={openModal}/>
      <Modal isOpen={isModalOpen} closeModal={closeModal} content={modalContent} />
    </div>
  );
}

export default App;
