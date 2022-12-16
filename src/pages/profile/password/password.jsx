import React from "react";
import './password.css'
function Password(){
    return(
    <div>
        <div className="content">
          <p id ="">Old Password:</p>
            <input id="old_password"></input>

            <p id="location">New Password:</p>
            <input id="new_password"></input>

            <p id="bio">Confirm New Password:</p>
            <input id="confirm_password"></input>
            <div></div>

            <input type="button" id="update" value="Update"></input>
        </div>
    </div>
    )
}

export default Password;