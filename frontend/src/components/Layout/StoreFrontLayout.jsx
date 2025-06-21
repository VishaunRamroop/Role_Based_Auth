
import Header from '../StoreFront/Header/Header';
import Footer from '../StoreFront/Footer/Footer';
import Promo from '../StoreFront/Promo/Promo';
import { Outlet } from 'react-router-dom';
export default function StoreFrontLayout() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      
      <div className="flex flex-1 flex-col ">
        <Header />
        <Promo />
        <main className="flex-1 p-4">
       
         {<Outlet />}
        </main>
      </div>
      <Footer />
    </div>
  )
}
