import './item.css'
import React, { useState } from "react";
import axios from 'axios';



import book from '../book.jpg';

axios.defaults.baseURL = 'http://localhost:3005';




function Item(props){
    const[pic, setpic] = useState();
    const[title, settitle] = useState('sasasasass');
    const[link , setlink] = useState("");
    

    const data = {"title": props.title
        // data to be sent to the server
      };

    const clicked=()=>{
        axios.post('/server/route', data)
    }    


    return(
        <div>
            

            <div className="contain">
                <div id='space'> </div>
                <img src={props.link} className="picture"/>

                
               
                <br/>
                
                
                <div  id='title-box' >
                {props.title} </div>
                <div id='btnseemore' onClick={clicked}  >See more...</div>
                
                
            </div>

        </div>
    )
}

export default Item;