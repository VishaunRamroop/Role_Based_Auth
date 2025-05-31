import {useEffect, useState} from 'react'
import useAdminProvider from '../../../contexts/Admin_Context';
import CustomButton from '../../Custom_Components/Custom_Button';
import {ChevronRight,ChevronLeft} from 'lucide-react'
import { tdStyles } from '../../../utils/stlyes.mjs';
import { productsTableHead } from '../../../utils/tableHeadArrays.mjs';
export default function AdminProducts() {
  const {getAdminProducts,products,setProducts,totalPages,setTotalPages,editProduct}= useAdminProvider();
  const [page,setPage]= useState(1);
  const [createAt,setCreatedAt]= useState('createdAt');
  const [sortOrder,setSortOrder]= useState('asc');
  const [isEditingProductId,setIsEditingProductId]= useState();
  const [editedData,setEditedData] = useState({});
  
async function getProducts(){
try {
  const response = await getAdminProducts(page,'createdAt',sortOrder)
  
  setProducts(response.products);
} catch (error) {
  console.error(error)
}finally{

}

}


  useEffect(()=>{
    getProducts(page,'createdAt',sortOrder)
    let updateProductList = setInterval(()=>{
      getProducts(page,'createdAt',sortOrder);
      console.log('updated')
    },50000)
    return ()=> clearInterval(updateProductList)
  },[page,sortOrder])


  async function handleEdit(product){
    setIsEditingProductId(product?._id);
    setEditedData({...product})
  };
  function handleCancel(){
    setIsEditingProductId(null);
    setEditedData({})
  }

   function handleChange(e){
    const {name,files,value,type}= e.target;
 
      setEditedData((edit)=>( {...edit,[name]:value}))
    
    
  }
  async function handleSubmit(){
    const form = new FormData();
    form.append('name',editedData?.name)
    form.append('category',editedData?.category)
    form.append('price',editedData?.price)
    form.append('inStock',editedData?.inStock)
    form.append('stock',editedData?.stock)
   if(editedData?.url instanceof File){
    form.append('url',editedData?.url)
   }
   await editProduct(isEditingProductId,form)
  };



  return (
    <div className='flex flex-col items-center justify-center p-4 min-w-full min-h-screen bg-gray-100 overflow-x-auto relative'>
    <div className="w-full max-w-6xl  h-[600px] overflow-t-auto">
        <table className='min-w-full divide-y divide-gray-200 '> 
        <thead className='bg-gray-50'>
          <tr>
            {productsTableHead.map((head,index)=>{
              return <th key={index} className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                {head}
              </th>
            })}
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Actions</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
        
          {products?.map((product)=>{
            const isEditing = isEditingProductId===product?._id
            return <tr key={product._id} className='hover:bg-gray-100 transition-colors duration-200 min-h-[100px]'>
              <td className={tdStyles}>{isEditing? <input type={'text'} name='name' className={'bg-white rounded'}  value={editedData?.name}
              onChange={handleChange}
              />: product?.name}</td>
              <td className={tdStyles}>{isEditing? <input type={'text'} className={'bg-white rounded'}  name='category' value={editedData?.category}  onChange={handleChange}/>: product?.category}</td>
              <td className={tdStyles}>{ product?.createdBy}</td>
              <td className={tdStyles}>{new Date(product?.createdAt).toDateString()}</td>
              <td className={tdStyles}>{ product?.updatedAt ? product?.updatedAt:'N/A'}</td>
              <td className={tdStyles}>{isEditing? <input type='text' className={'bg-white rounded'}  name='price' value={editedData?.price}
               onChange={handleChange}
              />: product?.price}</td>
              <td className={tdStyles}>{isEditing?
               <select  onChange={handleChange} name='inStock' value={editedData?.inStock}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>: product?.inStock ? 'Yes':'No'}</td>
              <td className={tdStyles}>{isEditing? <input type='text' name='stock' className={'bg-white rounded'} value={editedData?.stock}
               onChange={handleChange}
              />: product?.stock}</td>
              <td className={tdStyles}>{isEditing? <input type='file'  accept="image/*"
             name='url' onChange={(e)=>{setEditedData((edit)=>({...edit,url:e.target.files[0]}))}} />: product?.url && <img 
             className='w-16 h-16 object-cover rounded-lg transition-all duration-200 hover:scale-500'
             src={product.url} alt={product.name}/>}</td>
                
               <td className={tdStyles}>
               {isEditing?
                <div className='flex flex-row items-center justify-center gap-2'>
                <CustomButton className={'bg-sky-500 p-4 rounded-xl text-white font-semibold transition-all duration-200 hover:bg-sky-900 hover:font-bold'} onClick={handleSubmit}>Save</CustomButton> 
                <CustomButton className={'bg-red-500 p-4 rounded-xl text-white font-semibold transition-all duration-200 hover:bg-red-900 hover:font-bold'} onClick={handleCancel}>Cancel</CustomButton> 
                </div>:
                <CustomButton className={'bg-emerald-500 p-4 rounded-xl text-white font-semibold transition-all duration-200 hover:bg-emerald-900 hover:font-bold'} onClick={()=>{handleEdit(product)}}>edit</CustomButton>
                }
               </td>
            
         
            </tr>
            
          })}
        
        </tbody>
      </table>
    </div>
          <div className=" flex flex-row items-center justify-center mt-4 gap-5">
            <select onChange={(e)=>{setSortOrder(e.target.value)}}>
              <option value="asc" >Ascending</option>
              <option value="desc">Decending</option>
            </select>
          <CustomButton className={' bg-sky-200 p-2 font-bold rounded-lg transition-colors duration-200 hover:bg-gray-500 hover:text-white'}  onClick={()=>setPage(p=>p-1)} disabled={page===1}>Previous</CustomButton>
          <CustomButton className={' bg-sky-200 p-2 font-bold rounded-lg transition-colors duration-200 hover:bg-gray-500 hover:text-white'}   onClick={()=>setPage(p=>p+1)}  disabled={page===totalPages}>Next</CustomButton>
          
          </div>
        
    </div>
  )
}
