import React, { Component } from "react";
import "./Piece.css";

class Piece extends Component {
  state = {};

  dragStart = event => {
    const { target } = event;
    event.dataTransfer.setData("piece_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  dragOver = event => {
    event.stopPropagation();
  };

  render() {
    return (
      <div
        draggable="true"
        id="1"
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        className="piece-wrapper"
      ></div>
    );
  }
}

export default Piece;
