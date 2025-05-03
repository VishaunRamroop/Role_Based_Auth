import {useState} from 'react'
import { Link } from 'react-router-dom';
import useAuthProvider from '../../contexts/Auth_Context';
import './Admin_Sidebar.css';
export default function AdminSidebar() {
  const {Logout}= useAuthProvider();
  async function handleLogout() {
    await Logout();
  }
  return (
    <aside className='admin-sidebar'>
 
      <ul className='admin-menu'>
        <Link to={'/admin'} className='admin-option'>Home</Link>
        <Link to={'/account-info'} className='admin-option'>Account Information</Link>
        <Link to={'/create-product'}  className='admin-option'>Create Product</Link>
        <Link to={'/account-security'}  className='admin-option'>Security</Link>
        <Link to={'/login'}  className='admin-option' onClick={()=>handleLogout()}>Logout</Link>      
      </ul>
    </aside>
  )
}
