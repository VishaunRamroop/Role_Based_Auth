import {useState} from 'react'
import { Link } from 'react-router-dom';
import useCartContext from '../../../contexts/Cart_Context';
import useAuthProvider from '../../../contexts/Auth_Context';
import CustomButton from '../../Custom_Components/Custom_Button';
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

  // Safe inline Menu Icon (no external links)
  const MenuIcon = ({ className = "w-6 h-6" }) => (
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
        d="M4 6h16M4 12h16M4 18h16" 
      />
    </svg>
  );

const cartTotal= cart?.reduce((total,item)=>total +item.quantity,0)||0;

  return (
    <header className={` bg-gray-800   `}>
      <nav className='transform transition-all duration-200 ease-in-out ' >
       
      
            
        <ul className={`sm:hidden md:flex  flex-row w-full items-center justify-between  text-white md:p-4 z-50`}>
        
     
           <div className="hidden md:flex md:items-center md:justify-between w-full">
             <li className='text-lg w-fit sm:text-md md:text-lg lg:text-2xl hover:underline'><Link to="/" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl ">Store Front</Link></li>
          <li><Link to="/" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl ">Home</Link></li>
      
          {cookies.token?  <li><Link onClick={()=>Logout()} to="/login" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl ">Logout</Link></li>:  <li><Link to="/login" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl ">Login</Link></li>}
        
           <li onClick={()=>setIsOpen(true)}><Link to="#" className="hover:underline flex gap-1 "><CartIcon className='sm:w-6 sm:h-6 md:w-8 md:h-8'/>  {cartTotal>0 && <span className={``}>{cartTotal}</span>} </Link></li>
          </div>
        </ul>
          
        
          <div className="flex items-center justify-between p-1 md:hidden">
             
         <div className="flex flex-col items-start justify-start p-4 md:hidden">
            <CustomButton className='md:hidden z-50 text-white ' onClick={()=>setOpen(!open)}><MenuIcon/></CustomButton>
         <ul className={` transform transition-all duration-200 ease-in-out text-white  ${open?'opacity-100 translate-y-0':'-tran5slate-y-full opacity-0 fixed'}`}>
            
              <li className='text-lg w-fit sm:text-md md:text-lg lg:text-2xl hover:underline'><Link to={'/'}> Store Front </Link></li>
          
          <li><Link to="/" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl " >Home</Link></li>
          
           {cookies.token?  <li><Link onClick={()=>Logout()} to="/login" className="hover:underline flex gap-1 w-fit sm:text-md md:text-lg lg:text-2xl ">Logout</Link></li>:  <li><Link to="/login" className="hover:underline w-fit sm:text-md md:text-lg lg:text-2xl ">Login</Link></li>}
   
        </ul>
       
         </div>
               <CustomButton onClick={()=>setIsOpen(true)}><Link to="#" className="hover:underline sm:text-md md:text-lg lg:text-2xl text-white ">
          
          
          {cartTotal>0 && <span>{cartTotal}</span>}
          </Link><CartIcon className='w-6 h-6 hover:animate-pulse text-white'/> </CustomButton>
          </div>
      </nav>
    </header>
  )
}
