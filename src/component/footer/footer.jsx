import React from 'react'

import { AiOutlineMail } from "react-icons/ai";

import ('./footer.css')

export default function Footer() {
  return (
    <div>
        <div id='footer'>
          <div id='set_1'>
            <p id='_v4u'>V4U</p>
            {/* <p id='store'>e book store</p> */}
            {/* <p id='about'>about_v4u</p> */}
          </div>
          <div id='set_2'>
            <p>contact_us</p>
            <p style={{display:'flex'}}> <a>  v4umail@gmail.com</a></p>


          </div>

        </div>
    </div>
  )
}
