import {useEffect, useState} from 'react'
import useAdminProvider from '../../contexts/Admin_Context';
import CustomButton from '../Custom_Components/Custom_Button';
import {ChevronRight,ChevronLeft} from 'lucide-react'
import './Admin_Products.css'
export default function AdminProducts() {
  const {getAdminProducts,products,setProducts,totalPages,setTotalPages}= useAdminProvider();
  const [page,setPage]= useState(1);
  const [createAt,setCreatedAt]= useState('createdAt');
  const [sortOrder,setSortOrder]= useState('asc');
 
async function getProducts(){
try {
  const response = await getAdminProducts(page,'createdAt',sortOrder)
  
  setProducts(response.products);
} catch (error) {
  console.error(error)
}finally{

}

}


  useEffect(()=>{
    getProducts(page,'createdAt',sortOrder)
    let updateProductList = setInterval(()=>{
      getProducts(page,'createdAt',sortOrder);
      console.log('updated')
    },50000)
    return ()=> clearInterval(updateProductList)
  },[page,sortOrder])
console.log(totalPages)
console.log(sortOrder)
  return (
    <div className='admin-products-container'>
      <table>
        <thead>
          <tr>
            
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>createdBy</th>
              <th>createdAt</th>
              <th>updatedAt</th>
              <th>PRICE</th>
              <th>in-STOCK</th>
              <th>STOCK</th>
      
           
          </tr>
        </thead>
        <tbody>
        
          {products?.map((product)=>{
            return <tr key={product._id}>
          
            <td>{product?.name}</td>
            <td>{product?.category}</td>
            <td>{product?.createdBy}</td>
            <td>{product?.createdAt}</td>
            <td>{product?.updatedAt}</td>
            <td>{product?.price}</td>
            <td>{product?.inStock===true ? 'Yes':'No'}</td>
            <td>{product?.stock}</td>
  
         
            </tr>
          })}
        
        </tbody>
      </table>
          <div className="pagination-container">
            <select onChange={(e)=>{setSortOrder(e.target.value)}}>
              <option value="asc" >Ascending</option>
              <option value="desc">Decending</option>
            </select>
          <button onClick={()=>{setPage(p=>p-1)}} disabled={page===1}>Previous</button>
          <button onClick={()=>{setPage(p=>p+1)}} disabled={page===totalPages}>Next</button>
          
          </div>
        
    </div>
  )
}
