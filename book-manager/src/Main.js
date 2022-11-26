
import "./App.css";
import Grid from "./Grid.js";
import "react-multi-carousel/lib/styles.css";
import MyCarousel from "./MyCarousel";
import Addbooks from "./AddBooks";
function Main(props) {
    return (
        <div className="main">
            <MyCarousel />
            <Grid />
        </div>
    );
}
export default Main;