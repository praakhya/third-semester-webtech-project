import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js';
import homeBg from './images/homeBg.png';
import Login from './Login';
import Nav from './Nav'
function App() {

  const [navVisibility, setVisibility] = useState(false);
  const toggleNav=()=>{
    setVisibility(navVisibility => !navVisibility);
  }
  const [homeVisibility, setHomeVisibility] = useState(true);
  const offHome = () => {setHomeVisibility(homeVisibility => false)};
  const onHome = () => {setHomeVisibility(homeVisibility => true)};
  const [loginVisibility, setLoginVisibility] = useState(false);
  const offLogin = () => {setLoginVisibility(loginVisibility => false)};
  const onLogin = () => {setLoginVisibility(loginVisibility => true)};
  return (
    <div className="App">
      {navVisibility?<Nav offHome = {offHome} onHome = {onHome} offLogin = {offLogin} onLogin = {onLogin}/>:<span></span>}
      <div>
        <img className="App-logo" src={logo} onClick={toggleNav}></img>
        <Heading/>
        {homeVisibility?<img className="homePic" src={homeBg}></img>:<span></span>}
        {loginVisibility?<Login/>:<span></span>}
        <span></span>
      </div>
    </div>
  );
}

export default App;
