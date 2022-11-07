
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "./Book";
import "./App.css";
import { BookConsumer } from "./bookContext";
function MyCarousel() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 0 },
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

        <Carousel responsive={responsive} containerClass="carousel-container">
            <BookConsumer>
                {(books) => {
                    var ct = 0;
                    console.log("myCarousel: ",books);
                    var tagBooks = books.map((b) => { return <div key={ct}><Book name={b.name} cover={b.cover} author={b.auth} /></div> });
                    return tagBooks
                    }
                }
            </BookConsumer>
        </Carousel>
    );
}
export default MyCarousel;