import {useState} from 'react';
import CustomButton from '../components/Custom_Components/Custom_Button';
import CustomInput from '../components/Custom_Components/Custom_Input';
import useAuthProvider from '../contexts/Auth_Context';
import {Lock,Mail,SendHorizonal,User} from 'lucide-react';
import { useNavigate,Link } from 'react-router-dom';
import { inputStyles, signupButtonStyles } from '../utils/stlyes.mjs';
import CustomForm from '../components/Custom_Components/Custom_Form';
import Cart from '../components/StoreFront/Cart';
export default function Signup() {
  const {Signup,email,setEmail,password,setPassword,name,setName,loading,setLoading,err,setErr}= useAuthProvider();
  const nav= useNavigate();
  async function handleSignup(e){
    e.preventDefault()
    const response = await Signup(name,email,password);
    if(response?.status === 201){
      setLoading(false);
      setErr(null);
      nav('/login');
    };

      setEmail('')
      setPassword('')
  };
 
  return (
   
 <>
 
    <CustomForm onSubmit={handleSignup}  title='Signup'
    className='flex flex-col items-center justify-center bg-white'
    >
       
        <CustomInput type={'text'} icon={User} placeholder={'Enter your name.'} value={name} onChange={(e)=>{setName(e.target.value)}} className={inputStyles}/>
        <CustomInput type={'email'} icon={Mail} placeholder={'Enter your email.'} value={email} onChange={(e)=>{setEmail(e.target.value)}} className={inputStyles}/>
          
        <CustomInput type={'password'} icon={Lock} placeholder={'Enter your password.'} value={password} onChange={(e)=>{setPassword(e.target.value)}} className={inputStyles}/>
        <CustomButton type={'submit'} className={`${signupButtonStyles} sm:text-lg md:text-xl lg:text-2xl font-bold transition-all duration-200 hover:bg-emerald-500`} icon={SendHorizonal} disabled={loading}>Signup</CustomButton>
        <p className='font-bold sm:text-lg md:text-xl lg:text-2xl font-bold transition-all duration-200 '>Already have an Account?<Link to={'/login'}><span className='sm:text-lg md:text-xl lg:text-2xl text-blue-900 font-bold transition-all duration-200 font-bold ml-2'>Login</span></Link></p>
         {err  && <p className='text-red-500 font-bold text-lg'>{err}</p>}
      </CustomForm>
      <Cart/>
 </>
      
   
  )
}
