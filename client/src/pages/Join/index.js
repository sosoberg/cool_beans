import React, {useState} from "react";
import "./style.css"
import { useMutation } from '@apollo/client';
import {CREATE_USER} from "../../graphQL/mutations"



export default function Join() {

const [createUser, {data, loading, error}] = useMutation(CREATE_USER)

    const [join, setJoin] = useState({
        username: "",
        email: "",
        password: ""
    })
    
    const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value
    setJoin({
        ...join, [name]: value
    })
    }
    const handleSubmit = event => {
        event.preventDefault()
        createUser({variables: join})
    }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div id="joinContain">
      <form onSubmit={handleSubmit} id="joinForm">
        <div>
          <input onChange={handleChange} placeholder="username" name="username" value={join.username}></input>
        </div>
        <div>
          <input onChange={handleChange} placeholder="email" name="email" value={join.email}></input>
        </div>
        <div>
          <input onChange={handleChange} placeholder="password" name="password" value={join.password}></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}