import React, { Children } from "react";
import { useEffect, useState, useContext, createContext } from "react";

const bookContext= React.createContext();
  const context = bookContext;
  function BookProvider({ children }) {
    // The useState() hook defines a state variable.
    const [bookData, setBookData] = useState(null);
    const [topBookData, setTopBookData] = useState(null);
    // The useEffect() hook registers a function to run after render.
    useEffect(() => {
        console.log("in get books");
        var baseUrl = "/api";
        fetch(baseUrl + '/load/books', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then(response => {
    
            if (response.status != 200) {
              throw new Error(response.message);
            }
            return response.json()
          })
          .then((response) => {
            console.log("response in getBooks: ", response);
            var topBooks=[];
            for (var i of response)
            {
              if (i.top=="true")
              {
                topBooks.push(i);
              }
            }
            console.log("top books: ",topBooks);
            setBookData(response);
            setTopBookData(topBooks);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);  // This empty array means the effect will only run once.
    // On the first render userData will have the default value null.
    // But after that render, the effect function will run and will
    // start a fetch of the real user data. When the data arrives, it
    // will be passed to setUserData(), which changes state and
    // triggers a new render. On this second render, we'll have real
    // user data to provide to any consumers. (And the effect will not
    // run again.)
    return (
      <context.Provider value={{books: bookData, topBooks: topBookData}}>
        {children}
      </context.Provider>
    );
  }
 
const BookConsumer= bookContext.Consumer;
BookProvider.context = bookContext;

export {bookContext, BookProvider, BookConsumer};