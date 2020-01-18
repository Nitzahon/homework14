import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home.js'
import AddRoom from "./components/AddRoom";
export default class App extends Component {
  state = {
    rooms: [
      {
        name:"Bathroom",
        color:"#e41bd0",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"#ffffff",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },      {
        name:"Bathroom",
        color:"red",
        type:"bathroom",
        devices:[]
      },
    {
      name:"Parents",
      color:"royalblue",
      type:"bedroom",
      devices:[]
    }
  ]
  };
  AddRoom=(room)=>{
    this.setState({rooms: [...this.state.rooms, room]});
}
UpdateRoom=(room, index)=>{
  var tempRooms=[...this.state.rooms];
  tempRooms[index]=room;
  this.setState({rooms:[...tempRooms]});
}
  render() {

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <Router>
              <div className="shTitle">Smart house</div>
              <Switch>
                <Route exact path="/" component={()=>{return <Home rooms={this.state.rooms} addR={this.AddRoom} upR={this.UpdateRoom}/>}}/>
                <Route exact path="/AddRoom" component={()=>{return <AddRoom/>}}/>
              </Switch>
            </Router>

          </header>
        </div>
      </div>
    );
  }
}
