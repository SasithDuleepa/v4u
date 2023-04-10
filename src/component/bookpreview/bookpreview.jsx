import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

import './bookpreview.css';

export default function Bookpreview() {
  const cartdata = {
    userid:'',
    bookid:"",
    booktitle:""
  }
  const { title } = useParams();
  const[data, setData]= useState([]);
  const[link, setlink]=useState('');

  const[img_1,setImg_1]= useState('http://localhost:8080/book/download/1679310215180-742095538-pic4.jpg');
  
 

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
      
     
    
    }catch(error){
      console.log(error)
    }


  }
  
  getdata()


},[title])

const imglink =`http://localhost:8080/book/download/${data.filename}`;



  // const book =axios.post('http://localhost:8080/book/book',{
  //   book_title:title
  // }
 
    
    
  // )
const clickhandle=()=>{
  console.log(data._id)
  console.log(data.book_name)
  console.log(data.user_id)

  axios.post('http://localhost:8080/register/user/cart', {
    userId:data.user_id,
    bookId:data._id,
    bookTitle:data.book_name

  })
}

  return (
    <>
    <div className='prev_main'>
      <p className='prev-title'>{data.book_name}</p>
      <div className='prev-frame'>      <div className='prev-frame1'>
        <img className='prev-img' src={imglink}/>
      </div>
      <div className='prev-frame2'>
      <p className='prev-author'>written by : {data.author}</p>
      <p className='prev-catergory'>catergory : {data.catergory}</p>
      <p className='prev_description'>description : {data.description}</p>
      </div>

      </div>

      <br/>
     

    <button onClick={clickhandle} >add to cart</button>
    </div>

    </>
  )
}
