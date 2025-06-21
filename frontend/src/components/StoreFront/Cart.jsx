
import CustomModal from '../Custom_Components/Custom_Modal';
import CustomButoon from '../Custom_Components/Custom_Button'
import useCartContext from '../../contexts/Cart_Context';
export default function Cart() {
  const {cart,isOpen,setIsOpen,add,minus}= useCartContext();

console.log(cart)

  return (
     <CustomModal modalContainer={`fixed inset-0 flex items-center justify-end bg-opacity-50 `}  modalWrapper={`bg-white h-full  w-[25rem]  shadow-lg relative z-50  transition-transform duration-300  ${isOpen?'translate-x-0 ':'translate-x-full'}
 `} modalButton={``} close={isOpen} onClose={()=>setIsOpen(false)}>
    <div className=' flex flex-col p-4 max-w-[85vw]'>
     
      {cart.length >0 ? cart?.map((item,index)=>{
    return    <div className= {`w-100 flex items-center justify-between gap-4 p-4 outline-solid outline-1 outline-gray-200 rounded-lg transition-all duration-200 hover:bg-gray-300`} key={item.name}>
      <img src={item.url} alt="" className="w-20 h-20 rounded-lg" />
      <p className='text-lg font-semibold w-10'>{item.name} x:{item.quantity}</p>
      <p className=' text-xl font-semibold'>${item.price}</p>
      <CustomButoon className={`bg-blue-500 p-2 rounded-lg text-white font-semibold transition-all duration-200 active:bg-blue-900 font-black`} onClick={()=>{add(item)}}>Add</CustomButoon>
      <CustomButoon className={`bg-red-500 p-2 rounded-lg text-white font-semibold transition-all duration-200 active:bg-red-900 font-black`} onClick={()=>{minus(item)}}>Minus</CustomButoon>
    
    </div>
      }):<p>No items in cart</p>}
 
    </div>
         </CustomModal>
  )
}
