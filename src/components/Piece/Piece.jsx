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
    const { target, dataTransfer } = event;
    dataTransfer.setData("piece_id", target.id);
    const div = <div></div>;
    // dataTransfer.setDragImage(document.createElement("div"), 0, 0);
    this.setState({ dragged: true });
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  dragEnd = () => {
    this.setState({ dragged: false });
  };

  dragOver = event => {
    event.stopPropagation();
  };

  render() {
    console.log(this.state.dragged);
    const { dragged } = this.state;
    return (
      <div
        className={`piece-handle ${dragged ? " noGhost" : ""}`}
        onDragStart={this.dragStart}
        onDragEnd={this.dragEnd}
        onDragOver={this.dragOver}
        draggable="true"
        id="1"
      >
        <div
          draggable="false"
          className={`piece-wrapper ${dragged ? " dragged" : ""}`}
        ></div>
      </div>
    );
  }
}

export default Piece;
