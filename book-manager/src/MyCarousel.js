
//import Carousel from "react-multi-carousel";
import {Carousel} from "customizable-horizontal-carousel"
import "react-multi-carousel/lib/styles.css";
import "./App.css";
import Book from "./Book";
import { BookConsumer } from "./bookContext";
function MyCarousel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 0 },
            items: 3
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
        <BookConsumer>
            {
                (books) => {
                    var ct = 0;
                    var imagePath="images/";
                    if (books.topBooks==null)
                    {
                        books.topBooks=[
                            {
                                "title":"It Ends With Us",
                                "author": "Colleen Hoover",
                                "imageLink": `${imagePath}itEndsWithUs.jpg`,

                            },
                            {
                                "title":"Go-To Dinners: A Barefoot Contessa Cookbook",
                                "author":"Ina Garten",
                                "imageLink":`${imagePath}goToDinners.jpeg`
                            },
                            {
                                "title":"And There Was Light: Abraham Lincoln and the American Struggle Book",
                                "author":"Jon Meacham",
                                "imageLink":`${imagePath}andThereWasLight.jpg`
                            }
                        ]
                    }
                    console.log("MyCarousel: ",books.topBooks);
                    var tagBooks = books.topBooks.map((b) => { return <div key={ct}><Book title={b.title} imageLink={b.imageLink} author={b.author} bookClass="topBook" imgClass="topBooksImg"/></div> });
                    return <Carousel 
                    containerClass="carousel-container"
                    countVisible={3} 
                    shiftAmount={1}>
                        {tagBooks}
                    </Carousel>
                    }
            }
        </BookConsumer>
    );
}
export default MyCarousel;