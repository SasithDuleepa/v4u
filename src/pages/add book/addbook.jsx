import React from 'react';
import axios from 'axios';
import { useState } from 'react';
// import './addbook.css'

const Addbook = () => {
    const [checkboxValues, setCheckboxValues] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
      });
    const [data, setData]= useState({
        book_name:"harry",
        author:"",
        catergory:"",
        description:"",
        pages:""
      })
      function handle(e){
        const newdata={...data}
        newdata[e.target.id]= e.target.value
        setData(newdata)
       
        
    }
    function handleCheckboxChange(event) {
        const { name, checked } = event.target;
        setCheckboxValues(prevValues => ({ ...prevValues, [name]: checked }));
        
      }

  const handleSubmit = async (event) => {
    // console.log(checkboxValues)
    event.preventDefault();
  

    const formData = new FormData();
    formData.append('name', data.book_name);
    formData.append('author', data.author);
    formData.append('catergory', data.catergory);
    formData.append('description', data.description);
    formData.append('page', data.pages);
    
    formData.append('file', event.target.avatar.files[0]);

    const rawData = {
      age: 30,
      gender: 'male'
    };

    formData.append('rawData', JSON.stringify(rawData));
    console.log(formData)

    try {
      const response = await axios.post('http://localhost:8080/book/save', formData, {
        withCredentials: true
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className='addbook'>
    <form onSubmit={handleSubmit}>
      
      

      <p className='input_lable'>book Name :</p>
        <input onChange={(e)=>handle(e)} type='text' id='book_name' value={data.book_name}/>

        <p>Author's Name :</p>
        <input onChange={(e)=>handle(e)} type='text' id='author' value={data.author}/>
        <p>catergory :</p>
        <input onChange={(e)=>handle(e)} type='text' id='catergory' value={data.catergory}/>

   


        <p>Book Description :</p>
        <input onChange={(e)=>handle(e)} type='text' id='description' value={data.description}/>

        <p>Number of Page :</p>
        <input onChange={(e)=>handle(e)} type='text' id='pages' value={data.pages}/><br/>
        <input type="file" name="avatar" /> <br/>







      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
};

export default Addbook;
