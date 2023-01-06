import './item.css'
import React, { useState } from "react";
import axios from 'axios';


function Item(props){
    const[pic, setpic] = useState();
    const[title, settitle] = useState('sasasasass');
    const[link , setlink] = useState();

    const clicked=()=>{

        axios.post('http://localhost:3001/history',{"title":title})
        .then(function (response) {
            console.log(response);
          })

    }
  
    


    return(
        <div>
            

            <div className="contain">
                <div id='space'> </div>
                <div className="picture">

                </div>
               
                <br/>

                <p style={{width:"270px"}} id='title-box' >
                {props.title}


                </p>
                <a className='btn' href='' onClick={""}>See more...</a>
                
                
            </div>

        </div>
    )
}

export default Item;