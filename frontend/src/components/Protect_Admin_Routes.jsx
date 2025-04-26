import {useState} from 'react'
import { Outlet } from 'react-router-dom';
import useAuthProvider from '../contexts/Auth_Context';
import { jwtDecode } from 'jwt-decode';
import { Navigate} from 'react-router-dom';

export default function ProtectAdminRoutes() {
  const {cookies} = useAuthProvider();
// checks if there is a valid token
// even if a user/admin or a non registered user
// will be redirected back to login if they try to access the admin routes
if(!cookies?.token){
  return <Navigate to={'/login'} replace/>
};

let decode;
try {
  decode = jwtDecode(cookies?.token)
} catch (error) {
  console.error(error);
  <Navigate to={'/'}/>
};
// if the role is not an admin the we go to home
if(decode.role!=='admin'){
  return <Navigate to={'/'} replace/>
} 
//if everything checks out, there is a token, and the user is admin then we return the outlet which is the component wrapping the admin  routes in the App.jsx
  return <Outlet/>
     
}
