import React from 'react';
import axios from 'axios';
import { useState } from 'react';

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
    formData.append('catergory', checkboxValues);
    formData.append('description', data.description);
    formData.append('page', data.pages);
    
    formData.append('file', event.target.avatar.files[0]);

    const rawData = {
      age: 30,
      gender: 'male'
    };

    formData.append('rawData', JSON.stringify(rawData));

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="file" name="avatar" />

      <p>book Name :</p>
        <input onChange={(e)=>handle(e)} type='text' id='book_name' value={data.book_name}/>

        <p>Author's Name :</p>
        <input onChange={(e)=>handle(e)} type='text' id='author' value={data.author}/>

        <div>
      <label>
        Checkbox 1:
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxValues.checkbox1}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label>
        Checkbox 2:
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxValues.checkbox2}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label>
        Checkbox 3:
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxValues.checkbox3}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label>
        Checkbox 4:
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkboxValues.checkbox4}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label>
        Checkbox 5:
        <input
          type="checkbox"
          name="checkbox5"
          checked={checkboxValues.checkbox5}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label>
        Checkbox 6:
        <input
          type="checkbox"
          name="checkbox6"
          checked={checkboxValues.checkbox6}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>


        <p>Book Description :</p>
        <input onChange={(e)=>handle(e)} type='text' id='description' value={data.description}/>

        <p>Number of Page :</p>
        <input onChange={(e)=>handle(e)} type='text' id='pages' value={data.pages}/>







      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Addbook;
