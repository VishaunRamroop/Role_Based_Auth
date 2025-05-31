import {useState} from 'react';
import CustomInput from '../components/Custom_Components/Custom_Input';
import CustomButton from '../components/Custom_Components/Custom_Button';
import {Mail,Lock,SendHorizonal} from 'lucide-react';
import useAuthProvider from '../contexts/Auth_Context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomForm from '../components/Custom_Components/Custom_Form';

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


  const classStlyes='flex items-center gap-2 bg-white shadow-md p-2 rounded-lg transition-all duration-200 hover:shadow-lg focus-within:shadow-xl'
  return (
    <div className='bg-gray-800   flex items-center justify-center min-h-screen min-w-full'> 

    


      <CustomForm onSubmit={handleLogin} 
          className='flex flex-col items-center justify-center' title='Login'>
                
            <CustomInput type={'email'} aria={'email field'} placeholder={'email'} icon={Mail} value={email} onChange={(e)=>{setEmail(e.target.value)}} className={classStlyes}/>
            <CustomInput type={'password'} aria={'password field'} placeholder={'password'} icon={Lock} value={password} onChange={(e)=>{setPassword(e.target.value)}} className={classStlyes}/>
           <CustomButton alt={'Login button'} className={'bg-emerald-500 p-2 rounded-lg cursor-pointer text-white font-bold text-xl'} disabled={loading} icon={SendHorizonal} type={'submit'} >Login</CustomButton>
            {err && <p className='err-msg'>{err}</p>}
             <p className='font-bold text-lg '>Don't have an Account? <Link  to={'/signup'}>Signup</Link></p>
          </CustomForm>
         
      
        
    </div>
  )
}
