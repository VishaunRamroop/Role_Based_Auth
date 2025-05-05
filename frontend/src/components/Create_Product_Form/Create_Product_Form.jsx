import {useState} from 'react';
import CustomButton from '../Custom_Components/Custom_Button';
import CustomInput from '../Custom_Components/Custom_Input';
import useAdminProvider from '../../contexts/Admin_Context';
import {Barcode,Banknote,Type,File,Calculator,Check,X,SendHorizonal} from 'lucide-react';
import './Create_Product_Form.css'
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
  await createProduct(form);
  setFormData({
    name:'',
    category:'',
    price:'',
    inStock:true,
    stock:'1',
    url:''
  })
};
console.log(formData)
  return (
    <div
    className='create-product--container'
    >
      <h2 className="form-title">Create New Product</h2>
      <form onSubmit={handleSubmit}  className='form-content'>
    <div className="form-group">
    <CustomInput type={'text'} icon={Barcode} placeholder={'Product Name'} 
        name={'name'}
        onChange={handleChange}/>
     
        <CustomInput type={'text'} icon={Type} placeholder={'Product Category'}
        name={'category'}
        onChange={handleChange}/>
    </div>
    <div className="form-group">
    <CustomInput type={'text'} icon={Banknote} placeholder={'Product Price'}
           name={'price'}
        onChange={handleChange}/>
      
        <CustomInput type={'text'} icon={Calculator} placeholder={'Amount of Products in stock'}
        name={'stock'}
        onChange={handleChange}/>
        {formData.url && typeof formData.url ==='object' && (
          <img src={URL.createObjectURL(formData.url)} alt='image preview'/>
        )}
    </div>
  <div className="form-group">
  <CustomInput type={'file'} icon={File} name={'url'} onChange={handleChange}/>
  <CustomButton type={'submit'} icon={SendHorizonal}>Create Product</CustomButton>
  </div>
      </form>

    </div>
  )
}
