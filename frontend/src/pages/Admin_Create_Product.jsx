
import AdminSidebar from '../components/Admin_Sidebar';
import AdminSearchbar from '../components/Admin_Searchbar';
import { Search } from 'lucide-react';
import './Admin.css'
export default function AdminCreateProduct() {

  return (
    <div className='admin'>
      
      <AdminSearchbar type ={'text'} icon={Search}/>
      <AdminSidebar/>
      <p>Create product goes here</p>
    </div>
  )
}
