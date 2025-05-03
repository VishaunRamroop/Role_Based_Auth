import { useEffect } from 'react';
import AdminSidebar from '../components/Admin_Sidebar/Admin_Sidebar.jsx';
import AdminSearchbar from '../components/Admin_Searchbar/Admin_Searchbar.jsx';
import { Search } from 'lucide-react';
import useAdminProvider from '../contexts/Admin_Context';
import AdminProducts from '../components/Admin_Products/Admin_Products.jsx';
import AdminInfo from '../components/Admin_Info/Admin_Info.jsx';
import './Admin.css';
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
