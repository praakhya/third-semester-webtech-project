import "./App.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Book(props) {
    const navigate = useNavigate();
    const navigateToSpotlight = () => {
        navigate('/spotlight',{state: {title:props.title, desc:"None", imageLink: props.imageLink, language:" ", pages:" ", year:" ", author: props.author}});
    };
    console.log("In books prop: ", props);
    const [detVis, showDet] = useState(false);
    function toggleDet() {
        showDet(detVis => !detVis);
    }
    var baseUrl = "./";
    if (props.bookClass == "topBook") {
        return (
            <div className={props.bookClass} onClick={navigateToSpotlight}>
                {props.imageLink == undefined ?
                    <img className={props.imgClass} src={require(`${baseUrl + "images/dummy.jpg"}`)} /> :
                    <img className={props.imgClass} src={require(`${baseUrl + props.imageLink}`)} />}

                <p width="200px">{props.title}</p>
                <p width="200px">{props.author}</p>
            </div>
        )
    }
    if (props.bookClass = "gridBook") {
        return (
            <div className={props.bookClass} onMouseOver={toggleDet} onMouseOut={toggleDet} onClick={navigateToSpotlight}>
                {props.imageLink == undefined ?
                    <img className={props.imgClass} src={require(`${baseUrl + "images/dummy.jpg"}`)} /> :
                    <img className={props.imgClass} src={require(`${baseUrl + props.imageLink}`)} />}
                <div>
                    {detVis ? <p width="200px">{props.title}</p> : <span></span>}
                    {detVis ? <p width="200px">{props.author}</p> : <span></span>}
                </div>
            </div>
        )
    }
}
export default Book;