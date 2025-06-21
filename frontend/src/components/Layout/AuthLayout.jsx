
import {Outlet} from 'react-router-dom';
import Header from '../StoreFront/Header/Header';
import Footer from '../StoreFront/Footer/Footer';
export default function AuthLayout() {
  return (
    <div className='bg-gray-800  flex flex-col justify-evenly items-center   min-h-screen'> 
    <Header background={`bg-gray-500 w-full`}/>
    <div className="flex  flex-1 ">
        
          <main className='flex flex-col flex-1 items-center justify-center'>
            {   <Outlet/>}
        </main>
        
    </div>
    <Footer background={`bg-gray-500 w-full`}/>
    </div>
  )
}
