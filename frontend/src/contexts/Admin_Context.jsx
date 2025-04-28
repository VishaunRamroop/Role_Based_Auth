import axios from "axios";
import { useState,useContext,createContext } from "react";

const AdminContext= createContext();




export function AdminProvider({children}){

const [products,  getProducts]= useState([]);

  const base_Url= `http://localhost:3000/api/admin/all_admin_products`
async function getAdminProducts() {
  try {
  const response = await axios.get(`${base_Url}`)  ;
  return response  
  } catch (error) {
    console.error(error)
  }
};

async function getAdminInfo() {
  try {
    const response = await axios.get(`${base_Url}`)
  } catch (error) {
    console.error(error)
  }
}

let values={getAdminProducts};
  return <AdminContext.Provider value={values}>
    {children}

  </AdminContext.Provider>
}


export default function useAdminProvider(){
  return useContext(AdminContext)
}