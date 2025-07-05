
import CustomButton from '../Custom_Components/Custom_Button'
import {useProductContext} from '../../contexts/Product_Context'
export default function Pagination() {
const {totalPages,page,setPage} = useProductContext();


    function getTotalPages(){
    const pagesArray = [];
    const range=2;
   pagesArray.push(1);
      if(page >=range)pagesArray.push('...');
    for(let i= Math.max(2,page-range);i<=Math.min(totalPages,page+range);i++){
      
      pagesArray.push(i);
      
    }
    if(page <totalPages-range)pagesArray.push('...');
      
   
    
    return pagesArray
    }
   const totalP = getTotalPages();

  return (
    <div className='flex justify-center items-center gap-2 bg-gray-200 p-2 rounded-md '>
      <CustomButton className={`bg-sky-400 rounded font-bold`} onClick={()=>setPage(p=>p<=1?1:p-1)}>Prev</CustomButton>
      {totalP.map((p,index)=>{
      return  <CustomButton className={`` + (p===page ? 'bg-blue-500 text-white p-2 rounded-lg' : 'bg-gray-300 text-black')} key={index} onClick={()=>{if(p!=='...')setPage(p)}}>
        {p}
        </CustomButton>
      })}
      <CustomButton className={`bg-sky-400 rounded font-bold`} onClick={()=>setPage(p=>p===totalPages?totalPages:p+1)}>Next</CustomButton>
    </div>
  )
}
