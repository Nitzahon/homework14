import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgc: "#ff0000",
      type: "",
      name: ""
    };
  }
  addProp = e => {
    switch (e.target.name) {
      case "roomType":
        this.setState({ type: e.target.value });
        break;
      case "roomName":
        this.setState({ name: e.target.value });
        break;
      case "roomColor":
        this.setState({ bgc: e.target.value });
        break;
      default:
        break;
    }
  };
  createRoom = () => {
    if(this.state.type===''){
      alert("You must choose a room type!");
      return;
    }
    if(this.state.name.length<1){
      alert("ERROR");
      return;
    }
    this.props.addR({
      name: this.state.name,
      type: this.state.type,
      color: this.state.bgc,
      devices: []
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <select
              name="roomType"
              onChange={this.addProp}
              className="roomInp roomSel"
            >
              <option selected disabled>
                Choose Room Type
              </option>
              <option value="Kitchen">Kitchen</option>
              <option value="Bathroom">Bathroom</option>
              <option value="Bedroom">Bedroom</option>
            </select>
          </div>
          <div className="col-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <input name="roomName" onChange={this.addProp} maxlength="5" className="roomInp" placeholder="Name..." />
          </div>
          <div className="col-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 colorTitle">
            Choose color
            <input name="roomColor" onChange={this.addProp} type="color" className="roomInp row" defaultValue="#ff0000"/>
          </div>
          <div className="col-3"></div>
        </div>

        <br />
        <div className="row">
          <div className="col-1"></div>
          <div className="col-3">
          <Link to="/">
            <button onClick={this.createRoom} className="btn btn-primary crtRm">Create</button>
            </Link>
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    );
  }
}
