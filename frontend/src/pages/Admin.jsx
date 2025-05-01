import { useEffect } from 'react';
import AdminSidebar from '../components/Admin_Sidebar';
import AdminSearchbar from '../components/Admin_Searchbar';
import { Search } from 'lucide-react';
import useAdminProvider from '../contexts/Admin_Context';
import AdminProducts from '../components/Admin_Products';
import AdminInfo from '../components/Admin_Info';
import './Admin.css'
export default function Admin() {
  
const {getAdminProducts}= useAdminProvider()

  return (
    <div className='admin'>
      
      <AdminSearchbar type ={'text'} icon={Search}/>
      <AdminSidebar/>
      <AdminInfo/>
      <AdminProducts/>
    </div>
  )
}
