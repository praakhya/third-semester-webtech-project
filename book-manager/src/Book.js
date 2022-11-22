import "./App.css";
import {useState} from "react";
function Book(props)
{
    console.log("In books prop: ",props);
    const [detVis, showDet] = useState(false);
    function toggleDet()
    {
        showDet(detVis=>!detVis);
    }
    var baseUrl="./";
    if (props.bookClass=="topBook")
    {
    return (
        <div className={props.bookClass}>
            {props.imageLink==undefined?
            <img className={props.imgClass} src={require(`${baseUrl+"images/dummy.jpg"}`)}/>:
            <img className={props.imgClass} src={require(`${baseUrl+props.imageLink}`)}/>}
            
            <p width="200px">{props.title}</p>
            <p width="200px">{props.author}</p>
        </div>
    )
    }
    if (props.bookClass="gridBook")
    {
        return (
            <div className={props.bookClass} onMouseOver={toggleDet} onMouseOut={toggleDet}>
                {props.imageLink==undefined?
                <img className={props.imgClass} src={require(`${baseUrl+"images/dummy.jpg"}`)}/>:
                <img className={props.imgClass} src={require(`${baseUrl+props.imageLink}`)}/>}
                <div>
                {detVis?<p width="200px">{props.title}</p>:<span></span>}
                {detVis?<p width="200px">{props.author}</p>:<span></span>}
                </div>
            </div>
        )
    }
}
export default Book;