import { useState,useContext,createContext } from "react";

const cartContext = createContext()

export  function CartProvider({children}){

  const [cart,setCart]= useState([]);
  const [isOpen,setIsOpen]= useState(false)



function add(product){
  try {
   setCart(prev=>{
    const existingProduct = cart.find((pro)=>pro._id===product._id)

    if(existingProduct){
      return  prev.map((item)=>item._id ===product._id? {...item,quantity:item.quantity+1}:item)
    }else{
      return [...prev,{...product,quantity:1}]
    }
   })
   

  } catch (error) {
    
  }
}

function minus(product){

  setCart(prev=>{
    const existingProduct = prev?.find((item)=>item._id ===product._id);
    if(!existingProduct)return prev;
    if(existingProduct){
      if(existingProduct.quantity===1){
        return prev.filter((item)=>item._id!==existingProduct._id)
      }else{
        return prev.map((item)=>item._id===product._id? {...item,quantity:item.quantity-1}:item)
      }
    }
  })
}

  const values={cart,add,minus,isOpen,setIsOpen}
  return <cartContext.Provider  value={values}>
    {children}
  </cartContext.Provider>
}



export default function useCartContext(){
  return useContext(cartContext)
}