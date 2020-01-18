import React, { Component } from "react";

export default class RoomLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index:props.index,
      bgc:props.color,
      type:props.type,
      name:props.name
    };
  }
  render() {
    return (
      <div>
        <div className="roomSq" style={{ backgroundColor: this.state.bgc}}>
            <div className="roomName">{this.state.name}</div>
        </div>
      </div>
    );
  }
}
