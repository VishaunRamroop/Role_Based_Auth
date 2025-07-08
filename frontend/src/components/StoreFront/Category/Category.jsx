
import { useProductContext } from '../../../contexts/Product_Context';

import { useState,useEffect } from 'react';

import CustomButton from '../../Custom_Components/Custom_Button';
export default function Category() {

  const filters = {
  Cloths: [ 'shoes','shirts','pants'],
  Electronics: ['laptops', 'desktops', 'smartphones', 'tablets'],
  Grocery: ['fruits', 'vegetables', 'dairy', 'rice', 'flour','chicken', 'fish']

};
const {selectedFilters, setSelectedFilters,setPage} = useProductContext();
const [isOpenFilter,setIsOpenFilter]= useState(false);
const FilterIcon = () => (
  <svg 
    className="w-10 h-10  text-sky-900 rounded-full p-1 mr-2 animate-bounce" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" 
    />
  </svg>
);
useEffect(()=>{
setPage(1)
},[selectedFilters])
  return <div className='flex flex-col p-2 items-start justify-start '>

  <div className="w-64 hidden p-4 bg-white shadow rounded md:flex flex-col">
  {Object?.entries(filters)?.map(([filterName, options]) => (
   
  <div key={filterName} className="mb-4 ">
    <h4 className="font-bold mb-2 transition-all duration-200 sm:text-md md:text-lg lg:text-2xl">{filterName}</h4>

    {options?.map(option => (
      <label key={option} className="flex items-center mb-1">
        <input
          type="checkbox"
          checked={selectedFilters[filterName]?.includes(option) }
          onChange={() => {
            setSelectedFilters(prev => {
              const already = (prev[filterName] || [])?.includes(option);
              return {
                ...prev,
                [filterName]: already
                  ? ((prev[filterName] ||[])?.filter(o => o !== option ) )
                  : ([...(prev[filterName] ||[]), option ||[]]),
              };
            });
          }}
        />
        <span className="ml-2  transition-all duration-200 sm:text-md md:text-lg lg:text-2xl ">{option}</span>
      </label>
    ))}
  </div>
))}


  </div>
  <CustomButton className={`md:hidden mb-2`} onClick={()=>setIsOpenFilter(!isOpenFilter)}><FilterIcon/></CustomButton>
      <div className={`transform, transition-all duration-200 ${isOpenFilter ? 'flex flex-col items-start justify-center translate-x-0  opacity-100':'-translate-x-full opacity-0 fixed '}  p-4 bg-white shadow rounded `}>
         
  {Object?.entries(filters)?.map(([filterName, options]) => (
   
  <div key={filterName} className="mb-4 ">
    <h4 className="font-bold mb-2 sm:text-md md:text-lg lg:text-2xl transition-all duration-200">{filterName}</h4>
   
    {options?.map(option => (
      <label key={option} className="flex items-center mb-1">
        <input
          type="checkbox"
          checked={selectedFilters[filterName]?.includes(option) }
          onChange={() => {
            setSelectedFilters(prev => {
              const already = (prev[filterName] || [])?.includes(option);
              return {
                ...prev,
                [filterName]: already
                  ? (prev[filterName] ||[])?.filter(o => o !== option )
                  : [...(prev[filterName] ||[]), option ||[]],
              };
            });
          }}
        />
        <span className="ml-2 transition-all duration-200">{option}</span>
      </label>
    ))}
  </div>
))}

  </div>
  
  </div>
}
