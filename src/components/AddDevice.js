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
          <option value="Television">Television</option>
        </select>
      </div>
    );
  }
}
