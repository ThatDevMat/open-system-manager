import { MDBContainer } from "mdbreact";
import React, { Component } from "react";
import NavBar from '../components/NavBar';
class InputPage extends Component {
  constructor() {
    super();
    this.state = {
      value: "Controlled input with value",
      iconInput: "eye-slash",
      typeInput: "password"
    };

    this.nextInputRef = null;
  }

  componentDidMount() {
    document.querySelectorAll(".iconHover").forEach(el => (el.style.cursor = "pointer"));
  }

  handleSubmit = event => {
    alert("MDBInput value: " + this.state.value);
    event.preventDefault();
  };

  saveToState = value => this.setState({ value });

  getValue = value => console.log(value);

  handleChange = event => this.setState({ value: event.target.value });

  changeFocus = () => this.nextInputRef.focus();

  mouseEnter = () => {
    this.setState({
      iconInput: "eye",
      typeInput: "text"
    });
  };

  mouseLeave = () => {
    this.setState({
      iconInput: "eye-slash",
      typeInput: "password"
    });
  };

  render() {
    return (
    <div>
      <MDBContainer>
          <h1>Hello</h1>
      </MDBContainer>
    </div>
    );
  }
}

export default InputPage;
