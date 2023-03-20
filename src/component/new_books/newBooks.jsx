
import React, { useEffect, useState } from "react";
import SimpleSlider from "../slider/slider";
import axios from "axios";

function Newbooks(){
  useEffect(()=>{
    axios.get('http://localhost:8080/book/newbooks')
  .then(res => {console.log(res.data[0])
    console.log(res.data[1])
    console.log(res.data[2])
    setTitle1(res.data[0].book_name)
    const filename1 = res.data[0].filename
    const link1 = `http://localhost:8080/book/download/${filename1}`
    setImg_1(link1)

    setTitle2(res.data[1].book_name)
    const filename2 = res.data[1].filename
    const link2 = `http://localhost:8080/book/download/${filename2}`
    setImg_2(link2)

    setTitle3(res.data[2].book_name)
    const filename3 = res.data[2].filename
    const link3 = `http://localhost:8080/book/download/${filename3}`
    setImg_3(link3)

    setTitle4(res.data[3].book_name)
    const filename4 = res.data[3].filename
    const link4 = `http://localhost:8080/book/download/${filename4}`
    setImg_4(link4)

    setTitle5(res.data[4].book_name)
    const filename5 = res.data[4].filename
    const link5 = `http://localhost:8080/book/download/${filename5}`
    setImg_5(link5)

    setTitle6(res.data[5].book_name)
    const filename6 = res.data[5].filename
    const link6 = `http://localhost:8080/book/download/${filename6}`
    setImg_6(link6)

    setTitle7(res.data[6].book_name)
    const filename7 = res.data[6].filename
    const link7 = `http://localhost:8080/book/download/${filename7}`
    setImg_7(link7)

    setTitle8(res.data[7].book_name)
    const filename8 = res.data[7].filename
    const link8 = `http://localhost:8080/book/download/${filename8}`
    setImg_8(link8)

 
    
    
  
    })
    .catch(error => {
        console.error(error)
      })

    },[]);

    const[title1,setTitle1] =useState('Loading..');
    const[title2, setTitle2] =useState('Loading..');
    const[title3, setTitle3] =useState('Loading..');
    const[title4, setTitle4 ]=useState('Loading..');
    const[title5, setTitle5] =useState('Loading..');
    const[title6, setTitle6] =useState('Loading..');
    const[title7, setTitle7] =useState('Loading..');
    const[title8, setTitle8 ]=useState('Loading..');

    const[img_1,setImg_1]= useState('http://localhost:8080/book/download/1679310215180-742095538-pic4.jpg');
    const[img_2,setImg_2]= useState('');
    const[img_3,setImg_3]= useState('');
    const[img_4,setImg_4]= useState('');
    const[img_5,setImg_5]= useState('');
    const[img_6,setImg_6]= useState('');
    const[img_7,setImg_7]= useState('');
    const[img_8,setImg_8]= useState('');

    



    return(
        <div className='recc'>
          <div id="newbooks">new books!!!    <a id="recseemore">see more...</a></div>
            <SimpleSlider
            t1={title1}
            t2={title2}
            t3={title3}
            t4={title4}
            t5={title5}
            t6={title6}
            t7={title7}
            t8={title8}
            
            img1={img_1}
            img2={img_2}
            img3={img_3}
            img4={img_4}
            img5={img_5}
            img6={img_6}
            img7={img_7}
            img8={img_8}/>
            


        </div>
    )
}
export default Newbooks;