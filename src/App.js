import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
// import { BrowserRouter as Link, Router } from 'react-router-dom';


export default class App extends Component {
  state={
    rooms:[]
  };
  render() {
    return (
      <div>
            <div className="App">
      <header className="App-header">
       {/* <Router> */}
       <div className="shTitle">
          Smart house
       </div>
       {/* </Router> */}
       <div>

<div className="btncontainer">
  <button className="btn circbtn">+</button>
</div>
       </div>
      </header>
    </div>
      </div>
    )
  }
}

