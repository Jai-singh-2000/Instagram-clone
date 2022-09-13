import "./Login.css";
import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, storage} from "../firebase";
import { async } from "@firebase/util";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; 

const SignUp = () => {
  const [err,setError]=useState("")
  const navigate=useNavigate();

  const handleSubmitSignUp=async(e)=>{
    e.preventDefault()
    let email=e.target[0].value;
    let name=e.target[1].value;
    let password=e.target[2].value;

    try{

      let userCredential= await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      e.target[0].value=""
      e.target[1].value=""
      e.target[2].value=""
      navigate("/")

    }catch(error)
    {
      setError(error.message);
      setTimeout(()=>{
        setError("");
      },1000)
    }

  

  }
  
  return (
    <div className="Authentication_header">

    <div className="credential_box">

      <div>
        <center>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" height={70} alt="" />
        </center>
      </div>

      <form onSubmit={handleSubmitSignUp}>
        <center>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Username'/>
          <input type="password" placeholder='Password' />
          <button>Sign Up</button>
          </center>
        </form>
    </div>

        <div className='signup_login'>
          <center>
            <p>Have an account ?  <Link to="/login"><b>Log in</b></Link></p>
            <p>{err&&err}</p>           
          </center>
        </div>
    </div>
  )
}

export default SignUp;