import React, { useState } from 'react';
import { Collapse } from 'bootstrap';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js';
import Login from './Login';
import Nav from './Nav'
import Signup from './Signup';
import Main from './Main';
import Home from './Home';


function App() {

  const [loggedIn, setLog] = useState(false);
  const [navVisible, setVisibility] = useState(true);
  const toggleNav=()=>{
    setVisibility(navVisibility => !navVisible);
  }
  var headRef = React.createRef();
  var mainRef = React.createRef();
  var navRef = React.createRef();
  var signRef = React.createRef();
  var logRef = React.createRef();



  return (
    <div className="App">
      <Heading></Heading>
      <img src={logo} className="openNav" onClick={toggleNav}/>
      <Nav visible={navVisible} className="collapse show"></Nav>
    </div>
    
  );
}

export default App;
