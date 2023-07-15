import React, { useState } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import {useHistory} from 'react-router-dom';


function Login() {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault();//prevents refreshing

        //firebase login
        signInWithEmailAndPassword(auth,email,password)
        .then((auth)=>{
            navigate('/',{replace:true});
        })
        .catch(error=>alert(error.message))


    }

    const register=e=>{
        e.preventDefault();

        // firebase register
        createUserWithEmailAndPassword(auth,email,password)
        .then((auth)=>{
            //successfully created new user
            console.log(auth);
            if (auth) {
                navigate('/',{replace:true});
            }
        })
        .catch(error=>alert(error.message))

    }


  return (
    <div className='login'>
        <Link to= '/'>
        <img className='login_image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt='amazonpng'/>
        </Link>
        <div className='login_container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                <button type='submit' className='login_signInBtn' onClick={signIn}>Sign In</button>

            </form>

            <p>
            *By signing-in you agree to Amazon Clone's Terms & Conditions of Use & Sale
            (which may include you being sold on black market and your entire life info being 'borrowed').
            Please see our Privacy Notice, our Cookies Notice
            and out Internet-Based Ads Notice.
            </p>

            <button className='login_registerBtn' onClick={register}>Create Amazon Account</button>






        </div>

    </div>
  )
}

export default Login