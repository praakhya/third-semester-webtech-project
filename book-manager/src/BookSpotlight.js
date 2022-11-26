import {
    Book_dtls, CommentBox,
    CommentForm,
    Comment
} from './book_dtls';
import { useNavigate, useLocation } from 'react-router-dom';
function BookSpotlight(props) {
    var location=useLocation();
    function goBack() {
        navigateToMain();
    }
    const navigate = useNavigate();
    const navigateToMain = () => {
        // navigate to /contacts
        navigate('/main');
    };
    console.log("in book spotlight: ",props.imageLink);
    return (<div className="spotlight">
        <button onClick={goBack}>Back</button>
        <Book_dtls title={location.state.title} desc={location.state.desc} imageLink={location.state.imageLink} language={location.state.language} year={location.state.year} author={location.state.author} ></Book_dtls>
        <CommentBox></CommentBox>
    </div>)
}
export default BookSpotlight;