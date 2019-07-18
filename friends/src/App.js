import React from "react";
import "./App.css";

import { Route, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./helper/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Link to="/">Login</Link>
      <Link to="/friendslist">FriendsList</Link>

      <Route exact path="/" render={props => <Login {...props} />} />
      <PrivateRoute path="/friendsList" component={FriendsList} />
    </div>
  );
}

export default App;
