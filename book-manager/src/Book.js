function Book(props)
{
    return (
        <div>
            <img src={props.cover} width="100px"/>
            <p width="100px">{props.name}</p>
            <p width="100px">{props.author}</p>
        </div>
    )
}
export default Book;