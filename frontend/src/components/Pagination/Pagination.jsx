
import CustomButton from '../Custom_Components/Custom_Button'
import {useProductContext} from '../../contexts/Product_Context'
export default function Pagination() {
const {totalPages,page,setPage} = useProductContext();

  const PrevIcon = () => (
    <svg className="sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

 
  const NextIcon = () => (
    <svg className="sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
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
    <div className='flex justify-center items-center gap-2 p-2 rounded-md sm:text-md md:text-lg lg:text-xl'>
      <CustomButton className={`bg-gray-400 rounded font-bold`} onClick={()=>setPage(p=>p<=1?1:p-1)}><PrevIcon/></CustomButton>
      {totalP.map((p,index)=>{
      return  <CustomButton className={`` + (p===page ? 'bg-gray-900 text-white p-2 rounded-lg' : 'bg-gray-300 text-black')} key={index} onClick={()=>{if(p!=='...')setPage(p)}}>
        {p}
        </CustomButton>
      })}
      <CustomButton className={`bg-gray-400 rounded font-bold `} onClick={()=>setPage(p=>p===totalPages?totalPages:p+1)}><NextIcon/></CustomButton>
    </div>
  )
}
