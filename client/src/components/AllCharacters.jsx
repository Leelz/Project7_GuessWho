import React from 'react';
import Character from "./Character.jsx";

class AllCharacters extends React.Component {

  render() {

    const characters = this.props.allCharacters.map((character, index) =>
      <Character key={index} img={character.img} />
      );
    return (
      <div className="characters">
      {characters}
      </div>
      )
  };
}

export default AllCharacters;