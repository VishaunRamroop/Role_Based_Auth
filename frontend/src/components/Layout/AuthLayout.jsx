
import {Outlet} from 'react-router-dom';
import Header from '../StoreFront/Header/Header';
import Footer from '../StoreFront/Footer/Footer';
export default function AuthLayout() {
  return (
    <div className=' flex flex-col   min-h-screen'> 
   
    <div className="flex flex-col  flex-1 ">
         <Header />
          <main className='flex flex-col flex-1 bg-gray-200 items-center justify-center'>
            {   <Outlet/>}
        </main>
        
    </div>
    <Footer />
    </div>
  )
}
