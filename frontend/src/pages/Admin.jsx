import { useEffect } from 'react';
import AdminSidebar from '../components/Admin_Sidebar';
import AdminSearchbar from '../components/Admin_Searchbar';
import { Search } from 'lucide-react';
import './Admin.css'
export default function Admin() {
  


  return (
    <div className='admin'>
      
      <AdminSearchbar type ={'text'} icon={Search}/>
      <AdminSidebar/>
    
    </div>
  )
}
