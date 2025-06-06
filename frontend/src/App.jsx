import { useState } from 'react'
import Admin from './pages/Admin_Pages/Admin.jsx';
import {Route,Routes} from 'react-router-dom';
import useAuthProvider from './contexts/Auth_Context';
import Login from './pages/Login';
import { Navigate } from 'react-router-dom';
import './App.css'

import AdminCreateProduct from './pages/Admin_Pages/Admin_Create_Product';
import ProtectAdminRoutes from './components/Protected_Routes/Protect_Admin_Routes';
import HomePage from './pages/Store_Front/Home_Page.jsx';
import { jwtDecode } from 'jwt-decode';
import Signup from './pages/Signup';
 function CheckRole({children}) {
  const {cookies}= useAuthProvider();

  if(!cookies?.token) return children
  const decode = jwtDecode(cookies?.token)

    if(decode.role==='admin'){
      return <Navigate to={'/admin'} replace/>
    }
    else {
      return <Navigate to={'/'} replace/>
    }

};

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={
         <CheckRole> <Login/> </CheckRole> 
        }/>
        <Route path='/signup' element={<Signup/>}/>
          <Route element={<ProtectAdminRoutes/>}>
          <Route path='/admin' element= {
            <Admin/> }
         />
         
          <Route path='/create-product' element={<AdminCreateProduct/>}/>
          </Route>
          <Route path='/' element={<HomePage/>}/>
      </Routes>

    </div>
  )
}

export default App
