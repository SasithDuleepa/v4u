import React from 'react';
import list from '../data';
import '../styles/amazon.css';
import Cards from './Card';

const Amazon = ({handleClick}) => {
  return (

    <div className='Body'>
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
    </div>
  )
}

export default Amazon