import React from 'react';
import "./Login.css";
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className="Authentication_header">

        <div className="credential_box">

            <div>
            <center>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" height={70} alt="" />
            </center>
            </div>

            <form action="">
                <center>
                <input type="text" placeholder='email'/>
                <input type="password" placeholder='password' />
                <button>Login</button>
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