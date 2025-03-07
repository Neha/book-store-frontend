import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import SignUpPage from './components/SignUp/SignUpPage';
import LoginPage from './components/Login/LoginPage';
import Navigation from './components/Navigation';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/signup" component={() => <SignUpPage/>}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/logout" component={Logout}/>
      </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
