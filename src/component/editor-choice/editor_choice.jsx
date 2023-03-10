import React, {useState} from "react";
import axios from "axios";
import SimpleSlider from "../slider/slider";

function Editors_choice(){

    axios.get('http://localhost:3001/editor_choice')
  .then(res => {
    
    setTitle1(res.data[0].title)
    setTitle2(res.data[1].title)
    setTitle3(res.data[2].title)
    setTitle4(res.data[3].title)
    setTitle5(res.data[4].title)
    setTitle6(res.data[5].title)
    setTitle7(res.data[6].title)
    setTitle8(res.data[7].title)
    })
    .catch(error => {
        console.error(error)
      })

    const[title1,setTitle1] =useState('Loading..');
    const[title2, setTitle2] =useState('Loading..');
    const[title3, setTitle3] =useState('Loading..');
    const[title4, setTitle4 ]=useState('Loading..');
    const[title5, setTitle5] =useState('Loading..');
    const[title6, setTitle6] =useState('Loading..');
    const[title7, setTitle7] =useState('Loading..');
    const[title8, setTitle8 ]=useState('Loading..');


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

export default Editors_choice;