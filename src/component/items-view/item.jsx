import './item.css'
import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


import book from '../book.jpg';






function Item(props){
    const history = useHistory();
    const[pic, setpic] = useState();
    const[title, settitle] = useState('sasasasass');
    const[link , setlink] = useState("");
    

    const data = {"title": props.title
        // data to be sent to the server
      };

    const clicked=()=>{
        axios.post(`http://localhost:8080/book/book`, {data})
        history.push(`/preview/${props.title}`);
        window.location.reload(true)
;    }    


    return(
        <div>
            

            <div className="contain">
                <div id='space'> </div>
                <img src={props.link} className="picture"/>

                
               
                <br/>
                
                
                <div  className='title-box' >
                {props.title} </div>
                <div className='btnseemore' onClick={clicked}  >See more...</div>
                
                
            </div>

        </div>
    )
}

export default Item;