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

  render() {
    const { highlighted } = this.state;
    const { drop, dragOver } = this.props;
    return (
      <div className="grid-wrapper">
        <Square
          highlighted={highlighted}
          drop={drop}
          dragOver={dragOver}
          OnDragLeave={() => this.dragLeave()}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={drop}
          dragOver={dragOver}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={drop}
          dragOver={dragOver}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={drop}
          dragOver={dragOver}
        ></Square>
        <Square highlighted={highlighted} drop={drop} dragOver={dragOver}>
          <Piece></Piece>
        </Square>
        <Square
          highlighted={highlighted}
          drop={drop}
          dragOver={dragOver}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={drop}
          dragOver={dragOver}
        ></Square>
        <Square
          highlighted={highlighted}
          drop={drop}
          dragOver={dragOver}
        ></Square>
      </div>
    );
  }
}

export default Grid;
