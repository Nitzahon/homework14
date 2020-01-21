import React, { Component } from "react";

export default class AddDevice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: ""
    };
  }
  addType = (e) =>{
    this.setState({type: e.target.value});
  };
  addDev = () =>{
    if(this.state.type===""){
      alert("You must choose a device");
      return;
    }
    else{
      this.props.addDev(
        {type:this.state.type,
        flag:"#ff0000"}
      );
    }
  };
  render() {
    return (
      <div className="addDevComp">
        <select
          name="deviceType"
          onChange={this.addType}
          className="roomInp roomSel">
          <option selected disabled>
            Choose Device
          </option>
          <option value="Stereo">Stereo</option>
          <option value="Lamp">Lamp</option>
          <option value="Kettle">Kettle</option>
          <option value="Air Conditioner">Air Conditioner</option>
          <option value="Fan">Fan</option>
          <option value="Boiler">Boiler</option>
          <option value="Television">Television</option>
        </select>
        <div className="AddBtnCtnr row">
          <div className="col-1"></div>
          <button onClick={this.addDev} className="btn btn-primary col-2 addBtnDev">Add</button>
          <div className="col-9"></div>
        </div>
      </div>
    );
  }
}
