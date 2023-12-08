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


  useEffect(() => {
    const imageUrls = [
      { name: 'visa', url: visaLogo },
      { name: 'grub', url: grubLogo },
      { name: 'cornell', url: cornellLogo },
      { name: 'glasses', url: glassesImg },
      { name: 'flow', url: flowImg },
      { name: 'chess', url: chessImg },
      { name: 'health', url: healthTrack }
    ];

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
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const colors = ['#ffcc80', '#b2ebf2', '#c5e1a5', '#f8bbd0', '#d1c4e9'];
    const getRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      const listItems = document.querySelectorAll('.exp-ul li');
      listItems.forEach((item) => {
        item.style.backgroundColor = getRandomColor();
      });
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
            <ul className="exp-ul" id="note-list">
              <li>Member of a team responsible for a global database synchronization service</li>
              <li>My team was relatively new, so code deployment to production servers was handled manually. This was both time consuming (some sessions lasted 2+ hours!) and error-prone, so my project aimed to automate the entire process through implementation of a Bash script package</li>
              <li>My workflow involved rigorous design, testing, and lots of live demos to incorporate feedback into my project</li>
              <li>The package was adopted into my team's code deployment procedure after my internship</li>
            </ul>
          </div>
        </div>
        <div className="modal-text flex-container">
          <div className="column1">
            <div className="flex-col">
              <div className="column-img">
                {images.glasses && <img src={images.glasses.src} alt={`Glasses`} className="img-fluid company-logo" />}
              </div>
              <div className="subtext">
                C-Auth: Biometric Authentication
              </div>
              <button className="icon-button" onClick={() => window.open('https://dl.acm.org/doi/10.1145/3594738.3611355', '_blank')}>
                <AiOutlineExport />
              </button>
            </div>
          </div>
          <div className="column3">
            <ul className="exp-ul" id="note-list">
              <li>Research project exploring the feasibility of using facial contours for user authentication </li>
              <li>We mount a camera to a smart glasses device, capturing the wearer's facial contours. These images are used as part of our authentication process</li>
              <li>Contributed towards ML model training, data collection, and general scripting</li>
              <li>Paper accepted to ISWC '23</li>
            </ul>
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
            <ul className="exp-ul" id="note-list">
              <li>Research project investigating approximation algorithms for the budget constrained max flow problem </li>
              <li>Problem inputs: series-parallel graph, with arbitrary source and sink node; each edge has a given capacity and cost. Additionally, we are given some budget for 'buying' edges</li>
              <li>Goal: maximize the flow from the source to the sink that results from the edges that are purchased, while remaining within the budget</li>
              <li>We formulate a pseudo-polynomial time DP algorithm to solve the problem exactly, and then formulate a polynomial-time approximation scheme for the problem</li>
            </ul>
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
            <ul className="exp-ul" id="note-list">
              <li>Interactive chess engine with a terminal-based UI</li>
              <li>Chess bot calculates moves utilizing a minimax algorithm with alpha-beta pruning for faster computation</li>
              <li>Implemented in Python</li>
            </ul>
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
            <ul className="exp-ul" id="note-list">
              <li>End-to-end compiler for a fictitious programming language completed as a group project for CS 4121 - Practicum in Compilers</li>
              <li>Includes a lexer, parser, type checking, AST tiling, and translation to assembly code</li>
              <li>Our group implemented code optimizations including constant folding, copy propagation, and dead code elimination</li>
              <li>Implemented primarily in C++</li>
            </ul>
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
            <ul className="exp-ul" id="note-list">
              <li>Terminal-based SQL query program developed as a group project for CS 3110 - Functional Programming</li>
              <li>Our group implemented the logic behind a subset of SQL query commands and connected them to a terminal-based prompt window</li>
              <li>Final project is able to read local .csv files and return results of various SQL queries performed on files</li>
              <li>Implemented in OCaml</li>
            </ul>
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
            <ul className="exp-ul" id="note-list">
              <li>Member of a team dedicated to designing and integrating features into the company's internal webapp tool</li>
              <li>The project is intended to be an integral means of communication across the company and its acquisitions</li>
              <li>I was responsible for the end-to-end functionality of several key business tools on the site</li>
              <li>Gained exposure to a wide tech stack, ranging from the database schema & queries and Spring Boot in the backend in addition to React.js for the frontend. </li>
            </ul>
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
            <ul className="exp-ul" id="note-list">
              <li>Full-stack web app project that allows users to track various health metrics</li>
              <li>Graphs and other summaries are available based on the data entered by users</li>
            </ul>
          </div>
        </div>
        <div className="modal-text" />
      </div>
    </div>
  );
};

export default Experience;