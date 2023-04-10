import React, { useState, useEffect } from "react";
import "./navbar.css"

import axios, { Axios } from 'axios'

import { BsFillBellFill,BsFillChatLeftTextFill,BsCart3,BsSearch } from "react-icons/bs";

function Navibar2(props){
    const [cookieValue, setCookieValue] = useState({});
    const[user, setUser]= useState('login');
    const[userlink,setUserlink] = useState("/pages/login")
    const[addbook,setAddbook]= useState('a')
    const[addbooklink, setAddbooklink] = useState("/")

    const fetchData = () => {
      if(user!='login'){setUserlink("/pages/user_info")}
      };
      useEffect(() => {
        axios.get('http://localhost:8080/user', {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            console.log(response.data)
            setUser(response.data);
          });

          if(user!='login'){
            setUserlink("/pages/myprofile");
            setAddbook('addbook');
            setAddbooklink("/pages/addbook");
      }
      console.log()
          fetchData(addbook)
      }, [user]); 

      
      





    return(<nav className="nav">
    <a href="../" className="site-title">V4U</a>
    
    <div id="setone">
    {/* <a style={{margin:"0 0 0 50px"}} href="../">Home</a>         */}
    <a href="/top books">{props.top_books}</a>
    </div>

    {/* <input id="search" type={"text"} placeholder=" Search"></input> */}
    
    <div className="settwo">        
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
      <a href={addbooklink}>{addbook}</a>
    </li>
    <li>
        <a href={userlink}>{user}</a>
    </li>
    
    </div>
    
</nav>
    )
};

export default Navibar2;