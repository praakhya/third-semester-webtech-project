import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js';
import homeBg from './images/homeBg.png';
import Login from './Login';
import Nav from './Nav'
import Signup from './Signup';
import Main from './Main';
import img1 from "./images/topBooks/itEndsWithUs.jpg";
import img2 from "./images/topBooks/goToDinners.jpeg";
import img3 from "./images/topBooks/andThereWasLight.jpg";
import {GContext} from "./GlobalContext";
function App() {

  return (
    <GContext.Provider>
      <div className="App">
        {navVisibility?<Nav comps = {comps} toggle = {toggleVisibility} offHome = {offHome} onHome = {onHome} offLogin = {offLogin} onLogin = {onLogin} loggedIn = {loggedIn} onMain={onMain} offMain={offMain}/>:<span></span>}
        <div>
          <img className="App-logo" src={logo} onClick={toggleNav}></img>
          <Heading username={user.username} fullname={user.fullname}/>
          {homeVisibility?<img className="homePic" src={homeBg}></img>:<span></span>}
          {loginVisibility?<Login comps = {comps} initUser={initUser} toggle = {toggleVisibility} onLogin = {onLogin} offLogin={offLogin} onSignup={onSignup} offSignup={offSignup}/>:<span></span>}
          {signup?<Signup comps = {comps} initUser={initUser} toggle = {toggleVisibility}/>:<span></span>}
          {mainVisibility?<Main comps = {comps} toggle = {toggleVisibility} username = {user.username} fullname = {user.fullname} topBooks={topBooks}/>:<span></span>}
        </div>
      </div>
    </GContext.Provider>
  );
}

export default App;
