import "./App.css";
function Book(props)
{
    return (
        <div className="Book">
            <img className="topBooksImg" src={require(`${props.cover}`)}/>
            <p width="200px">{props.name}</p>
            <p width="200px">{props.author}</p>
        </div>
    )
}
export default Book;