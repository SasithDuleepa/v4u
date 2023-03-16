import React from "react";
import "./App.css"


import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";

import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Navibar from "./pages/navbar/navbar";
import Deleteacc from "./pages/deleteacc/deleteacc";
import User_info from "./pages/profile/user_info/user_info";
import Edit_profile from "./pages/profile/edit_profile/edit_profile";
import Password from "./pages/profile/password/password";
import Social_profiles from "./pages/profile/social profiles/social_profiles";
import My_books from "./pages/profile/my books/my_books";
import Register from "./pages/register/register";
import Item from "./component/items-view/item";
import Reccomend from "./component/recomended-book/rec-book";
import Newbooks from "./component/new_books/newBooks";
import AddCart from "./pages/AddCart/AddCart";
import PostForm from "./pages/register/register";
import Cart from "./pages/cart/cart";
import Navibar2 from "./pages/navbar/navbar2";
import background from "./background.jpg";
import Addbook from "./pages/add book/addbook";

function App () {
  return(
    <>
    <Navibar2/>
    
    <Router>    
     <Switch>   
          
       <Route path="/pages/login" exact> <Login/>  </Route>
       <Route path="/pages/home" exact> <Home/>  </Route>
       <Route path="/pages/navbar" exact><Navibar/></Route>
       <Route path="/pages/deleteacc" exact><Deleteacc/></Route>
       <Route path="/pages/user_info" exact><User_info/></Route>
       <Route path="/pages/edit_profile" exact><Edit_profile/></Route>
       <Route path="/pages/password" exact><Password/></Route>
       <Route path="/pages/social_profiles" exact><Social_profiles/></Route>
       <Route path="/pages/my_books" exact><My_books/></Route>
       <Route path="/pages/register" exact><PostForm/></Route>
       <Route path="/pages/addbook" exact><Addbook/></Route>
       <Route path="/item" exact><Item/></Route>
       <Route path="/recommend" exact><Reccomend/></Route>
       <Route path="/newbooks" exact><Newbooks/></Route>
       
       
      </Switch>
    </Router>
    
    
  
    </>
  
  );

}

export default App;