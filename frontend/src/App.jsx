import { useState } from 'react'
import Admin from './pages/Admin';
import {Route,Routes} from 'react-router-dom';
import useAuthProvider from './contexts/Auth_Context';
import Login from './pages/Login';
import { Navigate } from 'react-router-dom';
import './App.css'
import AccountInfo from './pages/Account_Info';
import AdminCreateProduct from './pages/Admin_Create_Product';
import ProtectAdminRoutes from './components/Protect_Admin_Routes';
import HomePage from './pages/Home_Page';
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
        
        <Route path='/login' element={
         <CheckRole> <Login/> </CheckRole> 
        }/>
        <Route path='/signup' element={<Signup/>}/>
          <Route element={<ProtectAdminRoutes/>}>
          <Route path='/admin' element= {
            <Admin/> }
         />
          <Route path='/account-info' element={<AccountInfo/>}/>
          <Route path='/create-product' element={<AdminCreateProduct/>}/>
          </Route>
          <Route path='/' element={<HomePage/>}/>
      </Routes>

    </div>
  )
}

export default App
