import React from 'react';
import './App.css';
import Card from './components/Card';
import { getCards } from './mem/mem';

class App extends React.Component {
  state = {
    cartas: [],
    card1: null,
    card2: null,
    encontrada: null,
    cardPrevious: null,
    estado: 'Oculto'
  }
  componentDidMount() {
    getCards().then((Response) => {
      this.setState(() => { return { cartas: Response } })
    });
  }

  handleClickCard = (cartaSeleccionada) => {
    

    let carta1 = this.state.card1;
    let carta2 = this.state.card2;

    if (cartaSeleccionada.estado === 'oculta') {

      cartaSeleccionada.estado = 'jugando'

      if (carta1 === null) {

        this.setState(() => {
          return { card1: cartaSeleccionada }
        })

      } else if (carta2 === null) {

        this.setState(() => {
          return { card2: cartaSeleccionada }
        })

        if (carta1.idPar === cartaSeleccionada.idPar) {

          let arrayActualizado = this.state.cartas.map((elemento) => {

            if (elemento.id === carta1.id || elemento.id === cartaSeleccionada.id) {
              elemento.estado = 'encontrada'
            }
            return elemento;
          })

          this.setState(() => {
            return { cartas: arrayActualizado }
          })
        }
      } else {

        console.log('holaaa')
        let nuevoArray = this.state.cartas.map((elemento) => {

          if (elemento.estado !== 'encontrada' && elemento.id !== cartaSeleccionada.id) {
            elemento.estado = 'oculta'
          }
          return elemento
        })

        this.setState(() => {
          return {
            cartas: nuevoArray,
            card1: cartaSeleccionada,
            card2: null
          }
        })



      }
      console.log(this.state.cartas)
    }
  }



  render() {
    return (
      <div className="App">
        <div className='App-header'>
          {this.state.cartas.map((card) => {
            return (
              <Card key={card.id} card={card} onClickCard={this.handleClickCard}></Card>
            )
          })}
        </div>
      </div>
    );
  }

}
export default App;