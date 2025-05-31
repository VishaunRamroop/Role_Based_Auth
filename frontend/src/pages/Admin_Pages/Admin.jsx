import { useEffect } from 'react';
import useAdminProvider from '../../contexts/Admin_Context';
import AdminProducts from '../../components/Admin/Admin_Products/Admin_Products.jsx';
import AdminInfo from '../../components/Admin/Admin_info/Admin_Info.jsx';
import Layout from '../../components/Layout/Layout.jsx';
export default function Admin() {
  
const {getAdminProducts}= useAdminProvider()

  return (
    <div className='admin'>
      
    <Layout>     
      <AdminInfo/>
      <AdminProducts/>
    </Layout>
    </div>
  )
}
