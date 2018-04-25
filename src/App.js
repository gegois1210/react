import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cabecalho from './Cabecalho';
import Corpo from './Corpo';
import Imagem from './Imagem';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <Corpo/>
        <Imagem/>

      </div>
    );
  }
}

export default App;
