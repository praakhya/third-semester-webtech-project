import React, { Children } from "react";
import { useEffect, useState, useContext, createContext } from "react";
const userContext=React.createContext({
  user: null,
  setUser: () => {}
});
const context = userContext;
function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState({ username: "", fullname: "", token: null});
  const [header, setHeader] = useState({
    'Content-type': 'application/json; charset=UTF-8'
  });
  // The useEffect() hook registers a function to run after render.
  useEffect(() => {
    if (userData!=null){
    console.log("in get user");
    if (userData.token==null)
    {
      setHeader({
        'Content-type': 'application/json; charset=UTF-8'
      })
    }
    else
    {
      setHeader({
        'Content-type': 'application/json; charset=UTF-8',
        'Auth-Token': userData.token
      })
    }
    var baseUrl = "/api";
    console.log("header: ",header);
    fetch(baseUrl + '/auth/login', {
      method: 'PUT',
      headers: header
    })
    .then(response => {
      console.log("First then: ",response);
      if (response.status != 200) {
        throw new Error(response.message);
      }
      return response.json()
    })
    .then((response) => {
      console.log("response in modifyUser: ", response);
      setUser(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }},[]);
  return (
    <context.Provider value={user}>
      {children}
    </context.Provider>
  )
}
const UserConsumer= userContext.Consumer;
UserProvider.context = userContext;

export {userContext, UserProvider, UserConsumer};