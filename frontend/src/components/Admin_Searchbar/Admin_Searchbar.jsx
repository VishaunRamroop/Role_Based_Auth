import {useState} from 'react'
import CustomInput from '../Custom_Components/Custom_Input.jsx';
import './Admin_Searchbar.css'
export default function AdminSearchbar({type,icon}) {

  return (

<div className="admin-searchbar">
<form action="">
      <CustomInput type={type} icon={icon}/>
    </form>
</div>

  )
}
