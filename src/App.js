import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import AddRoom from "./components/AddRoom";
import Room from "./components/Room";
export default class App extends Component {
  state = {
    rooms: [
      {
        type: "Kitchen",
        name: "A",
        color: "#00FF00",
        devices: [
          {
            flag: "#ff0000",
            type: "Lamp"
          },
          {
            flag: "#ff0000",
            type: "Lamp"
          },
          {
            flag: "#ff0000",
            type: "Lamp"
          },
          {
            flag: "#ff0000",
            type: "Lamp"
          },
          {
            flag: "#ff0000",
            type: "Lamp"
          },
          {
            flag: "#ff0000",
            type: "Lamp"
          },
          {
            flag: "#ff0000",
            type: "Lamp"
          }
        ]
      },
      {
        type: "Kitchen",
        name: "A",
        color: "#00FF00",
        devices: [
          {
            flag: "#ff0000",
            type: "Lamp"
          }
        ]
      },
      {
        type: "Kitchen",
        name: "A",
        color: "#00FF00",
        devices: [
          {
            flag: "#ff0000",
            type: "Lamp"
          }
        ]
      },
      {
        type: "Kitchen",
        name: "A",
        color: "#00FF00",
        devices: [
          {
            flag: "#ff0000",
            type: "Lamp"
          }
        ]
      }
    ]
  };
  AddRoom = room => {
    this.setState({ rooms: [...this.state.rooms, room] });
  };
  UpdateRoom = (room, index) => {
    var tempRooms = [...this.state.rooms];
    tempRooms[index] = room;
    this.setState({ rooms: [...tempRooms] });
  };

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <Router>
              <Link className="shTitle" to="/">
                Smart house
              </Link>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => {
                    return <Home rooms={this.state.rooms} />;
                  }}
                />
                <Route
                  exact
                  path="/AddRoom"
                  component={() => {
                    return <AddRoom addR={this.AddRoom} />;
                  }}
                />
                <Route
                  exact
                  path="/Room"
                  component={(room, ind) => {
                    return <Room room={room} i={ind} upR={this.UpdateRoom} />;
                  }}
                />
              </Switch>
            </Router>
          </header>
        </div>
      </div>
    );
  }
}
