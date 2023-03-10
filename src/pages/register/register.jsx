import React,{useState} from 'react';
import Axios from 'axios';
import "./register.css"
import regpic from "./regpic.png"
import Navibar3 from '../navbar/navbar3';

function PostForm() {
    const url ="http://localhost:8080/"
    const [data,setData] = useState({        
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        user:""

    })

    function submit(e){        
        Axios.post(url,{            
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password,
            user:data.user
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]= e.target.value
        setData(newdata)
    }

    return (
        <div>
            <Navibar3/>
        <div id='set1'>
        <div id='frame_1'>
            <form onSubmit={(e)=> submit(e)}>
                <p id='title'>Registration</p>
                <div></div>
                <p id='fname'>First name</p>
                <input onChange={(e)=>handle(e)} id="first_name" value={data.first_name} type="text"></input>
                <p id='lname'>Last name</p>
                <input onChange={(e)=>handle(e)} id="last_name" value={data.last_name} type="text"></input>
                <p id='email2'>E-mail</p>
                <input onChange={(e)=>handle(e)} id="mail" value={data.email}  type="text"></input>
                <p id='pwd'>Password</p>
                <input onChange={(e)=>handle(e)} id="password" value={data.password} type="text"></input>
                <p id='users'>User</p>
                <input onChange={(e)=>handle(e)} id="user" value={data.user} type="text"></input>
                
                <button id='btn'>Submit</button>
                <h1>or</h1>
            <p id= "notacc">Already have an account? 
            <a id="signup" href='../pages/login'>Login</a></p>
            </form>
            
        </div>
        <div ><img id='img' src={regpic}/></div>

        </div>
        </div>
    );
}

export default PostForm;