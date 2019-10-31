import React from 'react';
import './Card.css';


class Card extends React.Component {
  onSelect = () => {
    this.props.onClickCard(this.props.card)
  }
  render(){
    return( 
      
      <div className="all-card" onClick={this.onSelect}>
        {
        this.props.card.estado === 'oculta' ?
        <div className="oculta"></div>
        :
        <div className="card">
          <h5 className="text">{this.props.card.texto}</h5>
          <img src={this.props.card.foto} className="img" alt={this.props.card.text}/>
        </div>
      }
      </div>
      
    )
  }



}
export default Card;