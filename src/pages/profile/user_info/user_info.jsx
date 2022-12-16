import React, { Component } from 'react';
import "./user_info.css"
import man from "./man.jpg"
import Edit_profile from "../edit_profile/edit_profile";
import Password from '../password/password';
import Social_profiles from '../social profiles/social_profiles';
import My_books from '../my books/my_books';

import Navibar from "../../navbar/navbar";

import {BrowserRouter as Router,Route} from "react-router-dom";

class User_info extends Component{
    constructor(props) {
        super(props);
        this.state = {
             
        }
      }
     
      updateContent_1 = () => {
          this.setState({ message:<Edit_profile/> });
      }  
      updateContent_2 = () => {
        this.setState({ message:<Password/> });
    } 
    updateContent_3 = () => {
        this.setState({ message:<Social_profiles/> });
    } 
    updateContent_4 = () => {
        this.setState({ message:<My_books/> });
    }   
      render() {
        return(
          <div>
           <div>
          <Router>    
               <Route  exact><Navibar/></Route>
         </Router>
         </div>




         <div className="frame1">    
            <img src={man} className="pic" />
            <div className="info">                
                <div id="name">Steeven Jonny</div>
                <div id="books">Books-100</div>
                <div id="followers">Followers-500</div>
                <div id="following">Following-20</div>
            </div>
         </div>
         <div className="frame2">
            <button className="edit_profile" onClick={this.updateContent_1}>edit_profile</button><div></div>
            <button id="pwd" onClick={this.updateContent_2}>password</button><div></div>
            <button id="social_profile" onClick={this.updateContent_3}>social profile</button><div></div>
            
            
            <a id="delete_acc"href="">Delete account</a>
         </div>

    

         <div className=" content1">
         <Router>    
               <Route  exact>{ this.state.message }</Route>
          </Router>
            

         </div>


         </div>
    )
        }

}

export default User_info;