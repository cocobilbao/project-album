import React, { Component } from "react";
import Album from "../src/components/album/album";
import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Album} />
        </Switch>
      </div>
    );
  }
}

export default App;
