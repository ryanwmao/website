import React, { useRef, useEffect} from "react";
import './Modal.css';
import { AiOutlineClose } from 'react-icons/ai';


const Modal = ({ isOpen, closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={closeModal} className="close-button">
          <AiOutlineClose />
        </button>
        <div className="modal-text">
          I go to Cornell University! My past work experience is abc
        </div>
      </div>
    </div>
  );
};

export default Modal;



