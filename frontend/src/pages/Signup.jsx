import {useState} from 'react';
import CustomButton from '../components/Custom_Components/Custom_Button';
import CustomInput from '../components/Custom_Components/Custom_Input';
import useAuthProvider from '../contexts/Auth_Context';
import {Lock,Mail,SendHorizonal,User} from 'lucide-react';
import { useNavigate,Link } from 'react-router-dom';

import CustomForm from '../components/Custom_Components/Custom_Form';
export default function Signup() {
  const {Signup,email,setEmail,password,setPassword,name,setName,loading,setLoading,err,setErr}= useAuthProvider();
  const nav= useNavigate();
  async function handleSignup(e){
    e.preventDefault()
    const response = await Signup(name,email,password);
  
  };
  const classStlyes='flex items-center gap-2 bg-white shadow-md p-2 rounded-lg transition-all duration-200 hover:shadow-lg focus-within:shadow-xl'
  return (
    <div className='bg-gray-800  flex items-center justify-center min-h-screen min-w-full'>
 
    <CustomForm onSubmit={handleSignup}  title='Signup'
    className='flex flex-col items-center justify-center'
    >
       
        <CustomInput type={'text'} icon={User} placeholder={'Enter your name.'} value={name} onChange={(e)=>{setName(e.target.value)}} className={classStlyes}/>
        <CustomInput type={'email'} icon={Mail} placeholder={'Enter your email.'} value={email} onChange={(e)=>{setEmail(e.target.value)}} className={classStlyes}/>
        <CustomInput type={'password'} icon={Lock} placeholder={'Enter your password.'} value={password} onChange={(e)=>{setPassword(e.target.value)}} className={classStlyes}/>
        <CustomButton type={'submit'} className={'bg-sky-500 p-2 rounded-lg cursor-pointer text-white font-bold text-xl'} icon={SendHorizonal} disabled={loading}>Signup</CustomButton>
        <p className='font-bold text-lg'>Already have an Account?<Link to={'/login'}>Login</Link></p>
      </CustomForm>
      

    </div>
  )
}
