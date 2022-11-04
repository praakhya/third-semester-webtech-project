import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js';
import homeBg from './images/homeBg.png';
import Login from './Login';
import Nav from './Nav'
import Signup from './Signup';
import Main from './Main';


function App() {

  const [loggedIn, setLog] = useState(false);
  const [navVisible, setVisibility] = useState(false);
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
      <Main headRef={headRef} ref={mainRef} signRef={signRef} logRef={logRef} navRef={navRef}></Main>
      {false && <Signup headRef={headRef} mainRef={mainRef} ref={signRef} logRef={logRef} navRef={navRef}></Signup>}
      {false && <Login headRef={headRef} mainRef={mainRef} signRef={signRef} ref={logRef} navRef={navRef}></Login>}
      {navVisible?<Nav headRef={headRef} mainRef={mainRef} signRef={signRef} logRef={logRef} ref={navRef}></Nav>:<span></span>}
    </div>
    
  );
}

export default App;
