
import { Link } from 'react-router-dom';
import useAuthProvider from '../../../contexts/Auth_Context';
export default function AdminSidebar() {
  const {Logout}= useAuthProvider();
  async function handleLogout() {
    await Logout();
  }
  return (
    <aside className='flex min-h-screen  text-white items-start justify-start p-4'>
 
      <ul className='flex flex-col gap-25 items-start text-white w-64 p-4 space-y-2'>
        <Link to={'/admin'} className='text-white'>Home</Link>
        <Link to={'/create-product'}  className=''>Create Product</Link>
        <Link to={'/account-security'}  className='admin-option'>Security</Link>
        <Link to={'/login'}  className='' onClick={()=>handleLogout()}>Logout</Link>      
      </ul>
    </aside>
  )
}
