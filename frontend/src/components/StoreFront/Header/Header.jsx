import {useState} from 'react'
import { Link } from 'react-router-dom';
import useCartContext from '../../../contexts/Cart_Context';
export default function Header({background}) {
  const [open, setOpen] = useState(false);

  const {isOpen,setIsOpen} = useCartContext()
  return (
    <header className={`${background? background:'bg-gray-800'} `}>
      <nav >
       
      
            
        <ul className={`flex  flex-row w-full items-center justify-between  text-white p-4`}>
        
     
           <button className='md:hidden' onClick={()=>setOpen(!open)}>Menu</button>
           <div className="hidden md:flex md:items-center md:justify-between w-full">
             <li className='text-lg w-fit '><span> Store Front </span></li>
          <li><Link to="/" className="hover:underline">Home</Link></li>
      
          
          <li><Link to="/login" className="hover:underline">Login</Link></li>
           <li onClick={()=>setIsOpen(true)}><Link to="#" className="hover:underline"><span>&#x1F6D2;</span></Link></li>
          </div>
        </ul>
          
        
         
         {open && (    <ul className="flex flex-col items-start  md:hidden   bg-gray-800 text-white p-4  ">
            
          
          
          <li><Link to="/" className="hover:underline">Home</Link></li>
          
          <li><Link to="/login" className="hover:underline">Login</Link></li>
          <li onClick={()=>setIsOpen(true)}><Link to="#" className="hover:underline"><span>&#x1F6D2;</span></Link></li>
        </ul>)}
       
      </nav>
    </header>
  )
}
