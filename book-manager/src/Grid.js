import "./App.css";
import Book from "./Book";
import { BookConsumer } from "./bookContext";
function Grid(props)
{
    return (
        <BookConsumer>
            {
                (books) => {
                    var ct = 0;
                    var imagePath="images/";
                    if (books.books==null)
                    {
                        books.books=[
                            {
                                "title":"It Ends With Us",
                                "author": "Colleen Hoover",
                                "cover": `itEndsWithUs.jpg`,

                            },
                            {
                                "title":"Go-To Dinners: A Barefoot Contessa Cookbook",
                                "author":"Ina Garten",
                                "cover":`goToDinners.jpeg`
                            },
                            {
                                "title":"And There Was Light: Abraham Lincoln and the American Struggle Book",
                                "author":"Jon Meacham",
                                "cover":`andThereWasLight.jpg`
                            }
                        ]
                    }
                    var tagBooks = books.books.map((b) => { return <div key={ct}><Book title={b.title} imageLink={b.imageLink} author={b.author} bookClass="gridBook" imgClass="gridBooksImg"/></div> });
                    return (
                    <div className="grid"> 
                        {tagBooks}
                    </div>
                    )
                    }
            }
        </BookConsumer>
    )
}
export default Grid;