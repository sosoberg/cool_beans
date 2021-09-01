import React, { useState } from "react";
import "./style.css";
import { useMutation, gql } from "@apollo/client";
// import { LOGIN } from "../../graphQL/mutations";
import { LOGIN } from "../../graphQL/api/mutations";
import { CURRENT_USER } from "../../graphQL/api/querys";
import { setUserName } from "../../redux/userReducers";
import { useDispatch, useReducer } from "react-redux";
import { Redirect } from "react-router-dom";
import { ApolloConsumer, useApolloClient, useLazyQuery } from "@apollo/client";
const myNewTodo = {
  username: 'Start using Apollo Client.',
  __typename: 'User',
};
export default function Login() {
  const client = useApolloClient();
  const [loginUser, loggedIn] = useMutation(LOGIN);
  const [getCurrentUser, {loading, error, data }] = useLazyQuery(CURRENT_USER)
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser({ variables: login });
    getCurrentUser()
    
  };

  if (loggedIn.loading) return "Submitting...";
  if (loggedIn.error) return `Submission error! ${loggedIn.error.message}`;
  if (loggedIn.data) {
    console.log("data triggard");
    localStorage.setItem("token", loggedIn.data.login.token);
    console.log(loggedIn);
    
    return <Redirect push to="/"/>
    
  }
  
 

  return (
    <div>
      <form onSubmit={handleSubmit} id="joinForm">
        <div>
          <input
            onChange={handleChange}
            placeholder="email"
            name="email"
            value={login.email}
          ></input>
        </div>
        <div>
          <input
            onChange={handleChange}
            placeholder="password"
            name="password"
            value={login.password}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
