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
  addDev = device => {
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
    console.log("show");
    if (this.state.flag === true) {
      console.log("true");
      return (
        <div>
          <AddDevice />
        </div>
      );
    } else {
      console.log("false");
      return <div>False</div>;
    }
    //   console.log("show rendered");
    // return (<div>Tester</div>);
    // if (this.state.flag === true) {
    //   return (
    //     <div className="row addDevice">
    //       TRUE
    //       <div className="col-12 addDevComp">
    //         <select
    //           name="deviceType"
    //           onChange={this.addType}
    //           className="roomInp roomSel"
    //         >
    //           <option selected disabled>
    //             Choose Device
    //           </option>
    //           <option value="Stereo">Stereo</option>
    //           <option value="Lamp">Lamp</option>
    //           <option value="Kettle">Kettle</option>
    //           <option value="Air Conditioner">Air Conditioner</option>
    //           <option value="Fan">Fan</option>
    //           <option value="Television">Television</option>
    //         </select>
    //       </div>
    //     </div>
    //   );
    // } else {
    //   return <div>FLASE</div>;
    // }
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

        <div className="addDevComp">{this.show}</div>
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
