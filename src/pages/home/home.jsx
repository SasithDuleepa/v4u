import React from "react";
import SimpleSlider from "../../component/slider/slider";
import Reccomend from "../../component/recomended-book/rec-book";
import Navibar2 from "../navbar/navbar2";
import Newbooks from "../../component/new_books/newBooks";
import Editors_choice from "../../component/editor-choice/editor_choice";


import './home.css'
import book1 from '../../component/book1.png';

function Home(){
    
    return(
        
        <div id="frame1">
        <Navibar2/>
        <img src={book1} className="book1"/>
        <div style={{display:"flex"}}>
        <p id='recbook'>recommended books for you!!!   <a id="recseemore">see more...</a></p>       
        </div>

        <div className='recc'>
        <Reccomend />
        </div>


        
        <div id="newbooks">new books!!!    <a id="recseemore">see more...</a></div>
        <div className='recc'>
        <Newbooks top_books =""/>
        </div>

        <div id="editors_choice">editors choice!!!   <a id="recseemore">see more...</a></div>
        <div className='recc'>
        <Editors_choice/>
        </div>
        

        </div>
    )

}
export default Home;