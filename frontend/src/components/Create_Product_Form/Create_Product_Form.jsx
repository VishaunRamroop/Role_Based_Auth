import {useState} from 'react';
import CustomButton from '../Custom_Components/Custom_Button';
import CustomInput from '../Custom_Components/Custom_Input';
import useAdminProvider from '../../contexts/Admin_Context';
import {Barcode,Banknote,Type,File,Calculator,Check,X,SendHorizonal} from 'lucide-react';
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
  await createProduct(form)
};
console.log(formData)
  return (
    <div
    className='form-container'
    >
      <form onSubmit={handleSubmit} >
        <CustomInput type={'text'} icon={Barcode} placeholder={'Product Name'} 
        name={'name'}
        onChange={handleChange}/>
     
        <CustomInput type={'text'} icon={Type} placeholder={'Product Category'}
        name={'category'}
        onChange={handleChange}/>
           <CustomInput type={'text'} icon={Banknote} placeholder={'Product Price'}
           name={'price'}
        onChange={handleChange}/>
        <label>
          InStock
        <CustomInput type={'checkbox'} icon={Check}onChange={handleChange} name={'inStock'}/>
   
        </label>
        <CustomInput type={'text'} icon={Calculator} placeholder={'Amount of Products in stock'}
        name={'stock'}
        onChange={handleChange}/>
        <CustomInput type={'file'} icon={File} name={'url'} onChange={handleChange}/>
        <CustomButton type={'submit'} icon={SendHorizonal}>Create Product</CustomButton>
      </form>

    </div>
  )
}
