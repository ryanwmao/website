import React, { Component } from "react";
import './css/Header.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

class Header extends Component {
  render() {
    const githubUrl = "https://github.com/ryanwmao";
    const linkedInUrl = "https://www.linkedin.com/in/ryanwmao/";
    const emailUrl = "mailto:rwm275@cornell.edu";

    return (
      
    <div className="header">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <div className="button red">
          <FaGithub size={40} />
        </div>
      </a>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
        <div className="button yellow">
          <FaLinkedinIn size={30} />
        </div>
      </a>
      <a href={emailUrl} target="_blank" rel="noopener noreferrer">
        <div className="button green">
          <FaEnvelope size={30} />
        </div>
      </a>
      <div className="name">Ryan Mao</div>
    </div>
    );
  }
}

export default Header;
