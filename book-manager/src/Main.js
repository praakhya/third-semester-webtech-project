
import "./App.css";
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import "react-multi-carousel/lib/styles.css";
import MyCarousel from "./MyCarousel";
import img1 from "./images/topBooks/itEndsWithUs.jpg";
import img2 from "./images/topBooks/goToDinners.jpeg";
import img3 from "./images/topBooks/andThereWasLight.jpg";
import React from "react";
const Main = React.forwardRef((props, ref)=>{
    console.log("props: ",props,"ref: ",ref);
    if (props.navRef!=undefined && props.navRef.current!=null)
        props.navRef.current.className="hide";
    const topBooks= [
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
    <div className="main">
        <MyCarousel topBooks={topBooks}/>
    </div>);
})
export default Main;