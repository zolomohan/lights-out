import React, {Component} from 'react'
import "./Cell.css"

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.flipCellsAround();
  }

  render() {
    return <td className={"Cell" + (this.props.isLit ? " Cell-lit" : "")} onClick={this.handleClick} />
  }
}

export default Cell