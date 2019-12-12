import React, { Component } from "react";
import "./Piece.css";

class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragged: false
    };
  }

  dragStart = event => {
    const { target } = event;
    event.dataTransfer.setData("piece_id", target.id);
    this.setState({ dragged: true });
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  dragOver = event => {
    event.stopPropagation();
  };

  render() {
    console.log(this.state.dragged);
    return (
      <div
        draggable="true"
        id="1"
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        className={`piece-wrapper ${this.state.dragged ? "dragged" : "still"}`}
      ></div>
    );
  }
}

export default Piece;
