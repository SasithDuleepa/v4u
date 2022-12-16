import React from "react";

function Social_profiles(){
    return(
    <div>
        <div className="content">
          <p id ="">Linkedin:</p>
            <input id="old_password"></input>

            <p id="location">Twitter:</p>
            <input id="new_password"></input>

            <p id="bio">Instagram:</p>
            <input id="confirm_password"></input>

            <p id="bio">Facebook:</p>
            <input id="confirm_password"></input>


            <div></div>

            <input type="button" id="update" value="Update"></input>
        </div>
    </div>
    )
}

export default Social_profiles;