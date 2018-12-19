import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// My Components:
import NavigationBar from "./Components/NavigationBar";
import Jumbo from "./Components/Jumbo";
// My Routes:
import DistributionEvents from "./Routes/DistributionEvents";
import About from "./Routes/About";

class App extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Jumbo />
          <h1>Users</h1>
          {this.state.users.map(user => (
            <div key={user.id}>{user.username}</div>
          ))}
          <Switch>
            <Route exact path="/" />
            <Route path="/distributionevents" component={DistributionEvents} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
