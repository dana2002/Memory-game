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
    cardPrevious: null
  }
  componentDidMount() {
    getCards().then((Response) => {
      this.setState(() => { return { cartas: Response } })
    });
  }

  hendleClickCard = (cartaSeleccionada) => {
    console.log(cartaSeleccionada)
    cartaSeleccionada.estado = 'jugando'

    if (this.state.card1 === null) {
      this.setState(() => {
        return { card1: cartaSeleccionada }
      })
    } else if (this.state.card2 === null) {
      this.setState(() => {
        return { card2: cartaSeleccionada }
      })
    } else {
      if (this.state.card1.idPar === this.state.card2.idPar) {
        console.log('par')
      } else {
        console.log('no par')
        cartaSeleccionada.estado = 'oculta'
      }
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