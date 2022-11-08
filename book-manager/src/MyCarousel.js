
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
                    var imagePath="./images/topBooks/";
                    if (books==null)
                    {
                        books=[
                            {
                                name:"It Ends With Us",
                                author: "Colleen Hoover",
                                cover: `itEndsWithUs.jpg`,

                            },
                            {
                                "name":"Go-To Dinners: A Barefoot Contessa Cookbook",
                                "author":"Ina Garten",
                                "cover":`goToDinners.jpeg`
                            },
                            {
                                "name":"And There Was Light: Abraham Lincoln and the American Struggle Book",
                                "author":"Jon Meacham",
                                "cover":`andThereWasLight.jpg`
                            }
                        ]
                    }
                    var tagBooks = books.map((b) => { return <div key={ct}><Book name={b.name} cover={imagePath+b.cover} author={b.auth} /></div> });
                    return <Carousel 
                    swipeable={true}
                    responsive={responsive} 
                    containerClass="carousel-container" 
                    swipeable={true} arrows={true}>
                        {tagBooks}
                    </Carousel>
                    }
            }
        </BookConsumer>
    );
}
export default MyCarousel;