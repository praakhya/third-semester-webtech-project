
//import Carousel from "react-multi-carousel";
import {Carousel} from "customizable-horizontal-carousel";
import "./App.css";
import Book from "./Book";
import { BookConsumer } from "./bookContext";
function MyCarousel() {
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