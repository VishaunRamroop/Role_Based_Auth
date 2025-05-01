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
const base_url=`http://localhost:3000/api/auth`;

async function Signup(name,email,password) {
  try {
    setLoading(true)
    const response = await axios.post(`${base_url}/register`,{name,email,password});
    return response;

  } catch (error) {
    console.error(error);
    setErr(error)
  }finally{
    setLoading(false)
  }
};


async function Login(email,password){
  console.log(email,password)
  try {
    const result = await axios.post(`${base_url}/login`,{email:email,password:password});
  
  

    if(result){
      setUser(result.data.user)
      setCookie('token',result.data.user.token)
    }
 
    return result      
  } catch (error) {
    console.error(error);
    setErr(error.response.data.message)
  }
};

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