import React, {useState} from "react";
import "./style.css"
import { useMutation } from '@apollo/client';
import {LOGIN} from "../../graphQL/mutations"
import {setUserName} from "../../redux/userReducers"
import {useDispatch, useReducer} from "react-redux"



export default function Login() {
    

const [loginUser, {data, loading, error}] = useMutation(LOGIN)

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value
    setLogin({
        ...login, [name]: value
    })
    }
    const handleSubmit = event => {
        event.preventDefault()
        loginUser({variables: login})
    }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  if(data){
      console.log("data triggard")
      localStorage.setItem("token", data.login.token)

  }

  return (
    <div id="joinContain">
      <form onSubmit={handleSubmit} id="joinForm">
        <div>
          <input onChange={handleChange} placeholder="email" name="email" value={login.email}></input>
        </div>
        <div>
          <input onChange={handleChange} placeholder="password" name="password" value={login.password}></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}