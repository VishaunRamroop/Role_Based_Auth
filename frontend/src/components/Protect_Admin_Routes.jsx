import {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom';
import useAuthProvider from '../contexts/Auth_Context';
import { jwtDecode } from 'jwt-decode';
import { Navigate} from 'react-router-dom';

export default function ProtectAdminRoutes() {
  const {cookies,Logout} = useAuthProvider();

// checks if there is a valid token
// even if a user/admin or a non registered user
// will be redirected back to login if they try to access the admin routes
const currentTime = Math.floor(Date.now()/1000)
if(!cookies?.token){
  return <Navigate to={'/login'} replace/>
};

let decode;
try {
  decode = jwtDecode(cookies?.token);
console.log(decode.exp <currentTime)
} catch (error) {
  console.error(error);
 return  <Navigate to={'/login'} replace/>
};
// if the role is not an admin the we go to home

//if everything checks out, there is a token, and the user is admin then we return the outlet which is the component wrapping the admin  routes in the App.jsx;



if(decode?.role!=='admin'){
  return <Navigate to={'/'} replace/>
} 

useEffect(()=>{

},[])

  return <Outlet/>
     
}
