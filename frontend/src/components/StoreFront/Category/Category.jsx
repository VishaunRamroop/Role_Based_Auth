
import { useProductContext } from '../../../contexts/Product_Context';
import CustomModal from '../../Custom_Components/Custom_Modal';
import useCartContext from '../../../contexts/Cart_Context'
import { useState } from 'react';
import { Button } from '@headlessui/react';
import CustomButton from '../../Custom_Components/Custom_Button';
export default function Category() {

  const filters = {
  Cloths: [ 'shoes','shirts','pants'],
  Electronics: ['laptops', 'desktops', 'smartphones', 'tablets'],
  Grocery: ['fruits', 'vegetables', 'dairy', 'rice', 'flour','chicken', 'fish']

};
const {selectedFilters, setSelectedFilters} = useProductContext();
const [isOpenFilter,setIsOpenFilter]= useState(false)
  return <div className='flex flex-col p-2 items-start justify-start'>
  <CustomButton className={`md:hidden`} onClick={()=>setIsOpenFilter(!isOpenFilter)}>Filters</CustomButton>
  <div className="w-64 hidden p-4 bg-white shadow rounded md:flex flex-col">
  {Object?.entries(filters)?.map(([filterName, options]) => (
   
  <div key={filterName} className="mb-4 ">
    <h4 className="font-bold mb-2">{filterName}</h4>

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
        <span className="ml-2">{option}</span>
      </label>
    ))}
  </div>
))}


  </div>
{/* mobile category */}
    {isOpenFilter &&   <div className=" md:hidden p-4 bg-white shadow rounded flex flex-col">
         
  {Object?.entries(filters)?.map(([filterName, options]) => (
   
  <div key={filterName} className="mb-4 ">
    <h4 className="font-bold mb-2">{filterName}</h4>
    <h5>MOBILE</h5>
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
        <span className="ml-2">{option}</span>
      </label>
    ))}
  </div>
))}

  </div>}
  
  </div>
}
