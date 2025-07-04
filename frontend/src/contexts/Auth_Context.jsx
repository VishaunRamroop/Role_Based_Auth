import axios from "axios";
import { useContext,createContext } from "react";
import { useState } from "react";
import {useCookies} from 'react-cookie';
import { Navigate } from "react-router-dom";
const AuthContext = createContext();



export  function AuthProvider({children}){
 const [cookies,setCookie,removeCookie]= useCookies()
  const [err,setErr]=  useState('');
  const [loading,setLoading]= useState(false)
  const [role,setRole]= useState('user');
  const [user,setUser]= useState({})
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [name,setName]= useState('');

axios.defaults.withCredentials=true
const API_URL = import.meta.env.API_URL || '/api';
const base_url = `${API_URL}/auth`;
async function Signup(name,email,password) {
  try {
    setLoading(true)
    const response = await axios.post(`${base_url}/register`,{name,email,password});
    setErr('');  
    return response;

  } catch (error) {
    console.error(error);
    const message = error.response?.data?.message || 'Something went wrong';
    console.error(message);
    setErr(message);
    throw new Error(message);
  }finally{
    setLoading(false)
  }
};


async function Login(email,password){
  console.log(email,password)
  try {
    const result = await axios.post(`${base_url}/login`,{email:email,password:password});
  
  
     console.log(result)
    if(result){
      setUser(result.data.user)
      setCookie('token',result.data.user.token)
    }
    setErr('');
    console.log(result)
    return result      
  } catch (error) {
    console.error(error);
    const message = error.response?.data?.message || 'Something went wrong';
    console.error(message);
    setErr(message);
    throw new Error(message);
  }finally{
    setLoading(false)
    setEmail('')
    setPassword('')
  }
};
console.log(user)
async function Logout(){
  ['token'].forEach((cookie)=>{
    removeCookie(cookie)
  });

}


  let values={Login,email,setEmail,password,setPassword,name,setName,user,Logout,cookies,loading,setLoading,err,setErr,Signup}
  return <AuthContext.Provider value={values}>
    {children}
  </AuthContext.Provider>
}

export default function useAuthProvider() {
  return useContext(AuthContext)
}