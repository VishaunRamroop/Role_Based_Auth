import axios from "axios";
import { useState,useContext,createContext } from "react";
import { jwtDecode } from "jwt-decode";
import useAuthProvider from './Auth_Context'
const AdminContext= createContext();




export function AdminProvider({children}){
  const [totalPages,setTotalPages]= useState(1)
const [products,  setProducts]= useState([]);
const [adminErr,setAdminErr]= useState('');
const [info,setInfo]= useState('')
  const base_Url= `http://localhost:3000/api/admin`;

const {cookies}= useAuthProvider();


  async function getAdminProducts(page,createAt,sortOrder) {
  try {
  const response = await axios.get(`${base_Url}/all_admin_products?page=${page}&sortFilter=${createAt}&sortOrder=${sortOrder}`,{headers:{Authorization:`Bearer ${cookies?.token}`
  }})  ;
  console.log(response.data)
  setTotalPages(response.data.totalpages)
  return response.data 
  } catch (error) {
    console.error(error);
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
}


let values={getAdminProducts,getAdminInfo,adminErr,setAdminErr,products,setProducts,info,setInfo,totalPages,setTotalPages};
  return <AdminContext.Provider value={values}>
    {children}

  </AdminContext.Provider>
}


export default function useAdminProvider(){
  return useContext(AdminContext)
}