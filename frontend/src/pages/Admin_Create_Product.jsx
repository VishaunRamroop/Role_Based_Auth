
import AdminSidebar from '../components/Admin_Sidebar/Admin_Sidebar.jsx';
import AdminSearchbar from '../components/Admin_Searchbar/Admin_Searchbar.jsx';
import { Search } from 'lucide-react';
import CreateProductForm from '../components/Create_Product_Form/Create_Product_Form.jsx';
import './Admin.css'
export default function AdminCreateProduct() {

  return (
    <div className='admin'>
      
      <AdminSearchbar type ={'text'} icon={Search}/>
      <AdminSidebar/>
      <CreateProductForm/>
    </div>
  )
}
