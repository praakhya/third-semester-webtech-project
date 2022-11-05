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

function App() {

  const [loggedIn, setLog] = useState(false);
  const setLogin = () => { setLog(mainVisibility ? loggedIn => true : loggedIn => false) };
  const [navVisibility, setVisibility] = useState(false);
  const toggleNav = () => {
    setVisibility(navVisibility => !navVisibility);
  }
  const [homeVisibility, setHomeVisibility] = useState(true);
  const offHome = () => { setHomeVisibility(homeVisibility => false) };
  const onHome = () => { setHomeVisibility(homeVisibility => true) };
  const [loginVisibility, setLoginVisibility] = useState(false);
  const offLogin = () => { setLoginVisibility(loginVisibility => false) };
  const onLogin = () => { setLoginVisibility(loginVisibility => true) };
  const [signup, setSignUp] = useState(false);
  const onSignup = () => { setSignUp(signup => true) };
  const offSignup = () => { setSignUp(signup => false) };
  const [mainVisibility, setMain] = useState(false);
  const onMain = () => { setMain(mainVisibility => true) };
  const offMain = () => { setMain(mainVisibility => false) };
  const [user, setUser] = useState({ username: "", fullname: "" });
  const initUser = (usnm, flnm) => { var newUser = { username: usnm, fullname: flnm }; setUser(user => newUser) };
  const comps = [{ name: "home", on: onHome, off: offHome },
  { name: "login", on: onLogin, off: offLogin },
  { name: "signup", on: onSignup, off: offSignup },
  { name: "main", on: onMain, off: offMain }];
  const toggleVisibility = (keepCompOn, comps) => {
    console.log(keepCompOn, comps);
    for (var i of comps) {
      if (keepCompOn == i.name) {
        i.on();
      }
      else {
        i.off();
      }
    }
  }
  const topBooks = [
    {
      name: "It ends with us",
      author: "Collin Hoover",
      cover: img1
    },
    {
      name: "Go-To Dinners: A Barefoot Contessa Cookbook",
      author: "Ina Garten",
      cover: img2
    },
    {
      name: "And There Was Light: Abraham Lincoln and the American Struggle Book",
      author: "Jon Meacham",
      cover: img3
    }
  ]

  return (
    <div className="App">
      <Heading username={user.username} fullname={user.fullname} />
      <img className="openNav" src={logo} onClick={toggleNav}></img>
      <div className='body'>
        <div onMouseLeave ={toggleNav}>
          {navVisibility ? <Nav comps={comps} toggle={toggleVisibility} offHome={offHome} onHome={onHome} offLogin={offLogin} onLogin={onLogin} loggedIn={loggedIn} onMain={onMain} offMain={offMain} /> : <span></span>}
        </div>
        <div className="content">
          {homeVisibility ? <img className="homePic" src={homeBg}></img> : <span></span>}
          {!loggedIn&&loginVisibility ? <Login comps={comps} initUser={initUser} toggle={toggleVisibility} onLogin={onLogin} offLogin={offLogin} onSignup={onSignup} offSignup={offSignup} /> : <span></span>}
          {signup ? <Signup comps={comps} initUser={initUser} toggle={toggleVisibility} /> : <span></span>}
          {mainVisibility ? <Main comps={comps} toggle={toggleVisibility} username={user.username} fullname={user.fullname} topBooks={topBooks} /> : <span></span>}
        </div>
      </div>
    </div>
  );
}

export default App;
