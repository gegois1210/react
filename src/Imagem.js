import React, { Component } from 'react';
import './Imagem.css';



class Imagem extends Component {
    render() {
        return (
            <div className="Imagem">
            <section>
              <div className="Bloco">
                <img src="http://www.geocities.ws/eletronicmusic/eletro02.jpg" alt=""/>
                 <h1> Name Artist </h1>
                <img src="http://www.geocities.ws/eletronicmusic/eletro02.jpg" alt=""/>
                <h1> Name Artist </h1>
                <img src="http://www.geocities.ws/eletronicmusic/eletro02.jpg" alt=""/>
                <h1> Name Artist </h1>
              </div>
              <div className ="Bloco">
                <img src="http://www.geocities.ws/eletronicmusic/eletro02.jpg" alt=""/>
                <h1> Name Artist </h1>
                <img src="http://www.geocities.ws/eletronicmusic/eletro02.jpg" alt=""/>
                <h1> Name Artist </h1>
                <img src="http://www.geocities.ws/eletronicmusic/eletro02.jpg" alt=""/>
                <h1> Name Artist </h1>
              </div>
            </section>
            
            </div>
        );
    }
}

export default Imagem;