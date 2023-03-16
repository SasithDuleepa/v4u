import React from 'react'
import { useState } from 'react';
import Axios from 'axios';


export default function Addbook() {
    const url ="http://localhost:8080/book/save"
    const [checkboxValues, setCheckboxValues] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
      });

      const [data, setData]= useState({
        book_name:"",
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



      
    const submit = async (e)=>{  
        console.log(data)
        
        e.preventDefault();
        try{
            const resp =await Axios.post(url,{            
                book_name:data.book_name,
                author:data.author,
                catergory:checkboxValues,
                description:data.description,
                pages:data.pages
            },
            {
              withCredentials: true,
              
              headers: {
                
                'Content-Type': 'application/json',
              },
            }
            )
           
            console.log(resp.data)
          
        } catch(error){console.log(error);
        }     
        
       
       
    }
    

  return (
    <div>
        <form onSubmit={(e)=> submit(e)}>
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
        
        <button>submit</button>
        </form>
    </div>
  )
}
