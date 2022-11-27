import React, { Component } from 'react';
import logo from './logo.svg';
import './book_dtls.css';
class Book_dtls extends Component {
    render() {
        var baseUrl = "./";
        console.log("In book dtls: ",baseUrl+this.props.imageLink);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className='first'>
                    <img className='image' src={this.props.imageLink}></img>
                    <div className='indes'>
                        <h1>{this.props.title}</h1>
                        <h2>Book Details</h2>
                        <h3>{this.props.author}</h3>
                        <h3>{this.props.country}</h3>
                        <h3>{this.props.language}</h3>
                        <h3>{this.props.pages}</h3>
                        <h3>{this.props.year}</h3>
                        <h3>{this.props.desc}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
class CommentBox extends Component {
    constructor() {
        super();

        this.state = {
            showComments: true,
            comments: [
                { id: 1, author: "Abc", body: "This is a good book" },
                { id: 2, author: "scarlett-jo", body: "Expected better" },
                { id: 3, author: "rosco", body: "wow!! great!!!" }
            ]
        };
    }
    
    render() {
        const comments = this._getComments();
        let commentNodes;
        let buttonText = 'Show Comments';

        if (this.state.showComments) {
            buttonText = 'Hide Comments';
            commentNodes = <div className="comment-list">{comments}</div>;
        }

        return (
            <div className="comment-box">
                <h2>Join the Discussion!</h2>
                <CommentForm addComment={this._addComment.bind(this)} />
                <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
                    {buttonText}
                </button>
                <br />
                <h3 className="com">Comments</h3>
                <h4 className="comment-count">
                    {this._getCommentsTitle(comments.length)}
                </h4>

                {commentNodes}

            </div >
        );
    } // end render

    
    _addComment(author, body) {
        const comment = {
            id: this.state.comments.length + 1,
            author,
            body
        };
        this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }

    _handleClick() {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    _getComments() {
        return this.state.comments.map((comment) => {
            return (
                <Comment
                    author={comment.author}
                    body={comment.body}
                    key={comment.id} />
            );
        });
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return "1 comment";
        } else {
            return `${commentCount} comments`;
        }
    }
} // end CommentBox component

class CommentForm extends Component {
    render() {
        return (
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <div className="comment-form-fields">
                    <input placeholder="Name" required ref={[(input) => this._author = input, (textarea) => this._body = textarea]}></input><br /><br />
                    <textarea placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
                </div>
                <div className="comment-form-actions">
                    <button type="submit">Post Comment</button>
                </div>
            </form>
        );
    } // end render

    _handleSubmit(event) {
        event.preventDefault();   // prevents page from reloading on submit
        let author = this._author;
        let body = this._body;
        this.props.addComment(author.value, body.value);
    }
} // end CommentForm component

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <p className="comment-header">{this.props.author}</p>
                <p className="comment-body">- {this.props.body}</p>
                <div className="comment-footer">
                    <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Comment</a>
                </div>
            </div>
        );
    }
    _deleteComment() {
        alert("-- DELETE Comment Functionality COMMING SOON...");
    }
}

// export default Book_dtls;
/*export default CommentBox; */
export { Book_dtls, CommentBox, Comment, CommentForm };