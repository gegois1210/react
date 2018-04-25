import React, { Component } from 'react';
import './Cabecalho.css';
import logo from './img/logo.png';



class Cabecalho extends Component {
  render() {
    return (
      <div className="Cabecalho">
      <div> 
      <img src={logo} alt=""/>
      </div>
      
      <h1> G Music </h1>
      
      </div>
    );
  }
}

export default Cabecalho;