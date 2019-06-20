import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LogIn from './views/LogIn';
import FriendsView from './views/FriendsView';
import PrivateRoute from './views/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to='/login'></Link>
          <Link to='/friends'></Link>
        </div>
          <Route path='/login' component={LogIn} />
          <PrivateRoute exact path='/friends' component={FriendsView} />
      </Router>
    </div>
  );
}

export default App;
