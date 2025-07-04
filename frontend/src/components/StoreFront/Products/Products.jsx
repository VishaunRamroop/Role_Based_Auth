import CustomButton from "../../Custom_Components/Custom_Button";
import { useEffect, useState } from "react";
import { useProductContext } from "../../../contexts/Product_Context";
import Pagination from "../../Pagination/Pagination";
import Category from "../Category/Category";
import useCartContext from "../../../contexts/Cart_Context";
export default function Products() {  

const {getProducts,products,page,setPage,createAt,sortOrder,selectedFilters} = useProductContext();
const {add} = useCartContext()


useEffect(() => {
const categoryFilters = Object.entries(selectedFilters)
  .filter(([key, value]) => value.length > 0)
  .map(([key, value]) => `${value.join(',')}`).flat()
  ;

getProducts(page,createAt,sortOrder,categoryFilters);
},[page,createAt,sortOrder,selectedFilters])
  return (
    <div className='flex   bg-white w-full p-4 '>
     <Category/>
      <main className="flex flex-col flex-1 p-4 rounded shadow ">
        <h1 className='text-2xl font-bold mb-4'>Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen '>
          {/* Example product cards */}
          {products?.map((product, index) => (
            <div key={index} className='bg-white p-4 rounded shadow hover:shadow-lg h-fit transition-shadow sm:min-w-0'>
             <img
  src={product.url}
 
  
  alt={product.name}
  loading="lazy"
  className="w-full h-40 object-contain mb-2 rounded-lg"
/>
              <h2 className='text-lg font-semibold'>{product.name}</h2>
              <p className='text-gray-600'> ${product.price}</p>
              <CustomButton className='mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
              onClick={()=>{add(product)}}>
                Add to Cart
              </CustomButton>
            </div>
          ))}
           
        </div>
          <Pagination />
      </main>
    </div>
  );
}