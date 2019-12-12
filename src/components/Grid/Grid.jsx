import React, { Component } from "react";
import { Piece } from "../Piece";
import { Square } from "../Square";
import "./Grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: false
    };
  }

  drop = event => {
    const { target } = event;
    event.preventDefault();
    const piece_id = event.dataTransfer.getData("piece_id");
    const card = document.getElementById(piece_id);
    target.appendChild(card);
    card.style.display = "inline-block";
    card.classList.remove("dragged");
    target.appendChild(card);
    target.classList.remove("grid-over");
  };
  dragOver = event => {
    event.preventDefault();
  };
  render() {
    const { highlighted } = this.state;
    return (
      <div className="grid-wrapper">
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={() => this.dragLeave()}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        >
          <Piece></Piece>
        </Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={this.drop}
          dragOver={this.dragOver}
          OnDragLeave={this.dragLeave}
        ></Square>
      </div>
    );
  }
}

export default Grid;
