import React, { useState } from "react";
import "./style.css";
import { useMutation, gql } from "@apollo/client";
import { LOGIN } from "../../graphQL/api/mutations";
import { setLoginState} from "../../redux/userReducers";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import bean from "./Da-Bean.png"


export default function Login() {
  // setting dispatch
  const dispatch = useDispatch()
  // creating loginUser function and its responses
  const [loginUser, {data, loading, error}] = useMutation(LOGIN);
  //local state for logging in.
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

//function for handling change
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  //function for handleing form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser({ variables: login });
    
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  if (data) {
    localStorage.setItem("token", data.login.token);
    // If data then set state as logged in and redirect
    dispatch(setLoginState({
      userName: data.login.user.username,
      loggedIn: true
    }))
    return <Redirect push to="/"/>
  }

 

  return (
    <div style={{width: "100vw", height: "100vh", position: "relative"}}>
    <div id="loginFormContain">
      <form onSubmit={handleSubmit} id="joinForm">
        <h2 style={{textAlign: "center"}}>Bro!</h2>
        <div className="flexCenter">
          <input
          className="loginInput"
            onChange={handleChange}
            placeholder="email"
            name="email"
            value={login.email}
          ></input>
        </div>
        <div className="flexCenter">
          <input
          className="loginInput"
            onChange={handleChange}
            placeholder="password"
            name="password"
            value={login.password}
          ></input>
        </div>
        <div id="loginButtonContain">
          
          
          <button  id="loginButton"  style={{backgroundImage:`url(${bean})`}}>Login</button>
        
        </div>
      </form>
    </div>
    </div>
  );
}
