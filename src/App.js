import React, { Component } from "react";
import "./App.css";
import "./style/style.css";
import "./style/bootstrap.min.css";
import Header from "./components/header/header";
import TripTable from "./components/tripTable";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <br />
        <TripTable />
      </React.Fragment>
    );
  }
}

export default App;
