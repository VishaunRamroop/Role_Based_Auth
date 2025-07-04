import {useState,useContext,createContext} from 'react'

import axios from 'axios';
export const ProductContext=createContext();

export default function ProductProvider({children}) {

  const [totalPages,setTotalPages]= useState(1)
const [products,  setProducts]= useState([]);
const [page,setPage]= useState(1);
  const [createAt,setCreatedAt]= useState('createdAt');
  const [sortOrder,setSortOrder]= useState('asc');
  const [selectedFilters, setSelectedFilters] = useState({
  Cloths: [],
  Electronics: [],
  Grocery: [],

});

const API_URL = import.meta.env.VITE_API_URL || '/api';
const base_Url  = `${API_URL}/product`;
async function getProducts(page,sortFilter,sortOrder,categories) {
  try {
  
    const response = await axios(`${base_Url}/getInitialProducts?page=${page}&limit=8&sortFilter=${sortFilter}&sortOrder=${sortOrder}&category=${categories}`);
   console.log(categories)
    setProducts(response.data.products);
    setTotalPages(response.data.totalPages);
    
    return response.products;
  } catch (error) {
    console.error(error);
    const message = error.response?.data?.message || 'Something went wrong';
    console.log(message);
    throw new Error (message);
  }
}

  const values = {products,setProducts,getProducts,totalPages,setTotalPages,page,setPage,createAt,setCreatedAt,sortOrder,setSortOrder,selectedFilters, setSelectedFilters};
  return <ProductContext.Provider value={values}>
  {children}
</ProductContext.Provider>
  
}


export function useProductContext(){

  return useContext(ProductContext);
}