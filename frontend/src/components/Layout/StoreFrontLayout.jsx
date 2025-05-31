import {useState} from 'react';
import Header from '../StoreFront/Header/Header';
import Footer from '../StoreFront/Footer/Footer';
import { Outlet } from 'react-router-dom';
export default function StoreFrontLayout({children}) {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Header />
      <div className="flex flex-1">
   
        <main className="flex-1 p-4">
       <Outlet/>
        </main>
      </div>
      <Footer />
    </div>
  )
}
