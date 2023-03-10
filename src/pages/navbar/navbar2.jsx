import React, { useState, useEffect } from "react";
import "./navbar.css"
import man from "./man.jpg";
import User_info from "../profile/user_info/user_info";
import axios, { Axios } from 'axios'

import { BsFillBellFill,BsFillChatLeftTextFill,BsCart3,BsSearch } from "react-icons/bs";

function Navibar2(props){
    const [cookieValue, setCookieValue] = useState({});
    const[user, setUser]= useState('login');

    // const fetchData = async () => {
    //     const response = await axios.get('http://localhost:8080/user');
    //     setUser(response.data);
    //   };
      useEffect(() => {
        axios.get('http://localhost:8080/user', {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            console.log(response.data);
          });
      }, []); 





    return(<nav className="nav">
    <p href="/" className="site-title">V4U</p>
    
    <div id="setone">
    <a href="../pages/home">Home</a>        
    <a href="/top books">{props.top_books}</a>
    </div>

    <input id="search" type={"text"} placeholder=" Search"></input>
    
    <div id="settwo">        
    <li>
    <a href="/pricing"><BsFillBellFill /></a>
    </li>
    <li>
    <a href="/pricing"><BsFillChatLeftTextFill /></a>
    </li>
    <li>
    <a href="../cart"><BsCart3/></a>
    </li>
    <li>
        <a href="/pages/login">{user}</a>
    </li>
    
    </div>
    
</nav>
    )
};

export default Navibar2;