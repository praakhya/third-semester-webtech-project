
import Carousel from "react-multi-carousel";
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
                    console.log("myCarousel: ",books);
                    var imagePath="./images/";
                    if (books==null)
                    {
                        books=[
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
                    var tagBooks = books.map((b) => { return <div key={ct}><Book title={b.title} cover={b.imageLink} author={b.auth} bookClass="topBook" imgClass="topBooksImg"/></div> });
                    return <Carousel
                    responsive={responsive} 
                    containerClass="carousel-container"
                    arrows={true}>
                        {tagBooks}
                    </Carousel>
                    }
            }
        </BookConsumer>
    );
}
export default MyCarousel;