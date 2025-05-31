import Layout from '../../components/Layout/Layout.jsx';
import CreateProductForm from '../../components/Admin/Create_Product_Form/Create_Product_Form.jsx';
import './Admin.css'
export default function AdminCreateProduct() {

  return (
    <div className=''>

    <Layout>
    <CreateProductForm/>
    </Layout>
    </div>
  )
}
