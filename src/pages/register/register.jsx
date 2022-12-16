import React,{useState} from 'react';
import Axios from 'axios';

function PostForm() {
    const url ="http://localhost:8080/register"
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
            <form onSubmit={(e)=> submit(e)}>
                <input onChange={(e)=>handle(e)} id="first_name" value={data.first_name} placeholder="first name" type="text"></input>
                <input onChange={(e)=>handle(e)} id="last_name" value={data.last_name} placeholder="last name" type="text"></input>
                <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="email" type="text"></input>
                <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="password" type="text"></input>
                <input onChange={(e)=>handle(e)} id="user" value={data.user} placeholder="user" type="text"></input>
                
                <button>Submit</button>
            </form>
        </div>
    );
}

export default PostForm;