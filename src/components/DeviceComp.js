import React, { Component } from 'react'

export default class DeviceComp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          index: props.index,
          flag: props.device.flag,
          type: props.device.type
        };
      }
    toggle=()=>{
        var colr;
        if(this.state.flag==="#ff0000"){
            colr="#00ff00";
        }
        else{
            colr="#ff0000";
        }
        this.setState({flag:colr});
        var tempVice = {
            flag:colr,
            type:this.state.type

        }
        this.props.upR(tempVice,this.state.index);
         
    }
    render() {
        return (
            <div className="devices" onClick={this.toggle} style={{ backgroundColor: this.state.flag }}>
                <span className="disable-selection">{this.state.type}</span>
            </div>
        )
    }
}
