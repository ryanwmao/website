import React, { useRef, useEffect, useState } from "react";
import "./css/Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import portrait from "./images/portrait.jpg";

const About = ({ isOpen, closeModal }) => {
  const modalRef = useRef();
  const bioText = "Welcome! I'm Ryan, an M.Eng student in computer science at Cornell University. I'm broadly interested in ML/AI, theory of computing, and general backend development. You can find relevant experiences and projects under the experience section of this website. I'm excited to be pursuing a career in software engineering, and I will be joining Roblox as a software engineer after my graduation in May 2024."
  const bioText2 = "In my free time, I enjoy weightlifting, video games, and basketball. If you like what you see, I'd love to connect! My socials are linked in the title bar on the home page."
  const [preloadedImage, setPreloadedImage] = useState(null);


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
    const img = new Image();
    img.src = portrait;
    img.onload = () => {setPreloadedImage(img)};
  }, []);

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

  const modalTextElements2 = calculateLines(bioText2, maxCharsPerLine).map((line, index) => (
    <div key={index} className="modal-text">
      {line}
    </div>
  ));


  const emptyLines = Array(5).fill(0).map((_, index) => (
    <div key={index} className="modal-text" />
  ));

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="close-button">
          <AiOutlineClose />
        </button>
        {preloadedImage && <img className="modal-image" src={preloadedImage.src} width="30%" alt="Portrait"/>}
        <div className="modal-header">About Me</div>
        {modalTextElements}
        <div className="modal-text" />
        <div className="modal-text" />
        {modalTextElements2}
        {emptyLines}
      </div>
    </div>
  );
};

export default About;