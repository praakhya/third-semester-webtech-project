import {
    Book_dtls, CommentBox,
    CommentForm,
    Comment
} from './book_dtls';
import { useNavigate } from 'react-router-dom';
function BookSpotlight() {
    function goBack() {
        navigateToMain();
    }
    const navigate = useNavigate();
    const navigateToMain = () => {
        // navigate to /contacts
        navigate('/main');
    };
    return (<div className="spotlight">
        <button onClick={goBack}>Back</button>
        <Book_dtls title="BSB" desc="Praakhya has a very sexy brain" imageLink='./logo.svg' language="Old Norse" pages='384' year='2020' author="Praakhya the gr8" ></Book_dtls>
        <CommentBox></CommentBox>
    </div>)
}
export default BookSpotlight;