import React from 'react';
import "./AddBooks.css";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserConsumer, userContext } from "./userContext";
function AddBooks(){
    const navigate = useNavigate();
    function navToMain(){
        // navigate to /contacts
        navigateToMain();
    }
    const navigateToMain = () => {
        // navigate to /contacts
        navigate('/main');
    };
    const userLog = React.useContext(userContext)
    console.log("User Log" , userLog)
    if (userLog==null||userLog.user==null||userLog.user.token==undefined)
    {
        navigate('/main');
        console.log("addbooks: navigated to main");
        return (<div></div>)
    }
    return(
        <UserConsumer>
        {(userLog) => {
            console.log("user in addbooks: ",userLog);
            if (userLog==null||userLog.user==null||userLog.user.token==undefined)
            {
                navToMain();
                console.log("addbooks: navigated to main");
            }
            else{
            const addBookNew = (event) => {
            }
            const addBook = (event) => {
                event.preventDefault();
                console.log("target: ", event.target);
                var baseUrl = "/api";
                const formData  = new FormData();
                let formObject = Object.fromEntries(formData.entries());
            
                formData.append(formObject['title'])
                console.log("formData: ",formObject, formData);
                fetch(baseUrl+'/load/books', {
                    method:'POST',
                    headers: {
                        'Content-type': 'multipart/form-data'
                    },
                    body: formData
                })
                .then((response) =>  {
                    console.log("response: ",response)
                    if (response.status != 200) {
                        throw new Error(response.message);
                    }
                    return response.json();
                })
                .then((data) => {
                    navigateToMain();
                    console.log("navigated to main\n");
                })
                .catch((err) => {
                    console.log(err);
                });
            };
            return (
                <div className='addBooks d-flex justify-content-center align-items-center'>
                    <form action = "/api/load/books" method="POST" className='formBox p-4 d-flex bg-dark flex-column' encType='multipart/form-data' onSubmit={addBookNew}>
                        <label for="exampleFormControlInput1" className="form-label text-white">Book Name</label>
                        <input type="text" name="title" className="form-control" id="exampleFormControlInput1" placeholder="Enter book name" />
                        <label for="exampleFormControlInput1" className="form-label text-white">Author</label>
                        <input type="text" name="author" className="form-control" id="exampleFormControlInput1" placeholder="Enter author name" />
                        <label for="exampleFormControlInput1" className="form-label text-white">Country</label>
                        <input type="text" name="country" className="form-control" id="exampleFormControlInput1" placeholder="Country" />
                        <label for="exampleFormControlInput1" className="form-label text-white">Language</label>
                        <input type="text" name="language" className="form-control" id="exampleFormControlInput1" placeholder="Enter Language" />
                        <label for="exampleFormControlInput1" className="form-label text-white">Pages</label>
                        <input type="number" name="pages" className="form-control" id="exampleFormControlInput1" placeholder="Enter the number of pages" />
                        <label for="exampleFormControlInput1" className="form-label text-white">year</label>
                        <input type="number" name="year" className="form-control" id="exampleFormControlInput1" placeholder="Enter the year" />
                        <label for="exampleFormControlInput1" className="form-label text-white">Image</label>
                        <input type="file" name="cover" className="form-control" id="exampleFormControlInput1" placeholder="Enter the URL of the image" />
                        <label for="exampleFormControlTextarea1" className="form-label text-white">Description</label>
                        <textarea name="description" className="form-control" id="exampleFormControlTextarea1" placeholder="Description" rows="3"></textarea>
                        <button type="submit" className='btn bg-info'>Submit</button>


                        
                    </form>
                </div>
            )
        }}}
        </UserConsumer>
    )
}

export default AddBooks;