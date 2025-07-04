import axios from "axios";
import { useState,useContext,createContext } from "react";

import useAuthProvider from './Auth_Context'
const AdminContext= createContext();




export function AdminProvider({children}){
  const [totalPages,setTotalPages]= useState(1)
const [products,  setProducts]= useState([]);
const [adminErr,setAdminErr]= useState('');
const [info,setInfo]= useState('')
const API_URL = import.meta.env.API_URL || '/api';
const base_url  = `${API_URL}/admin`;

const {cookies}= useAuthProvider();


  async function getAdminProducts(page,createAt,sortOrder) {
  try {
  const response = await axios.get(`${base_Url}/all_admin_products?page=${page}&sortFilter=${createAt}&sortOrder=${sortOrder}`,{headers:{Authorization:`Bearer ${cookies?.token}`
  }})  ;
  console.log(response.data)
  setTotalPages(response.data.totalpages)
  return response.data 
  } catch (error) {
   
    setAdminErr(error)
  }
};

async function getAdminInfo(){
 
  try {

    const response = await axios.get(`http://localhost:3000/api/admin/get_admin`,{
      headers:{Authorization:`Bearer ${cookies?.token}`}
    });

    return response.data.user
  } catch (error) {
    console.error(error)
  }
};




async function createProduct(formData){
try {
  const response = await axios({
    url:`http://localhost:3000/api/admin/create_product`,
    method:'post',
    data:formData,
    headers:{Authorization:`Bearer ${cookies?.token}`}
  });
  return response
 
} catch (error) {
  console.error(error)
}finally{

}
};

async function editProduct(id,data){
  try {
    const response = await axios({
      url:`http://localhost:3000/api/admin/edit_product/${id}`,
      method:'put',
      data:data,
      headers:{Authorization:`Bearer ${cookies?.token}`}
    });
    console.log(response)
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

async function deleteProduct(id){
  try {
    const response = await axios({
      url:`http://localhost:3000/api/admin/delete_product/${id}`,
      method:'delete',
      headers:{Authorization:`Bearer ${cookies?.token}`}
    });

  
    return response.data.products;
  } catch (error) {
    console.error(error)
  }
}



let values={getAdminProducts,getAdminInfo,adminErr,setAdminErr,products,setProducts,info,setInfo,totalPages,setTotalPages,createProduct,editProduct,deleteProduct};
  return <AdminContext.Provider value={values}>
    {children}

  </AdminContext.Provider>
}


export default function useAdminProvider(){
  return useContext(AdminContext)
}