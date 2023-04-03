import React from "react";
import Cookies from 'js-cookie';
import axios, { Axios } from 'axios'
import "./login.css"
import {useState} from 'react';
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import singin from "./Signin.png"
import Navibar3 from "../navbar/navbar3";
import { useHistory } from 'react-router-dom';
function Login() {
  const history = useHistory();
    const[type,setType]=useState('password');
    const[icon,setIcon]=useState(eyeOff);
  
    const handleToggle_=()=>{
      if(type==='password'){
        setIcon(eye);
        setType('text');
      }
      else{
        setIcon(eyeOff);
        setType('password')
      }
    }

    

    const [data,setData] = useState({
      mail1:"",
      pwd:""
    })

    function handle(e){
      const newdata={...data}
      newdata[e.target.id] = e. target.value
      setData(newdata)
    }

     const submit = async(e)=>{
      console.log(data)
      e.preventDefault();
      try{
        const resp = await axios.post("http://localhost:8080/register/login",{
          email:data.mail1,
          password:data.pwd
        });
        console.log(resp)
       if(resp.status === 200){
        console.log("log in success!!!")
        Cookies.set('myCookie',JSON.stringify(
          
            {login:true,
            token: resp.data}
        ))
        console.log(resp.status);
          console.log(resp.data);
          history.push("../"); // Navigate to home page
          window.location.reload();
      
      }
     
       
       
       
       else{console.log("please enter valid email or password!!!")}
      }catch(error){console.log(error);}
     }
   
  
    return (<div>
      
      
        <div id='login'>
          
          <form  onSubmit={(e)=> submit(e)}  >
          <div className="frame__1">
            <p id="head1">Sing-in with</p>
            <p id="v4u">V4U</p>
            
            <p id="email">E-mail:</p>
            <input type="text" id="mail1"  onChange={(e)=>handle(e)} value={data.mail1} ></input>

            <p id="password1">password</p>
  
            <div  >
              <input id="pwd"  value={data.pwd}  onChange={(e)=>handle(e)} className='input-field' type={type}/>              
              <span onClick={handleToggle_}><Icon icon={icon} size={25}/></span>
            </div>

            <div>
              <br/>
            </div>
            <button  id="signin">log in</button>
             
            <a id="fogot" href=''>forgot password?</a> 
            <div>
              <br/>
            </div>
            <h1>or</h1>
            <p id= "notacc">Don't have an account? 
            <a id="signup" href='../pages/register'>sign up</a></p>
          </div>

          </form>

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