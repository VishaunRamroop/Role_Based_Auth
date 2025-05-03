import {useState,useEffect} from 'react';
import useAuthProvider from '../../contexts/Auth_Context';
import { jwtDecode } from 'jwt-decode';
import useAdminProvider from '../../contexts/Admin_Context';
import './Admin_Info.css'
export default function AdminInfo({props}) {
  const {user,cookies}= useAuthProvider();
  const {getAdminProducts,getAdminInfo,info,setInfo}= useAdminProvider()
  const decode = jwtDecode(cookies.token);
// console.log(user)
//   console.log(decode)


async function getInfo(){
  setInfo( await getAdminInfo())
}

useEffect(()=>{
getInfo()
},[])
  return (
    <div className='admin-info-container' >
      <table>
        <thead>
       <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Title</th>
          <th>EMAIL</th>
          <th>Last Login</th>
       </tr>
          </thead>
          <tbody>
         <tr>
         <td>{decode?.id}</td>
            <td>{info?.name}</td>
            <td>{decode?.role}</td>
            <td>{info?.email}</td>
            <td>{info.lastLogin}</td>
         </tr>
          </tbody>
      </table>
      
      </div>
  )
}
