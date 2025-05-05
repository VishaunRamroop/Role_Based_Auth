import {useState} from 'react';
import AdminSearchbar from '../Admin_Searchbar/Admin_Searchbar';
import AdminSidebar from '../Admin_Sidebar/Admin_Sidebar';
import {Search} from 'lucide-react'
import './Layout.css'
export default function Layout({children}) {
  return (
    <div className='layout'>
        <header className='header'>
        <AdminSearchbar type ={'text'} icon={Search}/>
        </header>
        <div className="sidebar">
        <AdminSidebar/>
        </div>
      <div className="layout-body">
       
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}
