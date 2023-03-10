import React from "react";
import "./navbar.css"
import man from "./man.jpg";
import User_info from "../profile/user_info/user_info";

import { BsFillBellFill,BsFillChatLeftTextFill,BsCart3,BsSearch } from "react-icons/bs";

function Navibar2(props){
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
        <a href="/pages/login">Login</a>
    </li>
    
    </div>
    
</nav>
    )
};

export default Navibar2;