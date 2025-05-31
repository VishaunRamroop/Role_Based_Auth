import {useState,useRef} from 'react';
import CustomButton from '../../Custom_Components/Custom_Button';
import CustomInput from '../../Custom_Components/Custom_Input';
import useAdminProvider from '../../../contexts/Admin_Context';
import {Barcode,Banknote,Type,File,Calculator,Check,X,SendHorizonal} from 'lucide-react';
import CustomForm from '../../Custom_Components/Custom_Form';
export default function CreateProductForm() {
const [formData,setFormData]= useState({
  name:'',
  category:'',
  price:'',
  inStock:true,
  stock:'1',
  url:''
});
const {createProduct} = useAdminProvider();
const fileInputRef = useRef(null);
async function handleChange(e){
    const {name,type,checked,value,files}= e.target;
    if(type==='file'){
      setFormData({...formData,[name]:files[0]})
    }else if(type==='checkbox'){
      setFormData({...formData,[name]:checked})
    }else{
      setFormData({...formData,[name]:value})
    }
};
async function handleSubmit(e){
  e.preventDefault()

  const form = new FormData();
  form.append('name',formData.name)
  form.append('category',formData.category)
  form.append('price',formData.price)
  form.append('inStock',formData.inStock)
  form.append('stock',formData.stock)
  form.append('url',formData.url)
  await createProduct(form);
  setFormData({
    name:'',
    category:'',
    price:'',
    inStock:true,
    stock:'1',
    url:''
  });
  if(fileInputRef.current){
    fileInputRef.current.value = '';
  }
};
console.log(formData)
  return (
   
      
      <CustomForm onSubmit={handleSubmit} className={`min-h-screen  w-full flex flex-col gap-10 bg-gray-100 shadow-xl rounded-lg p-3 items-center`} >

    <CustomInput type={'text'}  aria={'name'} icon={Barcode} placeholder={'Product Name'} 
        name={'name'}
        onChange={handleChange}/>
     
        <CustomInput type={'text'} aria={'category'} icon={Type} placeholder={'Product Category'}
        name={'category'}
        onChange={handleChange}/>
  
    <CustomInput type={'text'}  aria={'price'}icon={Banknote} placeholder={'Product Price'}
           name={'price'}
        onChange={handleChange}/>
      
        <CustomInput type={'text'} aria={'stock'}icon={Calculator} placeholder={'Amount of Products in stock'}
        name={'stock'}
        onChange={handleChange}/>
        {formData.url && typeof formData.url ==='object' && (
          <img src={URL.createObjectURL(formData.url)} alt='image preview' className='w-24 h-24 object-cover rounded'/>
        )}
  

  <CustomInput type={'file'} ref={fileInputRef} icon={File} name={'url'} onChange={handleChange}/>
  <CustomButton className={`bg-green-500 p-2 rounded-lg text-white font-bold transition-all duration-200 hover:bg-green-800`} type={'submit'} icon={SendHorizonal}>Create Product</CustomButton>
  
      </CustomForm>


  )
}
