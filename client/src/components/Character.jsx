import React from 'react';
import Characters from './AllCharacters'

class Character extends React.Component {

  handleClick (event) {
      this.props.onCardClick(event.target);
    }

  render() {
    return (
      <div
              className="flip-container"
              onClick={this.handleClick}
            >
              <div className="flipper" >
                <img src={this.props.img} className="front"/>
                <img src="img/card.jpeg" className="back" />
              </div>
            </div>
          );
  };
}

export default Character;