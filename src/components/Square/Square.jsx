import React, { Component } from "react";
import "./Square.css";

class Square extends Component {
  state = {
    hover: false
  };
  enterSquare = () => {
    this.setState({ hover: true });
  };
  leaveSquare = () => {
    this.setState({ hover: false });
  };
  render() {
    const { drop, dragOver } = this.props;
    const { hover } = this.state;
    return (
      <div
        className={`square-wrapper${hover === true ? " hover" : ""}`}
        onDragEnter={() => this.enterSquare()}
        onDragLeave={() => this.leaveSquare()}
        onDrop={drop}
        onDragOver={dragOver}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Square;
