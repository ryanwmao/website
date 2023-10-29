import React, { Component } from "react";
import './Terminal.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";



class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      command: "",
      output: "",
    };
    this.inputRef = React.createRef();

  }
  
  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleInputChange = (event) => {
    this.setState({ command: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { command } = this.state;
    const helpString = "helpful text here\n";
    if (command !== "") {
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
            output: prevState.output + "guest@rm-web:~$  " + command + "\n \n" ,
            command: "",
          }));
          this.props.openModal("asdf");
          break;
        default:
          this.setState((prevState) => ({
            output: prevState.output + "guest@rm-web:~$  " + command + "\n Command not found\n" ,
            command: "",
          }));

      }
      
      this.scrollToBottom();
    }
  };

  scrollToBottom = () => {
    if (this.inputRef.current) {
      this.inputRef.current.scrollTop = this.inputRef.current.scrollHeight;
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
    const githubUrl = "https://github.com/ryanwmao";
    const linkedInUrl = "https://www.linkedin.com/in/ryanwmao/";
    const emailUrl = "mailto:rwm275@cornell.edu";

    return (
      <div className="terminal" onClick={() => this.inputRef.current.focus()}>
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
        <pre>
          {"Welcome to my site! Enter 'help' for assistance. \nLast Login: " + this.formatDate() +  "\n" + output}
        </pre>
        <form onSubmit={this.handleSubmit}>
          <span className="input-prefix">guest@rm-web:~$</span>
          <input
            type="text"
            value={command}
            onChange={this.handleInputChange}
            ref={this.inputRef}
          />
        </form>
      </div>
    );
  }
}

export default Terminal;
