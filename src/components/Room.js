import React, { Component } from "react";
import DeviceComp from "./DeviceComp";
import { Link } from "react-router-dom";
import AddDevice from "./AddDevice";

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      room: props.room.location.state.room,
      index: props.room.location.state.index
    };
  }
  addDev = (device) => {
    var tempRoom = this.state.room;
    tempRoom.devices = [...tempRoom.devices, device];
    this.setState({ room: tempRoom });
    this.props.upR(this.state.room, this.state.index);
  };
  upR = (device, index) => {
    var tempRooms = this.state.room;
    tempRooms.devices[index] = device;
    this.setState({ room: tempRooms });
    this.props.upR(this.state.room, this.state.index);
  };
  show = () => {

    if (this.state.flag === true) {
      return (
        <div>
          <AddDevice addDev={this.addDev}/>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  render() {
    console.log("rendered");
    return (
      <div>
        <div className="row roomDeets">
          <div className="col-1"></div>
          <div className="col-5 roomdetails">
            <div className="row">Room Name: {this.state.room.name}</div>
            <div className="row">Room Type: {this.state.room.type}</div>
          </div>
          <div className="col-4">
            <div className="deviceBar">
              {this.state.room.devices.map((elm, i) => {
                return <DeviceComp device={elm} index={i} upR={this.upR} />;
              })}
            </div>
          </div>
          <div className="col-2"></div>
        </div>

        {this.show()}
        <div className="btnContainer row">
          <div className="col-1"></div>
          <div className="col-4">
            <Link to="/">
              <button className="btn btn-primary">Home</button>
            </Link>
          </div>
          <div className="col-2">
            <button
              className="btn btn-primary"
              onClick={() => {
                this.setState({ flag: !this.state.flag });
              }}
            >
              Add Device
            </button>
          </div>
          <div className="col-7"></div>
        </div>
      </div>
    );
  }
}
