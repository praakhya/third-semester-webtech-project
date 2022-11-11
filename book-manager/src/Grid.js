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
                    console.log("Grid: ",books);
                    var imagePath="./images/";
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
                    var tagBooks = books.map((b) => { return <div key={ct}><Book name={b.name} cover={b.cover} author={b.auth} bookClass="gridBook" imgClass="gridBooksImg"/></div> });
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