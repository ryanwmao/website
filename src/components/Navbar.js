import React from "react";
import './css/Navbar.css';

const NavigationBar = ({ userInput, handleNavigation }) => {
  const constants = require("./navbar-constants");
  const commands = constants.COMMANDS;
  const emojis = constants.COMMAND_EMOJI;
  const filteredCommands = commands.filter(command =>
    command.startsWith(userInput)
  );

  return (
    <div className="navigation-bar">
      {filteredCommands.length > 0 ? (
        <ul className="navbar-list">
          {filteredCommands.map((command, index) => (
            <li key={index} onClick={(e) => {
              e.stopPropagation(); 
              handleNavigation(command)
            }} className="navbar-item">
              {emojis[command] + " " + command}
            </li>
          ))}
        </ul>
      ) : 
        <ul className="navbar-list" />}
    </div>
  );
};

export default NavigationBar;
