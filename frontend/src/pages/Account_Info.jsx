
import AdminSidebar from '../components/Admin_Sidebar/Admin_Sidebar';
import AdminSearchbar from '../components/Admin_Searchbar/Admin_Searchbar';
import AdminInfo from '../components/Admin_Info/Admin_Info.jsx';
import { Search } from 'lucide-react';

import './Admin.css'
export default function AccountInfo() {

  return (
    <div className='admin'>
      
      <AdminSearchbar type ={'text'} icon={Search}/>
      <AdminSidebar/>
      <AdminInfo/>
    </div>
  )
}
