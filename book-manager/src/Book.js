import "./App.css";
import {useState} from "react";
function Book(props)
{
    const [detVis, showDet] = useState(false);
    function toggleDet()
    {
        showDet(detVis=>!detVis);
    }
    if (props.bookClass=="topBook")
    {
    return (
        <div className={props.bookClass}>
            <img className={props.imgClass} src={require(`${props.cover}`)}/>
            <p width="200px">{props.title}</p>
            <p width="200px">{props.author}</p>
        </div>
    )
    }
    if (props.bookClass="gridBook")
    {
        return (
            <div className={props.bookClass} onMouseOver={toggleDet} onMouseOut={toggleDet}>
                <img className={props.imgClass} src={require(`${props.imageLink}`)}/>
                {detVis?<p width="200px">{props.title}</p>:<span></span>}
                {detVis?<p width="200px">{props.author}</p>:<span></span>}
            </div>
        )
    }
}
export default Book;