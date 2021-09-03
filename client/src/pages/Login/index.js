import React, { useState } from "react";
import "./style.css";
import { useMutation, gql } from "@apollo/client";
import { LOGIN } from "../../graphQL/api/mutations";
import { setLoginState} from "../../redux/userReducers";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


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
