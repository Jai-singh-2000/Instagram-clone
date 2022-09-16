import "./Form.css";
import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const {currentUser}=useContext(AuthContext);
  const navigate=useNavigate();

  const logInUser=(e)=>{
      e.preventDefault();
      let email=e.target[0].value;
      let password=e.target[1].value;

      signInWithEmailAndPassword(auth,email,password)
      .then(()=>{navigate("/");})
      .catch((err)=>{console.log(err);})

  }

  return (
    <div className="form_container">

      <div className="inner_form_box">

        <div>
          <center>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" height={70} alt="" />
          </center>
        </div>

        <form onSubmit={logInUser}>
          <center>
            <input type="text" placeholder='email'/>
            <input type="password" placeholder='password' />
            <button className="btn" type='submit'>Login</button>
          </center>
        </form>
      </div>

      <div className='signup_login'>
        <center>
          <p>Don't have an account ? <Link to="/signup"><b>Sign up</b></Link></p>         
        </center>
      </div>
      
    </div>
  )
}

export default Login