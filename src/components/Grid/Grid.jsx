import React, { Component } from "react";
import { Piece } from "../Piece";
import "./Grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  drop = event => {
    event.preventDefault();
    const piece_id = event.dataTransfer.getData("piece_id");
    const card = document.getElementById(piece_id);
    event.target.appendChild(card);
    card.style.display = "block";
    event.target.appendChild(card);
  };
  dragOver = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="grid-wrapper">
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          <Piece></Piece>
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
        <div
          className="grid-square"
          onDrop={this.drop}
          onDragOver={this.dragOver}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Grid;
