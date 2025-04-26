import {useState} from 'react'
import CustomInput from '../components/Custom_Input';
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
