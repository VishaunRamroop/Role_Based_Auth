import { useState,useContext,createContext } from "react";


const AdminContext= createContext();


export function AdminProvider({children}){

let values={};
  return <AdminContext.Provider value={values}>
    {children}

  </AdminContext.Provider>
}


export default function useAdminProvider(){
  return useContext(AdminContext)
}