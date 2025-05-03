import {useState} from 'react';
import './Custom_Input.css';
export default function CustomInput({icon:Icon,...props}) {

  return (
   <div className="input-container">
    <div className='icon-container'>
      <Icon/>
    </div>
     <input {...props} required/>
   </div>
  )
}
