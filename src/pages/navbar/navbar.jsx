import React from "react";
import "./navbar.css"
import man from "./man.jpg";

import { BsFillBellFill,BsFillChatLeftTextFill,BsCart3,BsSearch } from "react-icons/bs";

function Navibar(){
    return(<nav className="nav">
    <p href="/" className="site-title">V4U</p>
    
    <div id="setone">
    <a href="../pages/home">Home</a>        
    <a href="/top books">Top Rated Books</a>
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
    <a href="/pricing"><BsCart3/></a>
    </li>
    <img src={man} className="img" />
    </div>
    
</nav>
    )
};

export default Navibar;