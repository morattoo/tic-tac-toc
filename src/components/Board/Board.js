import React from 'react';
import './Board.css';
import Square from '../Square/Square';



class Board extends React.Component {
  renderSquare(i) {
    return <Square
    value={this.props.squares[i]}
    onClick={() => this.props.onClick(i)}
  />
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    return (
      <div className="board">
       {this.props.squares.map((item, index) => <Square key={index} value={item} onClick={() => this.props.onClick(index)}/>)} 
      </div>
    );
  }
}

Board.propTypes = {};

Board.defaultProps = {};

export default Board;
