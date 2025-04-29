import {useEffect, useState} from 'react'
import useAdminProvider from '../contexts/Admin_Context'
export default function AdminProducts() {
  const {getAdminProducts,products,setProducts}= useAdminProvider();




  useEffect(()=>{

  },[])
  console.log(products)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>{products?._id}</td>
            <td>{products?.name}</td>
            <td>{products?.category}</td>
            <td>{products?.createdBy}</td>
            <td>{products?.createdAt}</td>
            <td>{products?.updatedAt}</td>
            <td>{products?.price}</td>
            <td>{products?.inStock}</td>
            <td>{products?.stock}</td>
            <td>{products?.publicId}</td>
            <td>{products?.url}</td>
          </tr>
        </thead>
        <tbody>
        <tr>
        <td>{products?._id}</td>
            <td>{products?.name}</td>
            <td>{products?.category}</td>
            <td>{products?.createdBy}</td>
            <td>{products?.createdAt}</td>
            <td>{products?.updatedAt}</td>
            <td>{products?.price}</td>
            <td>{products?.inStock}</td>
            <td>{products?.stock}</td>
            <td>{products?.publicId}</td>
            <td>{products?.url}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
