import React, { useEffect, useState } from "react";
import SimpleSlider from "../slider/slider";
import axios from "axios";

function Reccomend(){
    axios.get('http://localhost:3001')
  .then(res => {
    console.log(res.data.title1.title)
    setTitle1(res.data.title1[0].title)
    setTitle2(res.data.title2[0].title)
    setTitle3(res.data.title3[0].title)
    setTitle4(res.data.title4[0].title)
    setTitle5(res.data.title5[0].title)
    setTitle6(res.data.title6[0].title)
    setTitle7(res.data.title7[0].title)
    setTitle8(res.data.title8[0].title)
    
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
        t8={title8} />
        </div>
    )
}

export default Reccomend;