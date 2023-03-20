import React, { useState, useEffect } from "react";
import SimpleSlider from "../../component/slider/slider";
import Reccomend from "../../component/recomended-book/rec-book";
import Navibar2 from "../navbar/navbar2";
import Newbooks from "../../component/new_books/newBooks";
import Editors_choice from "../../component/editor-choice/editor_choice";
import axios, { Axios } from 'axios'
import Footer from "../../component/footer/footer";



import './home.css'
import book1 from '../../component/book1.png';


function Home(){
    const [recbookenable, setRecbookenable] =useState(false); // Replace with your condition

    useEffect(() => {
        axios.get('http://localhost:8080/user', {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            console.log(response.data)
            if(response.data){setRecbookenable(true);}else{setRecbookenable(false);}
            
          });
      }, []); 
    
    return(
        
        <div id="frame1">
      
        <img src={book1} className="book1"/>
        <p className="quote">"I do believe<br/> something very magical can happen<br/> when you read a good book."</p>
        <p className="quoter">-J.K.Rowling</p>
        
           
   

        {/* <div className='recc'>
        {recbookenable ? <Reccomend /> : null}
        
        </div> */}


        
       
        <div className='recc'>
        <Newbooks top_books =""/>
        </div>

        
        <div className='recc'>
        <Editors_choice/>
        </div>
        <Footer/>
        

        </div>
    )

}
export default Home;