import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {

    static defaultProps = {
        nrows: 5,
        ncols: 5
    }

  constructor(props) {
    super(props);
    this.state = {
        hasWon: false,
        board: this.createBoard()
    }
  }

  restart = () => {
      this.setState({hasWon: false, board: this.createBoard()});
  }

  randomBoolean = () => (Math.floor(Math.random() * 4)) === 0 ? true: false;

  createBoard() {
    let {nrows, ncols} = this.props;
    let board = [];
    for(var i = 0; i < nrows; i++){
        board[i] = [];
        for(var j=0; j < ncols; j++){
            board[i][j] = this.randomBoolean();
        }
    }
    return board
  }

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    flipCell(y, x);
    flipCell(y-1, x);
    flipCell(y+1, x);
    flipCell(y, x-1);
    flipCell(y, x+1);
    let hasWon = board.every(row => row.every(cell => !cell));
    this.setState({board, hasWon});
  }

  render() {
    return(
        (this.state.hasWon 
            ?   <div>
                <div className="Board-title winner">
                <div className="neon">You</div>
                <div className="flux">Win</div>
                </div>
                <button className="neon" id="restartBtn" onClick={this.restart}>Restart</button>
                </div> 
            :   <div>
                <div class="Board-title">
                    <div class="neon">Lights</div>
                    <div class="flux">Out</div>
                </div>
                <table className="Board">
                <tbody>
                    {this.state.board.map( (row,i) => 
                        <tr key={i}> 
                            {row.map( (cell, j) => 
                                <Cell
                                    key={i+'-'+j} 
                                    isLit={cell} 
                                    flipCellsAround = {() => this.flipCellsAround(i+'-'+j)}  
                                />)
                            }
                        </tr>)
                    }
                </tbody>
                </table>
                </div>)
    )
  }
}


export default Board;
