import React from "react";

import "./login.css"
import {useState} from 'react';
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import singin from "./Signin.png"
import Navibar3 from "../navbar/navbar3";

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
  
    return (<div>
      <Navibar3/>
      
        <div id='login'>
          
          
          <div className="frame__1">
            <p id="head1">Sing-in with</p>
            <p id="v4u">V4U</p>
            
            <p id="email">E-mail:</p>
            <input type="text" id="mail1"></input>

            <p id="password1">password</p>
  
            <div  >
              <input className='input-field' type={type}/>              
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
            <a id="signup" href='../pages/register'>sign up</a></p>
          </div>



          <div id="bgimg"><img src={singin}/></div>
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