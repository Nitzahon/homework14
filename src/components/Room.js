import React, { Component } from "react";
import DeviceComp from "./DeviceComp";

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: props.room.location.state.room,
      index: props.room.location.state.index
    };
  }
  upR = (device,index)=>{
    var tempRooms = this.state.room;
    tempRooms.devices[index] = device;
    this.setState({ room: tempRooms});
    this.props.upR(this.state.room, this.state.index);
  };
  render() {
    return (
      <div className="row">
          <div className="col-1"></div>
        <div className="col-5 roomdetails">
            <div className="row">Room Name: {this.state.room.name}</div>
            <div className="row">Room Type: {this.state.room.type}</div>
        </div>
        <div className="col-4">
            {this.state.room.devices.map((elm, i) => {
            return (<DeviceComp
                device={elm}
                index={i}
                upR={this.upR}
              />);})}
        </div>
        <div className="col-2"></div>
      </div>
    );
  }
}
