import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

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

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
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


  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    // let {ncols, nrows} = this.props;
    // let board = this.state.board;
    // let [y, x] = coord.split("-").map(Number);


    // function flipCell(y, x) {
    //   // if this coord is actually on board, flip it

    //   if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
    //     board[y][x] = !board[y][x];
    //   }
    // }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    // this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else

    return(
        <table className="Board">
            <tbody>
                {this.state.board.map( (row,i) => 
                    <tr key={i}> 
                        {row.map( (cell, j) => 
                            <Cell
                                key={i+'-'+j} 
                                isLit={cell} 
                                flipCellsAroundMe = {this.flipCellsAround} 
                            />)
                        }
                    </tr>)
                }
            </tbody>
        </table>
    )

    // TODO
  }
}


export default Board;
