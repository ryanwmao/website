import React, { useRef, useEffect, useState } from "react";
import "./css/Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import portrait from "./images/portrait.jpg";

const About = ({ isOpen, closeModal }) => {
  const modalRef = useRef();
  const bioText = "Welcome! I'm Ryan, and I'm currently an M.Eng student studying computer science at Cornell University. I am an avid learner and passionate about technology, and I'm excited to pursue a career in software engineering! During my undergraduate studies, I've had the opportunity to work as a software engineering intern at both Visa and Grubmarket, where I worked on Bash scripting and full stack projects. On campus, I was a member of Cornell Hyperloop, where I was involved in the design and implementation of a Graphical User Interface (GUI) for the team's Hyperloop pod. Moving forward, I'm excited to be joining Roblox as a software engineer after my graduation in May 2024."
  const bioText2 = "In my free time, I enjoy weightlifting, video games, and basketball. If you like what you see, I'd love to connect! My socials are linked in the title bar on the home page."
  
  const calculateMaxCharsPerLine = () => {
    const modalContent = document.querySelector(".modal-content"); 
    if (modalContent) {
      const modalWidth = modalContent.offsetWidth;
    
      const fontSize = 20; 
      const maxCharsPerLine = Math.floor(0.6 * modalWidth / (fontSize * 0.45)); 
    
      return maxCharsPerLine;
    }
    return 0;
  };

  const [maxCharsPerLine, setMaxCharsPerLine] = useState(100);

  useEffect(() => {
    setMaxCharsPerLine(calculateMaxCharsPerLine);
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    const handleResize = () => {
      setMaxCharsPerLine(calculateMaxCharsPerLine)
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const calculateLines = (text, maxCharsPerLine) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
  
    words.forEach((word) => {
      if ((currentLine + word).length <= maxCharsPerLine) {
        currentLine += `${word} `;
      } else {
        lines.push(currentLine.trim());
        currentLine = `${word} `;
      }
    });
  
    if (currentLine.length > 0) {
      lines.push(currentLine.trim());
    }
  
    return lines;
  };


  const modalTextElements = calculateLines(bioText, maxCharsPerLine).map((line, index) => (
    <div key={index} className="modal-text">
      {line}
    </div>
  ));

  const modalTextElements2 = calculateLines(bioText2, Math.floor(maxCharsPerLine / 0.6)).map((line, index) => (
    <div key={index} className="modal-text">
      {line}
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
        <div className="modal-text" />
        <div className="modal-text" />
        {modalTextElements2}
      </div>
    </div>
  );
};

export default About;