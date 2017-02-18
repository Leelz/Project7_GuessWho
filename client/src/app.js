var React = require('react');
var ReactDOM = require('react-dom');
import GameContainer from './containers/GameContainer.jsx';

window.onload = function(){
  ReactDOM.render(
    <GameContainer />,
    document.getElementById('app')
  );
}
