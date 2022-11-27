import { useState, useContext } from 'react';
import React from 'react';
import './App.css';
import Heading from './Heading.js';
import Login from './Login';
import Nav from './Nav'
import Signup from './Signup';
import Main from './Main';
import { bookContext, BookConsumer, BookProvider } from './bookContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from './NavLayout';
import BookSpotlight from "./BookSpotlight";
import AddBooks from './AddBooks';
import Profile from "./Profile";
function App() {
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

  const [navVisible,setNav] = useState(false)
  function toggleNav()
  {
    setNav(navVisible => !navVisible);
  }
  return (
    <div className='App .bg-light'>
      <BrowserRouter>
        <Heading toggleNav={toggleNav}/>
        <div className="body">
          {navVisible? <NavLayout toggleNav={toggleNav}/>:<span></span>}
          <Routes className="content">
            <Route path="/" element={<img className="homePic" src="/images/homeBg.png"></img>} />
            <Route path="/login" element={<Login comps={comps} initUser={initUser} toggle={toggleVisibility} onSignup={onSignup} offSignup={offSignup} />} />
            <Route path="/signup" element={<Signup comps={comps} initUser={initUser} toggle={toggleVisibility} onSignup={onSignup} offSignup={offSignup} />} />
            <Route path="/main" element={<BookProvider value={topBooks}><Main comps={comps} username={user.username} fullname={user.fullname} /></BookProvider>} />
            <Route path="/spotlight" element={<BookSpotlight></BookSpotlight>} />
            <Route path="/addbooks" element={<AddBooks/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="*" element={<p>404</p>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;
