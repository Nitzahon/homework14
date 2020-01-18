import React, { Component } from "react";

export default class AddRoom extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <select className="roomInp roomSel">
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
            <input name="roomName" maxlength="5" className="roomInp" />
          </div>
          <div className="col-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">   
            <input name="roomColor" type="color" className="roomInp" />
          </div>
          <div className="col-3"></div>
        </div>

        <br />
        <div className="row">
            <div className="col-1"></div>
          <div className="col-3">
            <button className="btn btn-info crtRm">Create</button>
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    );
  }
}
