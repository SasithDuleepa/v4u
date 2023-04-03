import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

import './bookpreview.css';

export default function Bookpreview() {
  const { title } = useParams();
  const[data, setData]= useState([]);
  const[link, setlink]=useState('');

  const[img_1,setImg_1]= useState('http://localhost:8080/book/download/1679310215180-742095538-pic4.jpg');
  
  console.log(title)

useEffect(()=>{
  async function getdata(){
    try{
      const book =await axios.post('http://localhost:8080/book/book',{
        book_title:title
      });
      // setBookdetails(book.data);
      // setAuthor(book.data.author)
      // setAuthor(book.data.book_name)
      setData(book.data)
      
      console.log(book.data.filename);
    
    }catch(error){
      console.log(error)
    }


  }
  
  getdata()


},[title])

const imglink =`http://localhost:8080/book/download/${data.filename}`;

console.log(imglink)

  // const book =axios.post('http://localhost:8080/book/book',{
  //   book_title:title
  // }
 
    
    
  // )


  return (
    <>
    <div className='prev_main'>
      <p className='prev-title'>{data.book_name}</p>
      <div>
        <img className='prev-img' src={imglink}/>
      </div>
      <p className='prev-author'>written by : {data.author}</p>
      <p className='prev-catergory'>catergory : {data.catergory}</p>
      <p className='prev_description'>{data.description}</p>
      
      <br/>
     

    
    </div>

    </>
  )
}
