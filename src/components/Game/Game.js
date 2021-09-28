import React from 'react';
import './Game.css';
import Board from '../Board/Board';
import Winner from '../Winner/Winner';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      aWinner: null
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if ( this.state.aWinner || squares[i]) {
      console.log("we have a winner or click used button")
      return
    }else {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        aWinner: calculateWinner(squares)
      });
    }
  }

  renderHistory(history){
    return [...Array(10).keys()].map((value, index) => {
      return (
        <li key={value}>
          <button  disabled={!history[index]} onClick={() => this.jumpTo(index)}>{index ? `${index}`: 'start'}</button>
        </li>
      );
    });
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    let status;
    if (this.state.aWinner) {
      status = 'Winner: ' + this.state.aWinner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = this.renderHistory(history);
    console.log("state render", this.state)

    return (
      <div className="game">
        <div className="game-info">
        <div>{status}</div>
        <ul className="game-info__history">{moves}</ul>
        </div>
        <div className="game-board">
          {this.state.aWinner && <Winner winner={this.state.aWinner}/>}
        <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
}

Game.propTypes = {};

Game.defaultProps = {};

export default Game;
