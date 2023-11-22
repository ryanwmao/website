import React, { Component } from "react";
import './css/Terminal.css';
import NavigationBar from "./Navbar";

const helpString = "`help`: display help message\n`about`: about me\n`clear`: clear screen\n";

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

  openResume = () => {
    window.open("../../Ryan_Mao_Resume.pdf", "_blank");
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
        }));
        break;
      case "help":
        this.setState((prevState) => ({
          output: prevState.output + "guest@rm-web:~$  " + command + "\n" + helpString + "\n" ,
          command: "",
        }));
        break;
      case "about":
        this.setState((prevState) => ({
          output: prevState.output + "guest@rm-web:~$  " + command + "\n" ,
          command: "",
        }));
        this.props.openAbout();
        break;
      case "resume":
        this.openResume();
        break;
      case "experience":
        this.setState((prevState) => ({
          output: prevState.output + "guest@rm-web:~$  " + command + "\n" ,
          command: "",
        }));
        this.props.openExperience();
        break;
      default:
        this.setState((prevState) => ({
          output: prevState.output + "guest@rm-web:~$  " + command + "\n Command not found\n" ,
          command: "",
        }));
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
          {"Welcome to my site! Click or type a command to continue. \nLast Login: " + this.date +  "\n" + output}
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
