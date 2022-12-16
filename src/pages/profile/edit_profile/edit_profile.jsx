import React from "react";
import "./edit_profile.css"
import man from "../user_info/man.jpg"
import { BsFillCameraFill } from 'react-icons/bs';




function Edit_profile(){
    return(
        <div>
            <div className="frame1">
            
            <img src={man} className="pic2" />
            <button className="cam" href=""><BsFillCameraFill/></button><div></div>
            
            </div>

            <div className="content">

            <p id="name">Name:</p>
            <input id="name_input"></input>

            <p id="nic">NIC:</p>
            <input id="nic-input"></input>
            <p></p>

            <p id ="">Email:</p>
            <input id="email_input"></input>

            <p id="location">Location:</p>
            <input id="location_input"></input>

            <p id="bio">Bio:</p>
            <input id="bio_input"></input>

            <p id="website">Personal Website:</p>
            <input id="website_input"></input>

            <p id="url">Portfolio URL:</p>
            <input id="url_input"></input><div></div>

            <input type="button" id="update" value="Update"></input>

            </div>

        </div>

    )
}

export default Edit_profile;