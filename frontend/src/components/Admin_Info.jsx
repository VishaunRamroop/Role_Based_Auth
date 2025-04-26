import {useState} from 'react';
import useAuthProvider from '../contexts/Auth_Context';
import { jwtDecode } from 'jwt-decode';
import './Admin_Info.css'
export default function AdminInfo({props}) {
  const {user,cookies}= useAuthProvider();
  const decode = jwtDecode(cookies.token);
console.log(user)
  console.log(decode)
  return (
    <div className='admin-info-container'>
      <table>
        <thead>
       <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Title</th>
       </tr>
          </thead>
          <tbody>
         <tr>
         <td>{decode.id}</td>
            <td>{decode.name}</td>
            <td>{decode.role}</td>
         </tr>
          </tbody>
      </table>
      
      </div>
  )
}
