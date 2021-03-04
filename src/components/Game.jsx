import React from 'react'
import Board from './Board'
import Timer from './Timer'
import Person from './Person'
import Button from './Button'
import Hello from './Hello'

class Game extends React.Component {
    render() {
      return (
        <div className="game">    
            <Hello ms='是猪' />      
          <Person age={20} />
          <Timer />
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
          <Button />
        </div>
      );
    }
}

  export default Game;