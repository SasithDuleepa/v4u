import React from "react";
import SimpleSlider from "../../component/slider/slider";
import Reccomend from "../../component/recomended-book/rec-book";
import Navibar from "../navbar/navbar";
import Newbooks from "../../component/new_books/newBooks";
function Home(){
    
    return(
        
        <div>
            <Navibar/>
            <div>
            <h1>recommended books for you</h1>
            </div>
        <Reccomend/>
        <div>new books</div>
        <Newbooks/>
        

        </div>
    )

}
export default Home;