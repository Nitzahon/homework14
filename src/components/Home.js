import React, { Component } from "react";
import RoomLink from "./RoomLink.js";
import { Link } from "react-router-dom";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: props.rooms
    };
  }
//   AddRoom = (room)=>{
//     this.props.addR(room);
//   }
  render() {
    return (
      <div>
        <div className="roomList">
          {this.state.rooms.map((elm, i) => {
            return (
              <Link to={{
                pathname: "/Room",
                state: { room: elm, index:i }
              }}>
                <RoomLink
                  name={elm.name}
                  type={elm.type}
                  index={i}
                  color={elm.color}
                />
        </Link>
            );
          })}
        </div>
        <div>
          <div className="btncontainer">
          <Link to="/AddRoom">
            <button className="btn btn-primary circbtn rounded-circle">+</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
