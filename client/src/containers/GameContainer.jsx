import React from'react';
import Character from '../components/Character.jsx'
import AllCharacters from '../components/AllCharacters.jsx'

var characters = [
{
  name: "The Dude",
  brown_hair: true,
  beard: true,
  glasses: false,
  img: "http://thescript.thetake.com/wp-content/uploads/2015/08/The-Big-Lebowski-White-Russian.jpeg"
},
{
  name: "Donnie",
  long_hair: true,
  beard: false,
  glasses: false,
  img: "http://i.imgur.com/VuVxuB8.jpg"
},
{
  name: "Walter",
  long_hair: false,
  beard: true,
  glasses: true,
  img: "http://vignette2.wikia.nocookie.net/thebiglebowski/images/5/58/John-goodman-thebiglebowski-2.jpg/revision/latest?cb=20111216185009"
}]

class GameContainer extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    characters: [],
    selectedCharacteristic: null,
    selectedCharacter: null,
    }
  }

  populateCharacters () {
    var allCharacters = [];
    for (var character of characters) {
      allCharacters.push(character);
    }
    return allCharacters;
  }

  flip (div) {
      div.parentNode.classList.toggle("flipped");
  }

  componentWillMount () {
    this.setState({characters: this.populateCharacters()});
  }

  render () {
    return (
      <div>
      <AllCharacters allCharacters={this.state.characters} flipCard={this.flip}></AllCharacters>
    </div>
    )
  }
}

export default GameContainer;