import Book from "./Book";
import "./App.css";
function Main(props){
    var books = props.topBooks.map((b)=>{return <Book name={b.name} cover={b.cover} author={b.auth}/>});
    return (
    <div className="topCollection">
        {books}
    </div>
        
    )
}
export default Main;