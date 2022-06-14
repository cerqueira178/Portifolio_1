import React, { Component } from 'react';
import './style.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botao: 'VAI'
        };

        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){ 

        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'VAI';
        }else{
            this.timer = setInterval(()=>{
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            },100)
            state.botao = 'PAUSAR';
        }

        this.setState(state);
    }

    limpar(){

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;
        state.numero = 0;
        state.botao =  'VAI';
        this.setState(state);


    }

        render(){
            return(
                <div className="container">
<<<<<<< HEAD
                    <h1>Aqui está um belo cronômetro cinza-azulado</h1>
=======
                    <h1>Aqui está um lindo cronômetro</h1>
>>>>>>> 3b210dc (update cronometro description)

                    <img className="img" src={require('./assets/cronometro.png')} alt="cronometro"/>
                    <a className="timer">{this.state.numero.toFixed(1)}</a>

                    <div className="areaBtn">
                        <a className="botao" onClick={this.vai}>{this.state.botao}</a>
                        <a className="botao" onClick={this.limpar}>LIMPAR</a>
                    </div>

                <h1>Utilizando react. trabalhando com workflow centralizado</h1>
                </div>
            );
        }
}

export default App;
