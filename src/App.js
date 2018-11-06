import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Main from "./pages/Main";

class App extends Component {
  render() {
    return (
     <container>
       <Main />
      </container>
    );
  }
}

export default App;
