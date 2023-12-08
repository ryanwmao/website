import React, { useRef, useEffect, useState } from "react";
import "./css/Modal.css";
import { AiOutlineClose, AiOutlineExport, AiOutlineGithub } from "react-icons/ai";
import visaLogo from "./images/visa-logo.png";
import grubLogo from "./images/grubmarket-logo.png";
import cornellLogo from "./images/cornell-logo.png";
import glassesImg from "./images/glasses.png";
import flowImg from "./images/flow.png";
import chessImg from "./images/chess.png";
import healthTrack from "./images/health-track.png"

const Experience = ({ isOpen, closeModal }) => {
  const modalRef = useRef();
  const [images, setImages] = useState({
    visa: null,
    grub: null,
    cornell: null,
    glasses: null,
    flow: null,
    chess: null,
    health: null
  });

  const imageUrls = [
    { name: 'visa', url: visaLogo },
    { name: 'grub', url: grubLogo },
    { name: 'cornell', url: cornellLogo },
    { name: 'glasses', url: glassesImg },
    { name: 'flow', url: flowImg },
    { name: 'chess', url: chessImg },
    { name: 'health', url: healthTrack }
  ];

  useEffect(() => {
    imageUrls.forEach((imageData) => {
      const img = new Image();
      img.src = imageData.url;
      img.onload = () => {
        setImages((prevImages) => ({
          ...prevImages,
          [imageData.name]: img,
        }));
      };
    });
  });

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

        {/* SCRIPTING */}
        <div className="modal-subtitle">Scripting</div>
        <div className="modal-text flex-container">
          <div className="column1">
            <div className="flex-col">
              <div className="column-img">
                {images.visa && <img src={images.visa.src} alt={`Visa`} className="img-fluid company-logo" />}
              </div>
              <div className="subtext">
                Visa
              </div>
              <div className="subsubtext">
                Software Engineering Intern
              </div>
            </div>
          </div>
          <div className="column3">
            <p>At Visa, I worked as a member of a software engineering team responsible for a global database synchronization service. At the time, the product was still in early stages of development, so my team was manually pushing code to the company's production servers each week. This process was both time consuming (some sessions lasted 2+ hours!) and prone to human error (very dangerous in a production environment), so I was tasked with automating this entire process as my project. My workflow involved rigorous design, testing, and lots of live demos -- it was very important that I incorporated feedback from different teams who would use my scripts. After my internship, this script package was adopted into my team's code deployment procedure!</p>
          </div>
        </div>
        <div className="modal-text flex-container">
          <div className="column1">
            <div className="flex-col">
              <div className="column-img">
                {images.glasses && <img src={images.glasses.src} alt={`Glasses`} className="img-fluid company-logo" />}
              </div>
              <div className="subtext">
                Biometric Authentication
              </div>
              <button className="icon-button" onClick={() => window.open('https://dl.acm.org/doi/10.1145/3594738.3611355', '_blank')}>
                <AiOutlineExport />
              </button>
            </div>
          </div>
          <div className="column3">
            <p></p>
          </div>
        </div>

        {/* ALGORITHMS */}
        <div className="modal-text" />
        <div className="modal-subtitle">Algorithms</div>
        <div className="modal-text flex-container">
          <div className="column1">
            <div className="flex-col">
              <div className="column-img">
                {images.flow && <img src={images.flow.src} alt={`Flow`} className="img-fluid full-image" />}
              </div>
              <div className="subtext">
                Network Flow Approx
              </div>
              <button className="icon-button">
                <AiOutlineExport />
              </button>
            </div>
          </div>
          <div className="column3">
            <p></p>
          </div>
        </div>
        <div className="modal-text flex-container">
          <div className="column1">
            <div className="flex-col">
              <div className="column-img">
                {images.chess && <img src={images.chess.src} alt={`Chess`} className="img-fluid full-image" />}
              </div>
              <div className="subtext">
                Chess Engine
              </div>
              <button className="icon-button" onClick={() => window.open('https://github.com/ryanwmao/chess-engine', '_blank')}>
                <AiOutlineGithub />
              </button>
            </div>
          </div>
          <div className="column3">
            <p></p>
          </div>
        </div>


        {/* PROGRAMMING LANGUAGES */}
        <div className="modal-text" />
        <div className="modal-subtitle">Programming Languages</div>
        <div className="modal-text flex-container">
          <div className="column1">
            <div className="flex-col">
              <div className="column-img">
                {images.cornell && <img src={images.cornell.src} alt={`Cornell`} className="img-fluid company-logo" />}
              </div>
              <div className="subtext">
                Eta Compiler
              </div>
              <button className="icon-button" onClick={() => window.open('https://www.cs.cornell.edu/courses/cs4120/2023sp/project/bakeoff/', '_blank')}>
                <AiOutlineExport />
              </button>
            </div>
          </div>
          <div className="column3">
            <p>I contributed to building an end-to-end compiler as a group project for Cornell's Practicum in Compilers. The compiler's features include a parser, lexer, type checking, support for a specified intermediate representation, AST tiling and translation to machine code. Our group implemented code optimizations including constant folding, copy propagation, and dead code elimination. The entire project amounted to 11,000 lines of code, primiarly in C++.</p>
          </div>
        </div>
        <div className="modal-text flex-container">
          <div className="column1">
            <div className="flex-col">
              <div className="column-img">
                {images.cornell && <img src={images.cornell.src} alt={`Cornell`} className="img-fluid company-logo" />}
              </div>
              <div className="subtext">
                OCamlSQL
              </div>
              <button className="icon-button" onClick={() => window.open('https://github.com/ryanwmao/OCamlSQL', '_blank')}>
                <AiOutlineGithub />
              </button>
            </div>
          </div>
          <div className="column3">
            <p>I developed a terminal-based SQL query program in OCaml as a group project for Cornell's functional programming course. With 2000 lines of OCaml code, my group and I were able to implement the logic behind a subset of SQL query commands and connect them to a terminal-based prompt window. Our final project is able to read local .csv files and return results of various SQL queries performed on files.</p>
          </div>
        </div>

        {/* FULL STACK */}
        <div className="modal-text" />
        <div className="modal-subtitle">Full Stack</div>
        <div className="modal-text flex-container">
          <div className="column1">
            <div className="flex-col">
              <div className="column-img">
                {images.grub && <img src={images.grub.src} alt={`Grubmarket`} className="img-fluid company-logo" />}
              </div>
              <div className="subtext">
                Grubmarket
              </div>
              <div className="subsubtext">
                Software Engineering Intern
              </div>
            </div>
          </div>
          <div className="column3">
            <p>At Grubmarket, I was a member of a small software engineering team dedicated to designing and integrating features into the company's internal tooling website. The project was intended to be an integral means of communication across the company and its acquisitions, and I was responsible for the end-to-end functionality of several key business tools on the site. I was able to gain exposure to a wide tech stack, ranging from the database schema \& queries and Spring Boot in the backend in addition to React.js for the frontend. </p>
          </div>
        </div>
        <div className="modal-text flex-container">
          <div className="column1">
            <div className="flex-col">
              <div className="column-img">
                {images.health && <img src={images.health.src} alt={`Health Tracker`} className="img-fluid company-logo" />}
              </div>
              <div className="subtext">
                Health Tracker
              </div>
              <button className="icon-button" onClick={() => window.open('https://github.com/tyang98/xHealthTrack', '_blank')}>
                <AiOutlineGithub />
              </button>
            </div>
          </div>
          <div className="column3">
            <p></p>
          </div>
        </div>
        <div className="modal-text" />
      </div>
    </div>
  );
};

export default Experience;