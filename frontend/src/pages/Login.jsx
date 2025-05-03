import {useState} from 'react';
import CustomInput from '../components/Custom_Components/Custom_Input';
import CustomButton from '../components/Custom_Components/Custom_Button';
import {Mail,Lock,SendHorizonal} from 'lucide-react';
import useAuthProvider from '../contexts/Auth_Context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css'
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
    <div className='login-container'>
  
      <div className="form-box">

      <form  onSubmit={handleLogin} 
          className='form-wrapper'>
                <h1>Login Page</h1>
            <CustomInput type={'email'} icon={Mail} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <CustomInput type={'password'} icon={Lock} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
           <CustomButton  disabled={loading} icon={SendHorizonal} type={'submit'} className='login-btn' >Login</CustomButton>
            {err && <p className='err-msg'>{err}</p>}
          </form>
          <p style={{fontSize:'20px',fontWeight:'bold'}}>Don't have an Account? <Link to={'/signup'}>Signup</Link></p>
      </div>
        
    </div>
  )
}
