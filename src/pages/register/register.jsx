import React,{useState} from 'react';
import Axios from 'axios';
import "./register.css"
import regpic from "./regpic.png"


import { useHistory } from 'react-router-dom';



function PostForm() {
    const[response , setResponse] = useState('dsdf')
    const history = useHistory();
    const url ="http://localhost:8080/register"
    const [data,setData] = useState({        
        first_name:"",
        last_name:"",
        mail:"",
        password:"",
        user:"author"

    })

    const submit = async (e)=>{  
        e.preventDefault();
        try{
            const resp =await Axios.post(url,{            
                first_name:data.first_name,
                last_name:data.last_name,
                email:data.mail,
                password:data.password,
                user:data.user
            });
           
            console.log(resp.data)
            history.push("../v4u");
        } catch(error){console.log(error);
        }     
        // history.push("../v4u"); // Navigate to home page
       
       
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]= e.target.value
        setData(newdata)
        
    }
  

    return (
        <div>
            
        <div id='set1'>
            {response}
        <div id='frame_1'>
            <form onSubmit={(e)=> submit(e)}>
                <p id='title'>Registration</p>
                <div></div>
                <p id='fname'>First name</p>
                <input onChange={(e)=>handle(e)} id="first_name" value={data.first_name} type="text"></input>
                <p id='lname'>Last name</p>
                <input onChange={(e)=>handle(e)} id="last_name" value={data.last_name} type="text"></input>
                <p id='email2'>E-mail</p>
                <input onChange={(e)=>handle(e)} id="mail" value={data.mail}  type="text"></input>
                <p id='pwd'>Password</p>
                <input onChange={(e)=>handle(e)} id="password" value={data.password} type="text"></input>
                <p id='user'>User</p>
                <br/>
               

                <select value={data.user} id="user"  onChange={(e)=>handle(e)}>
                
                   
                   <option id="author">author</option>
                   <option id="reader">reader</option>
                   <option ide="admin">admin</option>
                </select>
                <br/>
                
                <button id='btn' >Submit</button>
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