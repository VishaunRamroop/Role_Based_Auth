import {useState} from 'react';
import CustomInput from '../components/Custom_Components/Custom_Input';
import CustomButton from '../components/Custom_Components/Custom_Button';
import {Mail,Lock,SendHorizonal} from 'lucide-react';
import useAuthProvider from '../contexts/Auth_Context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomForm from '../components/Custom_Components/Custom_Form';
import { inputStyles, loginButtonStyles } from '../utils/stlyes.mjs';
import Cart from '../components/StoreFront/Cart';
export default function Login() {
  const {Login,email,setEmail,password,setPassword,user,cookies,loading,setLoading,err,setErr}= useAuthProvider();
  
const nav= useNavigate();
  console.log(email)
  async function handleLogin(e) {
    e.preventDefault();

   try {
    setLoading(true)
    const response = await Login(email,password);
    if(response){
      setLoading(false)
      setErr('')
    }
   } catch (error) {
    console.error(error);
 
   }finally{
    setLoading(false);
    setEmail('');
    setPassword('')
   }

  }


  return (
   

    
<>


      <CustomForm onSubmit={handleLogin} 
          className='flex flex-col items-center justify-center bg-white ' title='Login'>
                
            <CustomInput type={'email'} aria={'email field'} placeholder={'Enter your name.'} icon={Mail} value={email} onChange={(e)=>{setEmail(e.target.value)}} className={inputStyles}/>
            <CustomInput type={'password'} aria={'password field'} placeholder={'Enter your password.'} icon={Lock} value={password} onChange={(e)=>{setPassword(e.target.value)}} className={`${inputStyles}`}/>
           <CustomButton alt={'Login button'} className={`${loginButtonStyles} transition-all duration-200 hover:bg-blue-700 hover text-gray-400`} disabled={loading} icon={SendHorizonal} type={'submit'}  >Login</CustomButton>
            {err && <p className='err-msg'>{err}</p>}
             <p className='font-bold sm:text-lg md:text-xl lg:text-2xl '>Don't have an Account? <Link  to={'/signup'}><span className=' sm:text-lg md:text-xl lg:text-2xl text-blue-900 font-bold transition-all duration-200 hover:underline ml-2'>Signup</span></Link></p>
          </CustomForm>
         <Cart/>
</>
      
  
  )
}
