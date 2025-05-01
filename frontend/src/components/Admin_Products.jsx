import {useEffect, useState} from 'react'
import useAdminProvider from '../contexts/Admin_Context';
import './Admin_Products.css'
export default function AdminProducts() {
  const {getAdminProducts,products,setProducts}= useAdminProvider();

async function getProducts(){
  setProducts(await getAdminProducts())
}


  useEffect(()=>{
  getProducts()
  },[])

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
            <td>{product?.inStock}</td>
            <td>{product?.stock}</td>
  
         
            </tr>
          })}
        
        </tbody>
      </table>
    </div>
  )
}
