import {useEffect} from 'react';
import useAuthProvider from '../../../contexts/Auth_Context';
import { jwtDecode } from 'jwt-decode';
import useAdminProvider from '../../../contexts/Admin_Context';
import {tdStyles} from '../../../utils/stlyes.mjs';
export default function AdminInfo() {
  const {cookies}= useAuthProvider();
  const {getAdminInfo,info,setInfo}= useAdminProvider()
  const decode = jwtDecode(cookies.token);



async function getInfo(){
  setInfo( await getAdminInfo())
}

useEffect(()=>{
getInfo()
},[])
  return (

      <table className='min-w-full divide-y divide-gray-200 mb-10 '>
        <thead className='bg-gray-50'>
       <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Title</th>
          <th>EMAIL</th>
          <th>Last Login</th>
       </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
         <tr className='hover:bg-gray-100 transition-all duration-200 text-center'>
         <td className={tdStyles}>{decode?.id}</td>
            <td className={tdStyles}>{info?.name}</td>
            <td className={tdStyles}>{decode?.role}</td>
            <td className={tdStyles}>{info?.email}</td>
            <td className={tdStyles}>{info.lastLogin}</td>
         </tr>
          </tbody>
      </table>

  )
}
