import React, { Component } from "react";

export default class RoomLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: props.index,
      bgc: props.color,
      type: props.type,
      name: props.name
    };
  }
  render() {
    return (
      <div>
        <button
          className="btn roomSq roomName"
          style={{ backgroundColor: this.state.bgc }}
        >
          {this.state.name}
        </button>
      </div>
    );
  }
}
