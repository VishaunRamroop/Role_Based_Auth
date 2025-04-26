import {useState} from 'react';
import CustomButton from '../components/Custom_Button';
import CustomInput from '../components/Custom_Input';
import useAuthProvider from '../contexts/Auth_Context';
import {Lock,Mail,SendHorizonal,User} from 'lucide-react';
import { useNavigate,Link } from 'react-router-dom';
import './Signup.css'
export default function Signup() {
  const {Signup,email,setEmail,password,setPassword,name,setName,loading,setLoading,err,setErr}= useAuthProvider();
  const nav= useNavigate();
  async function handleSignup(e){
    e.preventDefault()
    const response = await Signup(name,email,password);
  
  }
  return (
    <div className='signup-container'>
  <div className="form-box">
  <form onSubmit={handleSignup} className='signup-wrapper'>
        <h1>Signup</h1>
        <CustomInput type={'text'} icon={User} placeholder={'Enter your name.'} value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <CustomInput type={'email'} icon={Mail} placeholder={'Enter your email.'} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <CustomInput type={'password'} icon={Lock} placeholder={'Enter your password.'} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <CustomButton type={'submit'} className='signup-btn'  icon={SendHorizonal} disabled={loading}>Signup</CustomButton>
      </form>
      <p style={{fontSize:'20px',fontWeight:'bold'}}>Already have an Account?<Link to={'/login'}>Login</Link></p>
  </div>
    </div>
  )
}
