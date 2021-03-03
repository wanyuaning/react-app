import React from 'react'
import Board from './Board'
import Timer from './Timer'
import Person from './Person'

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <Person name="ewan" />
          <Timer />
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game;