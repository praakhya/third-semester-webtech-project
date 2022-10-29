
import "./App.css";
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import "react-multi-carousel/lib/styles.css";
import MyCarousel from "./MyCarousel";
function Main(props){
    return (
    <div className="main">
        <MyCarousel topBooks={props.topBooks}/>
    </div>);
}
export default Main;