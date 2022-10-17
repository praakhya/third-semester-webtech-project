import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js';
import homeBg from './images/homeBg.png';
import Nav from './Nav'
function App() {
  var navOn=false;
  toggleNav=()=>{
    navOn?navOn=false:navOn=true;
  }
  return (
    <div className="App">
      {navOn?<Nav/>:<span></span>}
      <div>
        <img className="App-logo" src={logo} onClick={this.toggleNav}></img>
        <Heading/>
        <img className="homePic" src={homeBg}></img>
      </div>
    </div>
  );
}

export default App;
