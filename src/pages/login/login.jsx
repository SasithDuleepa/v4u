import React from "react";

import "./login.css"
import {useState} from 'react';
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

function Login() {
    const[type,setType]=useState('password');
    const[icon,setIcon]=useState(eyeOff);
  
    const handleToggle=()=>{
      if(type==='password'){
        setIcon(eye);
        setType('text');
      }
      else{
        setIcon(eyeOff);
        setType('password')
      }
    }
  
    return (
      
        <div id='login'>
          <div id="frame">
            <p id="head">Sing-in with</p>
            <p id="v4u">V4U</p>
            
            <p id="email">E-mail</p>
            <input type="text" id="mail"></input>
            <p id="password">password</p>
  
            <div className='input-field' >
            <input type={type}/>
              
              <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
              
            
            </div>
            <div>
              <br/>
            </div>
              <input type="button" id="signin" value="sign in"></input>
            <a id="fogot" href=''>forgot password?</a> 
            <div>
              <br/>
            </div>
            <h1>or</h1>
            <p id= "notacc">Don't have an account? 
            <a id="signup" href='./signup'>sign up</a></p>
          </div>
        </div>
           
    );
  }
  function myfunction(){
    var x= document.getElementById("pw");
    if (x.type === "password"){
      x.type="text";
    }else{
      x.type="password";
    }
    
  }

export default Login;