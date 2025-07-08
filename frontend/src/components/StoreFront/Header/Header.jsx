import {useState} from 'react'
import { Link } from 'react-router-dom';
import useCartContext from '../../../contexts/Cart_Context';
import useAuthProvider from '../../../contexts/Auth_Context';
export default function Header({background}) {
  const [open, setOpen] = useState(false);
const{cookies,Logout}= useAuthProvider()
  const {isOpen,setIsOpen,cart} = useCartContext();


 const CartIcon = ({ className = "w-6 h-6" }) => (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7M9.5 18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" 
      />
    </svg>
  );

const cartTotal= cart?.reduce((total,item)=>total +item.quantity,0)||0;

  return (
    <header className={` bg-gray-800 `}>
      <nav >
       
      
            
        <ul className={`flex  flex-row w-full items-center justify-between  text-white p-4`}>
        
     
           <button className='md:hidden' onClick={()=>setOpen(!open)}>Menu</button>
           <div className="hidden md:flex md:items-center md:justify-between w-full">
             <li className='text-lg w-fit sm:text-md md:text-lg lg:text-2xl '><span> Store Front </span></li>
          <li><Link to="/" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl ">Home</Link></li>
      
          {cookies.token?  <li><Link onClick={()=>Logout()} to="/login" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl ">Logout</Link></li>:  <li><Link to="/login" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl ">Login</Link></li>}
        
           <li onClick={()=>setIsOpen(true)}><Link to="#" className="hover:underline flex gap-1 "><CartIcon className='sm:w-6 sm:h-6 md:w-8 md:h-8'/>  {cartTotal>0 && <span className={``}>{cartTotal}</span>} </Link></li>
          </div>
        </ul>
          
        
         
         {open && (    <ul className="flex flex-col items-start  md:hidden   bg-gray-800 text-white p-4  ">
            
          
          
          <li><Link to="/" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl " >Home</Link></li>
          
           {cookies.token?  <li><Link onClick={()=>Logout()} to="/login" className="hover:underline flex gap-1 w-fit sm:text-md md:text-lg lg:text-2xl ">Logout</Link></li>:  <li><Link to="/login" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl ">Login</Link></li>}
          <li onClick={()=>setIsOpen(true)}><Link to="#" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl ">
          
          <CartIcon className='sm:w-6 sm:h-6 md:w-8 md:h-8'/> 
          {cartTotal>0 && <span>{cartTotal}</span>}
          </Link></li>
        </ul>)}
       
      </nav>
    </header>
  )
}
