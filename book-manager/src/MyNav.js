import Comp1 from "./testComponents/Comp1";
import Comp2 from "./testComponents/Comp2";
import Comp3 from "./testComponents/Comp3";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Signup from "./Signup";
import Login from "./Login";
import Main from "./Main";
import homeBg from './images/homeBg.png';
import './App.css'
import { bookContext, BookConsumer, BookProvider } from './bookContext';
function MyNav(props) {
  return (
    <div>
    <BrowserRouter>

      {props.visible?<Layout />:<span></span>}
      <Routes  className="content">
        <Route path="/" element={<img className="homePic" src={homeBg}></img>} />
        <Route path="/login" element={<Login comps={props.comps} initUser={props.initUser} toggle={props.toggleVisibility} onSignup={props.onSignup} offSignup={props.offSignup}/>} />
        <Route path="/signup" element={<Signup comps={props.comps} initUser={props.initUser} toggle={props.toggleVisibility} onSignup={props.onSignup} offSignup={props.offSignup}/>} />
        <Route path="/main" element={<BookProvider value={props.topBooks}><Main comps={props.comps} username={props.username} fullname={props.fullname}/></BookProvider>} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
 export default MyNav;
