import React, { Component } from "react";
import "./Square.css";

class Square extends Component {
  state = {};
  render() {
    const { drop, dragOver } = this.props;
    return (
      <div className="square-wrapper" onDrop={drop} onDragOver={dragOver}>
        {this.props.children}
      </div>
    );
  }
}

export default Square;
