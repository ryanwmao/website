import React, { useRef, useEffect } from "react";
import "./css/Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import portrait from "./images/portrait.jpg";

const Modal = ({ isOpen, closeModal }) => {
  const modalRef = useRef();
  const bioText = ""

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

  const modalTextElements = Array.from({ length: 15 }, (_, index) => (
    <div key={index} className="modal-text">
      TBD
    </div>
  ));


  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="close-button">
          <AiOutlineClose />
        </button>
        <img className="modal-image" src={portrait} width="30%" alt="Portrait"/>
        <div className="modal-header">About Me</div>
        {modalTextElements}
      </div>
    </div>
  );
};

export default Modal;