import React, { useRef, useEffect } from "react";
import "./css/Modal.css";
import { AiOutlineClose } from "react-icons/ai";

const Experience = ({ isOpen, closeModal }) => {
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
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="close-button">
          <AiOutlineClose />
        </button>
        <div className="modal-header">Experience</div>
        <div className="modal-subtitle">Work Experience</div>
        
        <div className="modal-subtitle">Projects</div>
      </div>
    </div>
  );
};

export default Experience;