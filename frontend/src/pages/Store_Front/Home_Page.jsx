import {useState} from 'react'
import Products from '../../components/StoreFront/Products/Products';

import Cart from '../../components/StoreFront/Cart';
export default function HomePage() {
  return (
    <div>
   <Products /> 
   <Cart/>
    
    </div>
  )
}
