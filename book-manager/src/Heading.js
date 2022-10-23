import './App.css'
function Heading(props)
{
    return (
        <h1 className="Heading">Hello {props.fullname}</h1>
    )
}
export default Heading;