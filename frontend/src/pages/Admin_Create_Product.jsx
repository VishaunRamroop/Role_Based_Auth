import Layout from '../components/Layout/Layout.jsx';
import CreateProductForm from '../components/Create_Product_Form/Create_Product_Form.jsx';
import './Admin.css'
export default function AdminCreateProduct() {

  return (
    <div className='admin'>

    <Layout>
    <CreateProductForm/>
    </Layout>
    </div>
  )
}
