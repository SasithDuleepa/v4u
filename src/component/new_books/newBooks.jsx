
import React, { useEffect, useState } from "react";
import SimpleSlider from "../slider/slider";

function Newbooks(){

    const[title1,setTitle1] =useState('title_1');
    const[title2, setTitle2] =useState('title_2');
    const[title3, setTitle3] =useState('title_3');
    const[title4, setTitle4 ]=useState('title_4');
    const[title5, setTitle5] =useState('title_5');
    const[title6, setTitle6] =useState('title_6');
    const[title7, setTitle7] =useState('title_7');
    const[title8, setTitle8 ]=useState('title_8');


    return(
        <div>
            <SimpleSlider
            t1={title1}
            t2={title2}
            t3={title3}
            t4={title4}
            t5={title5}
            t6={title6}
            t7={title7}
            t8={title8}/>

        </div>
    )
}
export default Newbooks;