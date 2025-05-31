import {useState} from 'react';

import {Search} from 'lucide-react';
import AdminSidebar from '../Admin/Admin_Sidebar/Admin_Sidebar';

export default function Layout({children}) {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 '>
    
        <div className="flex bg-gray-900 ">
      <AdminSidebar />
        <main className="flex flex-col p-4 items-start bg-white min-h-screen w-full">
          {children}
        </main>
      </div>
    </div>
  )
}
