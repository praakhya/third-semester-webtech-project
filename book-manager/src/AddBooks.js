import React from 'react';

import "./AddBooks.css";
function AddBooks(){
    return (
        <div className='addBooks d-flex justify-content-center align-items-center'>
            <div className='formBox p-4 d-flex bg-dark flex-column'>
                <div className="mb-3  ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Book Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter book name" />
                </div>
                <div className="mb-3  ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Author</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter author name" />
                </div>
                <div className="mb-3  ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Country</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Country" />
                </div>
                <div className="mb-3  ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Language</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Language" />
                </div>
                <div className="mb-3  ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Pages</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter the number of pages" />
                </div>
                <div className="mb-3  ">
                    <label for="exampleFormControlInput1" className="form-label text-white">year</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter the year" />
                </div>
                <div className="mb-3  ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Image</label>
                    <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="Enter the URL of the image" />
                </div>


                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label text-white">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Description" rows="3"></textarea>
                </div>
                <button className='btn bg-info'>Submit</button>
            </div>
        </div>
    )
}

export default AddBooks