import { useState, useContext } from 'react';
import React from 'react';
import logo from './images/setup/logo.png';
import './App.css';
import Heading from './Heading.js';
import homeBg from './images/homeBg.png';
import Login from './Login';
import Nav from './Nav'
import Signup from './Signup';
import Main from './Main';
import { bookContext, BookConsumer, BookProvider } from './bookContext';
import loginBg from './images/setup/loginBg.jpg';
import MyNav from './MyNav';

function App() {

  const [navVisibility, setVisibility] = useState(false);
  const toggleNav = () => {
    setVisibility(navVisibility => !navVisibility);
  }
  const [signup, setSignUp] = useState(false);
  const onSignup = () => { setSignUp(signup => true) };
  const offSignup = () => { setSignUp(signup => false) };
  const [user, setUser] = useState({ username: "", fullname: "" });
  const initUser = (usnm, flnm) => { var newUser = { username: usnm, fullname: flnm }; setUser(user => newUser) };
  const comps = [{ name: "signup", on: onSignup, off: offSignup }];
  const toggleVisibility = (keepCompOn, comps) => {
    console.log(keepCompOn);
    for (var i of comps) {
      if (keepCompOn == i.name) {
        i.on();
      }
      else {
        i.off();
      }
    }
  }
  var topBooks = [];
  

  const getBooks = () => {
    console.log("in get books");
    var baseUrl = "/api";
    fetch(baseUrl + '/load/books', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => {

        if (response.status != 200) {
          throw new Error(response.message);
        }
        return response.json()
      })
      .then((response) => {
        console.log("response in getBooks: ", response);
        console.log("data: ", response);
        topBooks = response;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <Heading username={user.username} fullname={user.fullname} />
      <img className="openNav" src={logo} onClick={toggleNav}></img>
      <div className='body'>
        <div onMouseLeave={toggleNav}>
          <MyNav topBooks={topBooks} visible = {navVisibility} username={user.username} fullname={user.fullname} comps={comps} toggle={toggleVisibility} onSignup={onSignup} offSignup={offSignup} initUser={initUser}></MyNav>
        </div>
      </div>
      
    </div>
  );
}

export default App;
