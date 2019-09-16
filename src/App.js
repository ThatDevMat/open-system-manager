import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBNav } from "mdbreact";
import "./index.css";
import logo from "./logo.png";
import Routes from './Routes'
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Routes />
      </div>
    );
  }
}

export default App;
