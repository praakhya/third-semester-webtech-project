
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "./Book";
import "./App.css";
function MyCarousel(props) {
    var ct=0;
    var books = props.topBooks.map((b)=>{++ct; return <div key={ct}><Book name={b.name} cover={b.cover} author={b.auth}/></div>});
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };
    return (
        <Carousel responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            centerMode={true}>
            {books}
        </Carousel>
    );
}
export default MyCarousel;