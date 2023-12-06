import React, { Component } from "react";
import './css/Terminal.css';
import NavigationBar from "./Navbar";
import resume from "./files/Ryan_Mao_Resume.pdf"

const helpString = "Enter a command to proceed! Clickable buttons appear on the navbar below.\nAvailable commands: `help`, `about`, `experience`, `resume`, `clear`\nLinks to relevant sites are available via the buttons in the top left corner.";

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      command: "",
      output: "",
    };
    this.inputRef = React.createRef();
    this.date = this.formatDate();
  }
  constants = require("./navbar-constants");

  scrollToBottom = () => {
    const terminalDiv = document.querySelector('.terminal');
    if (terminalDiv) {
      terminalDiv.scrollTop = terminalDiv.scrollHeight;
    }
  };

  openResume = () => {
    window.open(resume, "_blank");
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleInputChange = (event) => {
    this.setState({ command: event.target.value });
  };

  handleCommand = (command) => {
    switch (command) {
      case "clear":
        this.setState((prevState) => ({
          output: "",
          command: "",
        }), this.scrollToBottom);
        break;
      case "help":
        this.setState((prevState) => ({
          output: prevState.output + "guest@rm-web:~$  " + command + "\n" + helpString + "\n" ,
          command: "",
        }), this.scrollToBottom);
        break;
      case "about":
        this.setState((prevState) => ({
          output: prevState.output + "guest@rm-web:~$  " + command + "\n" ,
          command: "",
        }), this.scrollToBottom);
        this.props.openAbout();
        break;
      case "resume":
        this.setState((prevState) => ({
          output: prevState.output + "guest@rm-web:~$  " + command + "\n" ,
          command: "",
        }), this.scrollToBottom);
        this.openResume();
        break;
      case "experience":
        this.setState((prevState) => ({
          output: prevState.output + "guest@rm-web:~$  " + command + "\n" ,
          command: "",
        }), this.scrollToBottom);
        this.props.openExperience();
        break;
      default:
        this.setState((prevState) => ({
          output: prevState.output + "guest@rm-web:~$  " + command + "\n Command not found\n" ,
          command: "",
        }), this.scrollToBottom);
    }
  }

  handleNavigation = (command) => {
    this.handleCommand(command);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { command } = this.state;
    if (command !== "") {
      this.handleCommand(command);
    }
  };


  formatDate = () => {
    const date = new Date();
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    return date.toLocaleTimeString("en-US", options).replace(/,/g, '');
  };

  render() {
    const { command, output } = this.state;
  

    return (
      <div className="terminal" onClick={() => this.inputRef.current.focus()}>
        <pre>
          {"👋 Welcome to my site! Click or type a command to continue."}
        </pre>
        <pre className="grey">
          {"Last Login: " + this.date}
        </pre>
        <pre className="aged">
          {output}
        </pre>
        <form onSubmit={this.handleSubmit}>
          <span className="input-prefix">guest@rm-web:~$</span>
          <input
            type="text"
            spellCheck="false"
            value={command}
            onChange={this.handleInputChange}
            ref={this.inputRef}
          />
        </form>
        <NavigationBar userInput={command} handleNavigation={this.handleNavigation} />
      </div>
    );
  }
}

export default Terminal;
