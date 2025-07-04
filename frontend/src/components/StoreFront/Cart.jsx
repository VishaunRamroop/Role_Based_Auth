
import CustomModal from '../Custom_Components/Custom_Modal';
import CustomButton from '../Custom_Components/Custom_Button'
import useCartContext from '../../contexts/Cart_Context';
export default function Cart() {
  const {cart,isOpen,setIsOpen,add,minus}= useCartContext();

console.log(cart)
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const taxRate = 0.08; 
  const taxAmount = subtotal * taxRate;
  const totalAmount = subtotal + taxAmount;
  return (
     <CustomModal modalContainer={`fixed inset-0 flex items-center justify-end bg-opacity-50 `}  modalWrapper={`bg-white h-full  w-[25rem]  shadow-lg relative z-50  transition-transform duration-300  ${isOpen?'translate-x-0 ':'translate-x-full'}
 `} modalButton={``} close={isOpen} onClose={()=>setIsOpen(false)}>
    <div className=' flex flex-col p-4 max-w-[85vw]'>
     
      {cart.length >0 ? cart?.map((item,index)=>{
    return    <div className= {`w-100 flex items-center justify-between gap-4 p-4 outline-solid outline-1 outline-gray-200 rounded-lg transition-all duration-200 hover:bg-gray-300`} key={item.name}>
      <img src={item.url} alt="" className="w-20 h-20 rounded-lg" />
      <p className='text-lg font-semibold w-10'>{item.name} x:{item.quantity}</p>
      <p className=' text-xl font-semibold'>${item.price}</p>
      <CustomButton className={`bg-blue-500 p-2 rounded-lg text-white font-semibold transition-all duration-200 active:bg-blue-900 font-black`} onClick={()=>{add(item)}}>Add</CustomButton>
      <CustomButton className={`bg-red-500 p-2 rounded-lg text-white font-semibold transition-all duration-200 active:bg-red-900 font-black`} onClick={()=>{minus(item)}}>Minus</CustomButton>
    
    </div>
      }):<div className="text-center py-8">
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-2">Add some products to get started!</p>
            </div>}
  {cart.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span>Tax ({(taxRate * 100).toFixed(0)}%):</span>
              <span>${taxAmount.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-lg font-bold border-t pt-3">
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <CustomButton className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-4">
              Proceed to Checkout
            </CustomButton>
          </div>
        )}
    </div>
         </CustomModal>
  )
}
