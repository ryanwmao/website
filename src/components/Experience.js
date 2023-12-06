import React, { useRef, useEffect, useState } from "react";
import "./css/Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import visaLogo from "./images/visa-logo.png";
import grubLogo from "./images/grubmarket-logo.png";
import cornellLogo from "./images/cornell-logo.png";

const Experience = ({ isOpen, closeModal }) => {
  const modalRef = useRef();
  const [visa, setVisa] = useState(null);
  const [grub, setGrub] = useState(null);
  const [cornell, setCornell] = useState(null);

  useEffect(() => {
    const v = new Image();
    v.src = visaLogo;
    v.onload = () => {setVisa(v)};
    const g = new Image();
    g.src = grubLogo;
    g.onload = () => {setGrub(g)};
    const c = new Image();
    c.src = cornellLogo;
    c.onload = () => {setCornell(c)};
  }, []);

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
        <div className="modal-text flex-container">
          <div className="column" style={{ flex: '1' }}>
            {visa && <img src={visa.src} alt={`Visa logo`} className="img-fluid company-logo" />}
          </div>
          <div className="column" style={{ flex: '3' }}>
            <p>At Visa, I worked as a member of a software engineering team responsible for a global database synchronization service. At the time, the product was still in early stages of development, so my team was manually pushing code to the company's production servers each week. This process was both time consuming (some sessions lasted 2+ hours!) and prone to human error (very dangerous in a production environment), so I was tasked with automating this entire process as my project. My workflow involved rigorous design, testing, and lots of live demos -- it was very important that I incorporated feedback from different teams who would use my scripts. After my internship, this script package was adopted into my team's code deployment procedure!</p>
          </div>
        </div>
        <div className="modal-text flex-container">
          <div className="column" style={{ flex: '1' }}>
            {grub && <img src={grub.src} alt={`Grubmarket logo`} className="img-fluid company-logo" />}
          </div>
          <div className="column" style={{ flex: '3' }}>
            <p>At Grubmarket, I was a member of a small software engineering team dedicated to designing and integrating features into the company's internal tooling website. The project was intended to be an integral means of communication across the company and its acquisitions, and I was responsible for the end-to-end functionality of several key business tools on the site. I was able to gain exposure to a wide tech stack, ranging from the database schema \& queries and Spring Boot in the backend in addition to React.js for the frontend. </p>
          </div>
        </div>
        <div className="modal-text" />
        <div className="modal-subtitle">Projects</div>
        <div className="modal-text flex-container">
          <div className="column" style={{ flex: '1' }}>
            {cornell && <img src={cornell.src} alt={`Cornell logo`} className="img-fluid company-logo" />}
            Eta Compiler
          </div>
          <div className="column" style={{ flex: '3' }}>
            <p>I contributed to building an end-to-end compiler as a group project for Cornell's Practicum in Compilers. The compiler's features include a parser, lexer, type checking, support for a specified intermediate representation, AST tiling and translation to machine code. Our group implemented code optimizations including constant folding, copy propagation, and dead code elimination. The entire project amounted to 11,000 lines of code, primiarly in C++.</p>
          </div>
        </div>
        <div className="modal-text flex-container">
          <div className="column" style={{ flex: '1' }}>
            {cornell && <img src={cornell.src} alt={`Cornell logo`} className="img-fluid company-logo" />}
            OCamlSQL
          </div>
          <div className="column" style={{ flex: '3' }}>
            <p>I developed a terminal-based SQL query program in OCaml as a group project for Cornell's functional programming course. With 2000 lines of OCaml code, my group and I were able to implement the logic behind a subset of SQL query commands and connect them to a terminal-based prompt window. Our final project is able to read local .csv files and return results of various SQL queries performed on files.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;